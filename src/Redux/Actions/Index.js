import {
    GET_ALL_NOTICES,
    POST_NOTICE,
    PUT_NOTICE,
    DELETE_NOTICE,
    LOGIN
    
} from "./Types";

import axios from "axios";

export function login(payload) {

    try {
    
        return async function (dispatch) {

            let results = await axios.post(`http://localhost:3003/login`, payload);
            console.log('result login', results.data.token)

            return dispatch({

                type: LOGIN,
                payload: results.data
            });

        }
    } catch (error) {

        console.log('PROBANDO')
        
    }
}

export function createNotice(payload) {

    console.log('probando',payload)

    try {
    
        return async function (dispatch) {

            let results = await axios.post(`http://localhost:3003/Notices`, payload);

            return dispatch({

                type: POST_NOTICE,
                payload: results.data
            });

        }
    } catch (error) {
        console.log(error)
    }
}

export function deleteNotice(id) {

    try {
    
        return async function (dispatch) {

            let results = await axios.delete(`http://localhost:3003/Notices/${id}`);

            return dispatch({

                type: DELETE_NOTICE,
                payload: results.data
            });

        }
    } catch (error) {
        console.log(error)
    }
}


export function getAllNotices() {
    try {
    
        return async function (dispatch) {

            let results = await axios.get(`http://localhost:3003/Notices`);

            return dispatch({

                type: GET_ALL_NOTICES,
                payload: results.data
            });

        }
    } catch (error) {
        console.log(error)
    }
}

export function modifyNotice (id, payload) {

    console.log('me ejecutaron por lo menos xd')

    return async function (dispatch) {

        try {

            let json = await axios.put(`http://localhost:3003/Notices/${id}`, payload);

            console.log("status", json.data)
            
            return dispatch({
                type: PUT_NOTICE,
                payload: json.data,
            })
        } catch (error) {
            console.log("error-post", error)

        }

    }

}