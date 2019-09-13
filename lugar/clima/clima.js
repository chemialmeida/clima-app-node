const axios = require('axios');



const getClima = async(lat, lon) => {

    const resp = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=e51dfc4c41b8c5ec5e565cabc30ed210&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}