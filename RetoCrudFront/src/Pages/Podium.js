import React, {Component} from 'react';
import podio from '../images/podio.gif'

class Podium extends Component {
    render() {
        return (
        <React.Fragment >
            
            <div className="container">
                <h1>Podio</h1>
                <img src={podio} height="300px" alt="Podio" />
            <br></br>
            </div>
        </React.Fragment>
        );
        }
}

export default Podium;