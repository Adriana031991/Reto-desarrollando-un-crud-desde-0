import axios from 'axios'

export const LIST_CIRCUITS = 'LIST_CIRCUITS'
export const SELECT_CIRCUIT = 'SELECT_CIRCUIT'
export const RESET = 'RESET'
export const HOST_API = "http://localhost:8080/api/circuit";

export function listCircuits(){

    return (dispatch, getState) => {
        axios.get(HOST_API) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: LIST_CIRCUITS, payload: response.data.data})
                }) 
    }
}
export function selectCircuit(circuit){

    return (dispatch, getState) => {
                dispatch({type: SELECT_CIRCUIT, payload: circuit})
            }
    }

export function reset(){

        return (dispatch, getState) => {
        axios.get(HOST_API) //peticion http seria el host
                    dispatch({type: RESET, payload: ""})
                }
        }