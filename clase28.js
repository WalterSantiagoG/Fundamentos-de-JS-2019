const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'


const lukeUrl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`
const c3po=`${API_URL}${PEOPLE_URL.replace(':id',2)}`

const opts = { crossDomain: true }

const onPleopleResponse = function (persona) {
    console.log(`Hola, yo soy ${persona.name}`)
}

$.get(lukeUrl, opts, onPleopleResponse)
$.get(c3po, opts, onPleopleResponse)