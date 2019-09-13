const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: "Ciudad de la que se quiere obtener el clima",
        demand: true
    }
}).argv;


//console.log(argv.direccion)

//lugar.getLugarLatLng(argv.direccion).then(console.log)

//clima.getClima(40.750000, -74.000000).then(console.log)
//  .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const place = await lugar.getLugarLatLng(direccion);
        const weather = await clima.getClima(place.lat, place.lng);

        return (`El clima de ${ direccion } es de ${ weather }`);
    } catch (error) {
        console.log(`No se pudo determinar el clima de ${ direccion }`);
    }


}


getInfo(argv.direccion).then(console.log)
    .catch(console.log)