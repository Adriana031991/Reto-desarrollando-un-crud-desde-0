import axios from 'axios'
export const SET_TOTAL_PLAYERS = 'SET_TOTAL_PLAYERS'
export const ADD_PLAYER = 'ADD_PLAYER'
export const START_GAME = 'START_GAME';
export const RESET = 'RESET';
export const API_GAME = "http://localhost:8080/api/game";


export const API_PLAYER = "http://localhost:8080/api/player";

export function setTotalPlayers(totalPlayers){

    return (dispatch, getState) => {
                dispatch({type: SET_TOTAL_PLAYERS, payload: totalPlayers})
    }
}

export function addNewPlayer(newPlayer){

    return (dispatch, getState) => {
        console.log("new player", newPlayer)
        axios.post(API_PLAYER, newPlayer) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: ADD_PLAYER, payload: response.data.data})
                }) 
    }
}

export function startGame(circuitCarDto){

    return (dispatch, getState) => {
        console.log("circuitCarDto", circuitCarDto)
        axios.post(API_GAME+"/start-game", circuitCarDto) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: START_GAME, payload: response.data.data})
                }) 
    }
}

export function reset(){

    return (dispatch, getState) => {
        axios.post(API_GAME+"/start-game") //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: RESET, payload: ""})
                }) 
    }
}