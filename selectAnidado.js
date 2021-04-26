const $selectEstados = document.getElementById("estados");
const $selectMunicipio = document.getElementById("municipio");
const $error = document.querySelector(".error");

const urlEstados = "https://api-sepomex.hckdrk.mx/query/get_estados?token=7759a1b4-78b5-446f-8dc8-dff9378f2239";



const obtenerEstados = ()=>{
    fetch(urlEstados)
    .then(res => res.json())
    .then(data =>{
        let arrEstados = data.response.estado;
        //console.log(data);
        if(data.error === false){
            for(let i = 0; i <= arrEstados.length; i++){
                
                const $newOption = document.createElement("option");
                //console.log(arrEstados[i])
                $newOption.text = arrEstados[i];
                $newOption.value = arrEstados[i];
                $selectEstados.add($newOption);
            }
        }                
    })
}

obtenerEstados();

$selectEstados.addEventListener("change", e =>{
    $selectMunicipio.innerHTML="Seleccione un Municipio";
    e.preventDefault();
    fetch(`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${e.target.value}?token=7759a1b4-78b5-446f-8dc8-dff9378f2239`)
            .then(res => res.json())
            .then(municipios => {
                //console.log(municipios.response);
                let arrMunicipios = municipios.response.municipios;

                for(let i = 0; i <= arrMunicipios.length; i++){
                const $newOptionMunicipios = document.createElement("option");
                $newOptionMunicipios.text = arrMunicipios[i];
                $selectMunicipio.add($newOptionMunicipios);               
                }
                
            })
})
    
    

    


