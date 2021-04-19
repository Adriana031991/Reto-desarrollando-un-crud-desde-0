package co.com.adrianafranklin.RetoCrudBackend.Service;

import co.com.adrianafranklin.RetoCrudBackend.DTO.CarDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.CircuitDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.ResponseDto;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Car;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;
import co.com.adrianafranklin.RetoCrudBackend.Repository.RepositoryCar;
import co.com.adrianafranklin.RetoCrudBackend.Repository.RepositoryCircuit;
import co.com.adrianafranklin.RetoCrudBackend.Repository.RepositoryPlayer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceCircuit {
    @Autowired
    private RepositoryCircuit repositoryCircuit;
    @Autowired
    private RepositoryPlayer repositoryPlayer;

    public ResponseDto circuits() {
        return new ResponseDto(repositoryCircuit.findAll());
    }

    public ResponseDto saveCircuit(CircuitDto circuitDto) {


        return new ResponseDto(null);

    }

    public ResponseDto get(int id) {
        return new ResponseDto(repositoryCircuit.findById(id).orElseThrow(() -> {
            throw new RuntimeException("El carro a consultar no existe");
        }));
    }
}