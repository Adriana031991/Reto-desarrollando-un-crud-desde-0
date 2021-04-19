import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newNumPlayer = this.getNumPlayer.value;
        const newName = this.getName.value;
        const newRoad = this.getRoad.value;
        const data = {
            newNumPlayer,
            newName,
            newRoad
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    
                    <input required type="text" ref={(input) => this.getNumPlayer = input}
                        defaultValue={this.props.post.numPlayer} placeholder="Ingrese nuevo numero de participantes" /><br /><br />
                    <button>Update</button>

                    <input required type="text" ref={(input) => this.getName = input}
                        defaultValue={this.props.post.name} placeholder="Ingrese nuevo nombre de jugador" /><br /><br />
                    <button>Update</button>
                
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);