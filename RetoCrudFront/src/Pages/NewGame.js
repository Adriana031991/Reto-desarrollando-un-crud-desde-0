import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import carrera from '../images/carrera.gif'

class NewGame extends Component {
    render() {
        return (
        <React.Fragment >
            
            <div className="container">
                <h1>Iniciar Partida</h1>
                <br></br>

                <img src={carrera} height="300px" alt="Carrera" />
            <br></br>
                    <Link to="/Podium"><button>Ir a Podio</button></Link>

            </div>
        </React.Fragment>
        );
        }
}

export default NewGame;