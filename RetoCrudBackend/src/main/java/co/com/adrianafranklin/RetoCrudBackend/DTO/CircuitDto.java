package co.com.adrianafranklin.RetoCrudBackend.DTO;

import co.com.adrianafranklin.RetoCrudBackend.Entitys.Lane;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;

import java.util.List;

public class CircuitDto {

    private int idDto;
    private String nameDto;
    private List<Lane> laneList;
    private int kilometers;

    public CircuitDto() {
    }

    public int getIdDto() {
        return idDto;
    }

    public void setIdDto(int idDto) {
        this.idDto = idDto;
    }

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public List<Lane> getLaneList() {
        return laneList;
    }

    public void setLaneList(List<Lane> laneList) {
        this.laneList = laneList;
    }

    public int getKilometers() {
        return kilometers;
    }

    public void setKilometers(int kilometers) {
        this.kilometers = kilometers;
    }
}
