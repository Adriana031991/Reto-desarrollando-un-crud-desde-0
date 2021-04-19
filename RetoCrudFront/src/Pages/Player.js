import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pista1 from '../images/pista1.jpg';

import { listCircuits } from '../actions/circuit-actions'

import { addNewPlayer } from '../actions/player-actions'

import { connect } from 'react-redux';


class Player extends Component {

    componentWillMount(){
        this.props.listCircuits();
    }

    renderCiruits() {
        console.log(this.props);
        return this.props.circuits.map((circuit) => {
          return (
            <button key={circuit.id}><img src={pista1} height="150px" alt={circuit.name} />{circuit.name}</button>
          )
        })
      }

      
    renderPlayers() {
        console.log(this.props);
        return this.props.players.map((car) => {
          return (
            <ul key={car.id}>
            <li>{car.driver.name}</li>
           </ul>
         )
        })
      }

      addNewPlayer= async (e) => {

        e.preventDefault();

        var player = {
            nameDto : this.getName.value
        }

        console.log("agregando");
        await this.props.addNewPlayer(player);


        console.log("recargar");
        this.forceUpdate();

      }

    handleSubmit = (e) => {
        console.log("testing handlesubmit")

        e.preventDefault();
        const numPlayer = this.getNumPlayer.value;
        const name = this.getName.value;
        const road = this.getRoad.value;
        const data = {
            id: new Date(),
            numPlayer,
            name,
            road,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.getNumPlayer.value = '';
        this.getName.value = '';
        this.getRoad.value = '';
    }

    render() {

        return (
            <React.Fragment >

                <div className="container">
                    <h1>Configuracion del juego</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>¿Cuantos Jugadores participarán?</label><br></br>
                        <input
                            className="player__cant"
                            required
                            type="text"
                            name="players" id=""
                            placeholder="cantidad de jugadores"
                            ref={(input) => this.getNumPlayer = input} />

                        <button>Enviar</button>
                    </form>
    
                    <form className="player__name" onSubmit={this.addNewPlayer}>
                        <br></br>
                        <label>Nombre Jugador</label><br></br>
                        <input
                            required
                            type="text"
                            name="firstPlayer" id=""
                            placeholder="Nombre jugador"
                            ref={(input) => this.getName = input} />

                        <button >Ingresar Jugador</button>
                    </form>
                    <div>
                    { this.renderPlayers() }
                    </div>
                </div>

                <div className="container">
                    <h2>Elige la pista</h2>
                    <div className="pistas" >
                    { this.renderCiruits() }
                    </div>
                </div>
                {/* ref={(input) => this.getRoad = input}
ref={(input) => this.getRoad = input}
ref={(input) => this.getRoad = input}
ref={(input) => this.getRoad = input} */}

                <div className="container">
                    <br></br>
                    <h2>Jugadores y pista seleccionados</h2>
                    {/* aqui yo quiero que muestre los jugadores con sus carros y mencione la pista a jugar y quetenga un cuadrito de editar */}

                    <br></br>

                    <div>
                        <Link className="Link" to="/NewGame"><button>Iniciar Carrera</button></Link>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
      circuits: state.circuit.circuits,
      players : state.player.players
    }   
  }
export default connect(mapStateToProps, { listCircuits, addNewPlayer })(Player)