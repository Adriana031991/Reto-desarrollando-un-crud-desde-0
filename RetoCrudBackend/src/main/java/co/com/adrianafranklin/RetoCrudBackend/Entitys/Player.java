package co.com.adrianafranklin.RetoCrudBackend.Entitys;

import javax.persistence.*;

@Table(name = "Player")
@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name = "pla_name", nullable = false, unique = true)
    private String name;

    public Player() {
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
