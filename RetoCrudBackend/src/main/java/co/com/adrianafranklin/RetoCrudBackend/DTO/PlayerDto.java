package co.com.adrianafranklin.RetoCrudBackend.DTO;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PlayerDto {

    private int idPlayerDto;
    private String namePlayerDto;

    public PlayerDto() {
    }

    public int getIdPlayerDto() {
        return idPlayerDto;
    }

    public void setIdPlayerDto(int idPlayerDto) {
        this.idPlayerDto = idPlayerDto;
    }

    public String getNamePlayerDto() {
        return namePlayerDto;
    }

    public void setNamePlayerDto(String namePlayerDto) {
        this.namePlayerDto = namePlayerDto;
    }
}
