
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
    let status = false 

    listaDeEstados.estados.forEach(function(descricao){
        
        if(descricao.sigla === uf){
            resultado = {
                uf: descricao.sigla,
                descricao: descricao.nome,
                capital: descricao.capital,
                regiao: descricao.regiao
            }
            status = true
        }

    })
    if(status)
        return resultado
    else
        return false
}
const getCapitalEstado = function(uf){
    let resultado
    let status = false

    listaDeEstados.estados.forEach(function(capital){
        if(capital.sigla.toUpperCase() === uf.toUpperCase()){
            resultado = {uf: capital.sigla, descricao: capital.nome, capital: capital.capital}
        status = true
        }
    })
    if(status)
        return resultado
    else
        return false
}

const getEstadosRegiao = function(reg){
    let resultado = []
    let status = false

    listaDeEstados.estados.forEach(function(area){
        if(area.regiao.toUpperCase() === reg.toUpperCase()){
            resultado.push({
                uf: area.sigla,
                descricao: area.nome
            })
            status = true
        }

    })
    if(status){
        return {
            regiao: reg,
            estados: resultado
        }
    }else{
        return false
    }
}

const getCapitalPais = function(){
    let capitais = []
    let retornoJSON = {}


    listaDeEstados.estados.forEach(function(capitaisBr){
        if(capitaisBr.capital_pais){
            capitais.push({
                capital_atual: capitaisBr.capital_pais.capital,
                uf: capitaisBr.sigla,
                descricao: capitaisBr.nome,
                capital: capitaisBr.capital,
                regiao: capitaisBr.regiao,
                capital_pais_ano_inicio: capitaisBr.capital_pais.ano_inicio,
                capital_pais_ano_termino: capitaisBr.capital_pais.ano_fim
                
            })
        }
    })

    retornoJSON.capitais = capitais
    return retornoJSON

}

const getCidades = function(uf){
    let cidade = []
    let status = false
    

    listaDeEstados.estados.forEach(function(sEstado){
        if(sEstado.sigla === uf){
            cidade = {
                uf: sEstado.sigla,
                descricao: sEstado.nome,
                quantidade_cidades: sEstado.cidades.length,
                cidades: sEstado.cidades.map(cidade => cidade.nome )
            }
            status = true
        }

    })
    if(status)
        return cidade
    else
        return false
}
// console.log(getListaDeEstados())
// console.log(getDadosEstados('SP'))
// console.log(getCapitalEstado('AC'))
// console.log(getEstadosRegiao('norte'))
// console.log(getCapitalPais())
// console.log(getCidades('AC'))
