package co.com.adrianafranklin.RetoCrudBackend.Service;

import co.com.adrianafranklin.RetoCrudBackend.DTO.PlayerDto;
import co.com.adrianafranklin.RetoCrudBackend.DTO.ResponseDto;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;
import co.com.adrianafranklin.RetoCrudBackend.Repository.RepositoryPlayer;
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
        player.setId(playerDto.getIdPlayerDto());
        player.setName(playerDto.getNamePlayerDto());
        player = repositoryPlayer.save(player);

        return new ResponseDto(player, "Se ha creado la lista correctamente");
    }


    public ResponseDto deleteById(int id) {
        repositoryPlayer.deleteById((long) id);
        return new ResponseDto("ListTodo eliminado correctamente");

    }

    public ResponseDto get(int id) {
        return new ResponseDto(repositoryPlayer.findById((long) id).orElseThrow(() -> {
            throw new RuntimeException("El todo a consultar no existe");
        }));
    }
}