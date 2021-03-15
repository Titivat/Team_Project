const axios = require('axios');
const API_PATH = ""

export const postEvent = async function postEvent(path, postData) {
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

export const getEvent = async function postEvent(path, postData) {
    alert(`I am called path: ${path} || postData: ${postData}`);
}