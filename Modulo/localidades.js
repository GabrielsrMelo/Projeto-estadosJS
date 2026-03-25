
const listaDeEstados = require('./estados_cidades.js')

const getListaDeEstados = function () {
    let estados = [] /* Variavel recebendo um array vazio */

    listaDeEstados.estados.forEach(function (estado) {
        //Para cada estado encontrado, pegamos apenas a sigla e 'jogamos' no array estados
        estados.push(estado.sigla)
    })

    //Retornamos um objeto JSON organizado com a lista e o total de itens encontrados
    return {
        uf: estados,
        quantidade: estados.length // .length conta quantos estados foram adicionados
    }

}

const getDadosEstados = function (uf) {
    let resultado
    let status = false // 'status' serve como um sinalizador (flag) para saber se a busca teve sucesso.

    // Percorre a lista de estados para encontrar a sigla enviada (uf)
    listaDeEstados.estados.forEach(function (descricao) {
        // Novo objeto 'resultado' apenas com as informações necessárias
        if (descricao.sigla === uf) {
            resultado = {
                uf: descricao.sigla,
                descricao: descricao.nome,
                capital: descricao.capital,
                regiao: descricao.regiao
            }
            // status como verdadeiro caso encontrar o estado
            status = true
        }

    })
    // Verificar o status:
    // Se encontrou (true), retorna o objeto com os dados.
    // Se não encontrou (false), retorna falso para o sistema tratar o erro.
    if (status)
        return resultado
    else
        return false
}
const getCapitalEstado = function (uf) {
    let resultado
    let status = false // 'status' serve como um sinalizador (flag) para saber se a busca teve sucesso.

    // Percorre a lista de estados focando em extrair os dados da capital
    listaDeEstados.estados.forEach(function (capital) {
        if (capital.sigla.toUpperCase() === uf.toUpperCase()) {
            resultado = { uf: capital.sigla, descricao: capital.nome, capital: capital.capital }
            
            status = true// status como verdadeiro caso encontrar o estado
        }
    })
    // Verificar o status:
    // Se encontrou (true), retorna o objeto com os dados.
    // Se não encontrou (false), retorna falso para o sistema tratar o erro.
    if (status)
        return resultado
    else
        return false
}

const getEstadosRegiao = function (reg) {
    let resultado = []
    let status = false // 'status' serve como um sinalizador (flag) para saber se a busca teve sucesso.

    //Percorre a toda a base de estados para filtrar pela região informada.
    listaDeEstados.estados.forEach(function (area) {
        //Compara a região do arquivo com a enviada pelo usuário, ambas em MAIÚSCULAS.
        if (area.regiao.toUpperCase() === reg.toUpperCase()) {
            //Se a região coincidir, adiciona (push) os dados resumidos 
            // do estado dentro do nosso array de resultados.
            resultado.push({
                uf: area.sigla,
                descricao: area.nome
            })

            status = true // status como verdadeiro caso encontrar o estado
        }

    })
    // Verificar o status:
    // Se encontrou (true), retorna o objeto com os dados.
    // Se não encontrou (false), retorna falso para o sistema tratar o erro.
    if (status) {
        return {
            regiao: reg,
            estados: resultado
        }
    } else {
        return false
    }
}

const getCapitalPais = function () {
    let capitais = []
    let retornoJSON = {} // objeto vazio que será o nosso retorno final (padrão JSON).

    // Percorre a lista de todos os estados brasileiros.
    listaDeEstados.estados.forEach(function (capitaisBr) {

        // Verifica se dentro do estado existe o campo 'capital_pais'.
        // Isso separa estados que são/foram capitais federais (como RJ ou DF) dos demais.
        if (capitaisBr.capital_pais) {
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

    // Montei o JSON final colocando o array de capitais dentro de uma chave.
    retornoJSON.capitais = capitais
    // Assim consigo retornar o objeto completo e higienizado
    return retornoJSON

}

const getCidades = function (uf) {
    let cidade = []
    let status = false // 'status' para validar se a UF foi encontrada.


    //Percorre a lista de estados procurando a UF correspondente.
    listaDeEstados.estados.forEach(function (sEstado) {

        //Se a sigla do estado no arquivo for igual à sigla pedida (uf)
        if (sEstado.sigla === uf) {

            //Criei um objeto de retorno com os dados do estado
            cidade = {
                uf: sEstado.sigla,
                descricao: sEstado.nome,

                //.length: Conta automaticamente quantas cidades existem no array.
                quantidade_cidades: sEstado.cidades.length,

                // MÉTODO .MAP(): 
                // Transforma o array de objetos 'cidades' em um novo array 
                // contendo APENAS os nomes (strings), deixando o JSON mais limpo.
                cidades: sEstado.cidades.map(cidade => cidade.nome)
            }
            status = true
        }

    })
    // Verificar o status:
    // Se encontrou (true), retorna o objeto com os dados.
    // Se não encontrou (false), retorna falso para o sistema tratar o erro.
    if (status)
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
module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}