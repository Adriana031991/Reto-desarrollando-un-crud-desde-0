package co.com.adrianafranklin.RetoCrudBackend.Entitys;

import javax.persistence.*;
import java.util.List;

@Table(name = "track")
@Entity
public class Track {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String nameTrack;

    @OneToMany()
    @JoinColumn( name = "lane")
    private List<Lane> laneList;

    private int kilometres;

    public Track() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameTrack() {
        return nameTrack;
    }

    public void setNameTrack(String nameTrack) {
        this.nameTrack = nameTrack;
    }

    public List<Lane> getLaneList() {
        return laneList;
    }

    public void setLaneList(List<Lane> laneList) {
        this.laneList = laneList;
    }

    public int getKilometres() {
        return kilometres;
    }

    public void setKilometres(int kilometres) {
        this.kilometres = kilometres;
    }
}
