package co.com.adrianafranklin.RetoCrudBackend.Entitys;

import org.hibernate.annotations.NotFound;

import javax.persistence.*;
import java.io.Serializable;

@Table(name = "Player")
@Entity
public class Player  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name = "pla_name")
    private String name;

    public Player() {
    }

    public Player(int id, String name) {
        this.id = id;
        this.name = name;
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
}
