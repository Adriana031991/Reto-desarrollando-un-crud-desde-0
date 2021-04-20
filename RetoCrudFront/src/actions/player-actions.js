import axios from 'axios'

export const ADD_PLAYER = 'ADD_PLAYER'
export const RESET = 'RESET'
export const HOST_API = "http://localhost:8080/api/player";

export function addNewPlayerNN(newPlayer){

    return (dispatch, getState) => {
        console.log("new player", newPlayer)
        axios.post(HOST_API, newPlayer) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: ADD_PLAYER, payload: response.data.data})
                }) 
    }
}
export function reset(newPlayer){

    return (dispatch, getState) => {
        console.log("new player", newPlayer)
        axios.post(HOST_API, newPlayer) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: RESET, payload: ""})
                })
            }
    }