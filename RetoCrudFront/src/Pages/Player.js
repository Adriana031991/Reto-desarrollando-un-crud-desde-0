import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { listCircuits, selectCircuit } from '../actions/circuit-actions'
import { setTotalPlayers } from '../actions/game-actions'
import { addNewPlayer, startGame } from '../actions/game-actions'

import { connect } from 'react-redux';
import Circuit from '../Components/circuit';


class Player extends Component {

    componentWillMount() {
        this.props.listCircuits();
    }

    renderCiruits() {
        console.log(this.props);
        return this.props.circuits.map((circuit) => {
            return (
                <Circuit key={circuit.id} circuit={circuit} selectCircuit={this.selectCircuit}
                    click={true} />
            )
        })
    }

    selectCircuit = (circuit) => {
        this.props.selectCircuit(circuit);
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

    addNewPlayer = async (e) => {

        e.preventDefault();

        var player = {
            nameDto: this.getName.value
        }


        if (this.props.totalPlayers == this.props.cars.length) {

            window.alert("Ya están configurados los jugadores");
            return;
        }

        console.log("agregando");
        await this.props.addNewPlayer(player);


        console.log("recargar");
        this.forceUpdate();

    }

    setTotalPlayers = (e) => {
        e.target.reset();
        e.preventDefault();
        var totalTanes = this.props.circuitSelected.lanes.length;

        var totalPlayers = this.getNumPlayer.value;

        if (totalPlayers <= 1 || totalTanes < totalPlayers) {
            window.alert("El total de jugadores debe ser mínimo 3 y menor a " + totalTanes);
            return;
        }

        this.props.setTotalPlayers(totalPlayers);
        console.log("props", this.props);
    }

    startGame() {

        var circuitCarsDto = {
            circuit: this.props.circuitSelected,
            cars: this.props.cars
        }

        this.props.startGame(circuitCarsDto);
    }
    



    handleSubmit = (e) => {
        console.log("testing handlesubmit")
        e.target.reset();

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
                </div>
                {!this.props.circuitSelected && <div className="container">
                    <h2>Elige la pista</h2>
                    <div className="pistas" >
                        {this.renderCiruits()}
                    </div>

                </div>}

                {this.props.circuitSelected && <div className="container">
                    <h2>Ha seleccionado la pista</h2>
                    <div className="pistas" >
                        <Circuit key={this.props.circuitSelected.id} circuit={this.props.circuitSelected}
                            click={false} />
                    </div>

                </div>}

                <div className="container">
                    <form onSubmit={this.setTotalPlayers}>
                        <label>¿Cuantos Jugadores participarán?</label><br></br>
                        <input
                            className="player__cant"
                            required
                            type="text"
                            name="players" id=""
                            placeholder="cantidad de jugadores"
                            disabled={!this.props.circuitSelected || this.props.totalPlayers > 0}
                            ref={(input) => this.getNumPlayer = input} />

                        <button disabled={!this.props.circuitSelected || this.props.totalPlayers > 0}>Enviar</button>
                        <button type='reset'>reset</button>
                    </form>

                    {this.props.totalPlayers != this.props.cars.length ? <form className="player__name" onSubmit={this.addNewPlayer}>
                        <br></br>
                        <label>Nombre Jugador  #{this.props.cars.length + 1}</label><br></br>
                        <input
                            required
                            type="text"
                            name="firstPlayer" id=""
                            placeholder="Nombre jugador"
                            ref={(input) => this.getName = input} />

                        <button >Ingresar Jugador #{this.props.cars.length + 1}</button>
                        <button type='reset'>reset</button>
                    </form> : ""}
                    <div>
                        <h3>Jugadores establecidos:</h3>
                        {this.renderPlayers()}
                    </div>

                </div>

                <div className="container">

                    <div>

                        <Link className="Link" to="/NewGame" onClick={() => this.startGame()}><button type='reset'>Iniciar Carrera</button></Link>
                        <button type='reset'>Nuevo juego</button>
                    </div>

                </div>

            </React.Fragment>
        );
    }


}
function mapStateToProps(state) {
    return {
        circuits: state.circuit.circuits,
        players: state.player.players,
        circuitSelected: state.circuit.circuitSelected,
        totalPlayers: state.game.totalPlayers,
        cars: state.game.cars,
        podio: state.game.podium
    }
}


export default connect(mapStateToProps, {
    listCircuits, addNewPlayer, selectCircuit,
    setTotalPlayers, startGame
})(Player)