import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import imgCoche from '../images/coche.jpg';

class Inicio extends Component {
    render() {
        return (
        <React.Fragment >
            
            <div className="container">
                <h1>Bienvenidos!!</h1>
        
                <p>Juego de carros por consola</p>
            
                <img src={imgCoche} height="300px" alt="Coche" />
            <br></br>
                <Link className="Link" to="/Player"><button>Nueva Partida</button></Link>
            </div>
        </React.Fragment>
        );
        }
}

export default Inicio;