import axios from 'axios'

export const LIST_CIRCUITS = 'LIST_CIRCUITS'
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