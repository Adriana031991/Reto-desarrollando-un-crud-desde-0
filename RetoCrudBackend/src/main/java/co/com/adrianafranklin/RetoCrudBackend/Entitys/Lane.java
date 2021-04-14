package co.com.adrianafranklin.RetoCrudBackend.Entitys;

import javax.persistence.*;

@Table(name = "Lane")
@Entity
public class Lane {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int numLane;

    @OneToOne()
    @JoinColumn(name = "car_id")
    private Car car;


    public Lane() {
    }

    public int getNumLane() {
        return numLane;
    }

    public void setNumLane(int numLane) {
        this.numLane = numLane;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }


}
