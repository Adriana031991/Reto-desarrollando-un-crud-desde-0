import React, {Component} from 'react';
import { connect } from 'react-redux';
import podio from '../images/podio.gif';
import { addNewPlayer, startGame } from '../actions/game-actions'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Podium extends Component {


    render() {
        return (
        <React.Fragment >
            
            <div className="container">
                <h1>Podio</h1>
                <img src={podio} height="300px" alt="Podio" />
                <div>
                <br></br>
                <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Position</th>
                                <th>Driver</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#1</td>
                                <td>{this.props.podio?.first.name}</td>
                            </tr>
                            <tr>
                                <td>#2</td>
                                <td>{this.props.podio?.second.name}</td>
                            </tr>
                            <tr>
                                <td>#3</td>
                                <td>{this.props.podio?.third.name}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            <br></br>
            <Link to="/Player" ><button>Nuevo juego</button></Link>
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
export default connect(mapStateToProps, {addNewPlayer, startGame})(Podium)