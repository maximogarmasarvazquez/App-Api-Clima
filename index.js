const apiKey = "de339e478ce4410b93e164011232806"; 

const localizacionInput = document.getElementById("localizacion");
const  btnBuscar = document.getElementById("btn-buscar");
const tempLabel = document.getElementById("temperatura");
const descripcionLabel = document.getElementById("descripcion");
const iconoClima = document.getElementById("icono-clima");

btnBuscar.addEventListener("click", buscarDatosClima);

function buscarDatosClima() {
    const localizacion = localizacionInput.value;
    //realizar peticion a la api de clima
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&lang=es&q=${encodeURIComponent(localizacion)}`)
    .then(respuesta => respuesta.json())
    .then(datosClima => {
        const {localizacion, current} = datosClima;
        const  temperatura = current.temp_c;

        tempLabel.textContent = `${temperatura}°C`;
        descripcionLabel.textContent = current.condition.text;

        const codigoIcono = current.condition.icon;
        const urlIcono = `https:${codigoIcono}`;
        iconoClima.setAttribute("src", urlIcono);
        iconoClima.setAttribute("alt", current);
    })
    .catch(error => {
        console.log('Error al obtener los datos del clima',error);
    })
 }
