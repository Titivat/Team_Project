const axios = require('axios');
const API_PATH1 = "https://kmitlthirdyearproject.herokuapp.com/api";
const API_PATH2 = "https://kmitlthirdyearproject.herokuapp.com";

export const post = async function post(path, postData) {
    try {
        let response = await axios({
            method: 'post',
            url: `${API_PATH2}/${path}`,
            data: postData,
            json: true
        });
        return response;
    } catch (err) {
        return err
    }
}

export const get = async function get(path) {

    try {
        let response = await axios({
            method: 'get',
            url: `${API_PATH2}/${path}`,
            json: true
        });
        return response;
    } catch (err) {
        return err
    }
}

export const postEvent = async function postEvent(path, postData) {

    try {
        let response = await axios({
            method: 'post',
            url: `${API_PATH1}/${path}`,
            data: postData,
            json: true
        });
        return response;
    } catch (err) {
        alert("Error " + err.message);
        return err
    }
}

export const getEvent = async function getEvent(path) {
    try {
        let response = await axios({
            method: 'get',
            url: `${API_PATH1}/${path}`,
            json: true
        });
        return response.status;
    } catch (err) {
        console.log(Object.prototype.toString.call(err) === "[object Error]")
        alert("Error " + err.message);
        return err
    }
}