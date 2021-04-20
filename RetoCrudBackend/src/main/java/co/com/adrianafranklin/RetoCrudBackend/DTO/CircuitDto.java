package co.com.adrianafranklin.RetoCrudBackend.DTO;

import co.com.adrianafranklin.RetoCrudBackend.Entitys.Lane;
import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;

import java.util.List;

public class CircuitDto {

    private int id;
    private String name;
    private List<Lane> lanes;
    private int kilometers;

    public CircuitDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Lane> getLanes() {
        return lanes;
    }

    public void setLanes(List<Lane> lanes) {
        this.lanes = lanes;
    }

    public int getKilometers() {
        return kilometers;
    }

    public void setKilometers(int kilometers) {
        this.kilometers = kilometers;
    }
}