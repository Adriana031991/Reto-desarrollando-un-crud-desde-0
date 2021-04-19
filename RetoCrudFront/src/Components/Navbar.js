import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import imgCarro from '../images/carroConductor.png';
import pista5 from '../images/pista5.jpg';
import Podio1 from '../images/podio1.jpg';
import conductor from '../images/conductor.jpg';



class Navbar extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="container">
                <Link className="navbar__inicio" to="/Inicio">
                    <img className="navbar__img" src={imgCarro} alt="volver a inicio"/>
                    <span >Inicio</span>
                </Link>
                <Link className="navbar__inicio" to="/Player">
                <img className="navbar__img" src={conductor} alt="volver a player"/>
                    <span >Player</span>
                </Link>
                <Link className="navbar__inicio" to="/NewGame">
                <img className="navbar__img" src={pista5} alt="volver a NewGame"/>
                    <span >NewGame</span>
                </Link>
                <Link className="navbar__inicio" to="/Podium">
                <img className="navbar__img" src={Podio1} alt="volver a Podio"/>
                    <span >Podium</span>
                </Link>
            </div>
            
        </React.Fragment>
        );
        }
}

export default Navbar;