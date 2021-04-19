
package co.com.adrianafranklin.RetoCrudBackend.Service;

import co.com.adrianafranklin.RetoCrudBackend.DTO.CarDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.CircuitCarDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.ResponseDto;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.*;
import co.com.adrianafranklin.RetoCrudBackend.Repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private ServiceCircuit circuitService;

    @Autowired
    private ServiceCar serviceCar;

    @Autowired
    private PodiumService podiumService;

    @Autowired
    private LaneCarService laneCarService;

    public ResponseDto configureGame(CircuitCarDto circuitCarDto) {

        Game game = new Game();


        Circuit circuit = (Circuit) circuitService.get(circuitCarDto.getCircuit().getIdDto()).getData();
        game.setCircuit(circuit);

        List<LaneCar> lanesCars = new ArrayList<>();
        for (int i = 0; i < circuit.getLanes().size(); i++) {

            LaneCar laneCar = new LaneCar();

            Lane lane = circuit.getLanes().iterator().next();
            laneCar.setLane(lane);

            CarDto carDto = circuitCarDto.getCars().get(i);

            Car car = (Car) serviceCar.get(carDto.getIdDto()).getData();

            lane.setCar(car);
            laneCar.setCar(car);

            lanesCars.add(laneCar);

        }
        laneCarService.assignLanesToCars(lanesCars);

        game.setCircuit(circuit);

        this.saveGame(game);

        return this.startGame(game);
    }

    public ResponseDto saveGame(Game game) {

        gameRepository.save(game);

        return new ResponseDto(game);
    }

    private ResponseDto startGame(Game game) {

        Set<Lane> lanes = game.getCircuit().getLanes();

        Podium podium = new Podium();

        Circuit circuit = game.getCircuit();

        while (podium.getFirst() == null || podium.getSecond() == null
                || podium.getThird() == null) {

            for (Lane lane : lanes) {

                Car car = lane.getCar();


                if (!car.isWinner()) {

                    car.advance(); //el algoritmo para que avance está en la clase carro

                    if (car.getRouteMts() >= circuit.getKilometers() * 1000
                            && podium.getFirst() == null) {

                        podium.setFirst(car.getDriver());
                        car.setWinner(true);
                        break;

                    }
                    if (car.getRouteMts() >= circuit.getKilometers() * 1000
                            && podium.getSecond() == null) {

                        podium.setSecond(car.getDriver());
                        car.setWinner(true);
                        break;
                    }
                    if (car.getRouteMts() >= circuit.getKilometers() * 1000
                            && podium.getThird() == null) {

                        podium.setThird(car.getDriver());
                        car.setWinner(true);
                        break;
                    }
                }

            }
        }

        return podiumService.savePodium(podium);

    }
}
