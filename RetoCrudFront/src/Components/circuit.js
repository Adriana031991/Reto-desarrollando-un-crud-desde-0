import React, { Component, Fragment } from 'react';
import pista1 from '../images/pista1.jpg';

class Circuit extends Component{

    selectCircuit(circuit){

        this.props.selectCircuit(circuit);
    }

    //const children = props.children;
    render(){
    return (
        <Fragment>
            <button key={this.props.circuit.id}
            onClick={() =>this.props.click ? this.selectCircuit(this.props.circuit): null}><img src={pista1} height="150px" alt={this.props.circuit.name} />{this.props.circuit.name}</button>
        </Fragment>
        );
    }
}
export default Circuit;