import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS'
export const HOST_API = "http://localhost:8080/api";

export function showUsers(){

    return (dispatch, getState) => {
        axios.get(HOST_API) //peticion http seria el host
            .then((response) =>{
                console.log(response)
                dispatch({type: SHOW_USERS, payload: response.data})
                }) 
    }


}