
const listaDeEstados = require('./estados_cidades.js')

const getListaDeEstados = function(){
    let estados = []

    listaDeEstados.estados.forEach(function(estado){

        estados.push(estado.sigla)
    })

    return {
        uf: estados,
        quantidade: estados.length
    }

}

const getDadosEstados = function(uf){
    let resultado 

    listaDeEstados.estados.forEach(function(descricao){
        
        if(descricao.sigla === uf){
            resultado = {
                uf: descricao.sigla,
                descricao: descricao.nome,
                capital: descricao.capital,
                regiao: descricao.regiao
            }

        }

    })
    return resultado
}
const getCapitalEstado = function(uf){
    let resultado

    listaDeEstados.estados.forEach(function(capital){
        if(capital.sigla.toUpperCase() === uf.toUpperCase())
            resultado = {uf: capital.sigla, descricao: capital.nome, capital: capital.capital}
        
    })
    return resultado
}

const getEstadosRegiao = function(reg){
    let resultado = []

    listaDeEstados.estados.forEach(function(area){
        if(area.regiao.toUpperCase() === reg.toUpperCase()){
            resultado.push({
                uf: area.sigla,
                descricao: area.nome
            })
        }

    })
    return {
        regiao: reg,
        estados: resultado
    }

}

const getCapitalPais = function(){

}

const getCidades = function(uf){
    let cidade = []

    listaDeEstados.estados.forEach(function(sEstado){
        if(sEstado.sigla === uf){
            cidade = {
                uf: sEstado.sigla,
                descricao: sEstado.nome,
                quantidade_cidades: sEstado.cidades.length,
                cidades: sEstado.cidades.map(cidade => cidade.nome )
            }
        }

    })

    return cidade
}
// console.log(getEstadosRegiao('norte'))
console.log(getCidades('AC'))