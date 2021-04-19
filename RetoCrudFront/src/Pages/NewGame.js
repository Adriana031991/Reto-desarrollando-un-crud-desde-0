import React, {Component} from 'react';
import carrera from '../images/carrera.gif'

class NewGame extends Component {
    render() {
        return (
        <React.Fragment >
            
            <div className="container">
                <h1>Iniciar Partida</h1>
                <br></br>
                <button>Inicia la carrera</button>
                <br></br>
        
                <img src={carrera} height="300px" alt="Carrera" />
            <br></br>
            </div>
        </React.Fragment>
        );
        }
}

export default NewGame;