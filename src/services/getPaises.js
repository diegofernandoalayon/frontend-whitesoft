const paises = ()=>fetch('https://restcountries.com/v3.1/all')
.then(data => data.json())
.then(response=>response)

export default {paises}