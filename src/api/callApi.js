const axios = require('axios');
const API_PATH = "https://kmitlthirdyearproject.herokuapp.com/api/"

export const postEvent = async function postEvent(path, postData) {
    console.log("I post");
    try {
        let response = await axios({
            method: 'post',
            url: `${API_PATH}/${path}`,
            data: postData,
            json: true
        });
        return response;
    } catch (err) {
        return err
    }
}

export const getEvent = async function getEvent(path) {
    try {
        let response = await axios({
            method: 'get',
            url: `${API_PATH}/${path}`,
            json: true
        });
        return response;
    } catch (err) {
        return err
    }
}