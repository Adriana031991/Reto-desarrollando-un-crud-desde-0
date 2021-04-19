package co.com.adrianafranklin.RetoCrudBackend.DTO;

import co.com.adrianafranklin.RetoCrudBackend.Entitys.Player;

public class CarDto {

    private int idDto;
    private String nameDto;
    private Player driverDto;
    private int routeMts;
    private boolean winner;
    private int lane;

    public int getLane() {
        return lane;
    }

    public void setLane(int lane) {
        this.lane = lane;
    }

    public CarDto() {
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

    public Player getDriverDto() {
        return driverDto;
    }

    public void setDriverDto(Player driverDto) {
        this.driverDto = driverDto;
    }

    public int getRouteMts() {
        return routeMts;
    }

    public void setRouteMts(int routeMts) {
        this.routeMts = routeMts;
    }

    public boolean isWinner() {
        return winner;
    }

    public void setWinner(boolean winner) {
        this.winner = winner;
    }
}
