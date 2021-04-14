package co.com.adrianafranklin.RetoCrudBackend.Service;

import co.com.adrianafranklin.RetoCrudBackend.DTO.PlayerDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.ResponseDto;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;
import co.com.adrianafranklin.RetoCrudBackend.Repository.RepositoryPlayer;
import co.com.adrianafranklin.RetoCrudBackend.exception.ValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicePlayer {
    @Autowired
    private RepositoryPlayer repositoryPlayer;

    public ResponseDto Player() {
        return new ResponseDto(repositoryPlayer.findAll());
    }

    public ResponseDto savePlayer(PlayerDto playerDto) {
        //trae los datos del dto y los guarda en list
        Player player = new Player();
            player.setId(playerDto.getIdDto());
            player.setName(playerDto.getNameDto());
            player = repositoryPlayer.save(player);
            return new ResponseDto(player, "Se ha creado el jugador correctamente");

    }


    public ResponseDto deleteById(int id) {
        repositoryPlayer.deleteById( id);
        return new ResponseDto("jugador eliminado correctamente");

    }

    public ResponseDto get(int id) {
        return new ResponseDto(repositoryPlayer.findById(id).orElseThrow(() -> {
            throw new RuntimeException("El jugador a consultar no existe");
        }));
    }
}