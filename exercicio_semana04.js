const cumprimento = name => 'Olá, ' + name + '!'


function IdadeDias(idadeAnos){
    const idadeDias = idadeAnos * 365
    return idadeDias
}

function Payment(TimeWork, MoneyForHour){
    const wage = MoneyForHour * TimeWork
    return `Salário igual a R$ ${wage}`
}

function NumberOfMonth(number){
    switch(number){
        case 1:
            return "janeiro";
        case 2:
            return "fevereiro";
        case 3:
            return "março";
        case 4:
            return "abril";
        case 5:
            return "maio";
        case 6:
            return "junho";
        case 7:
            return "julho";
        case 8:
            return "agosto";
        case 9:
            return "setembro";
        case 10:
            return "outubro";
        case 11:
            return "novembro";
        case 12:
            return "dezembro";
    }
}

function MaiorOuIgual(num1,num2){
    if( typeof num1 != typeof num2){return false}
    else {return num1 >= num2}
}

function Inverso(parameter){
    if(typeof parameter != "boolean" && typeof parameter != "number"){
        return `booleano ou número esperados, mas o parâmetro é do
        tipo ${typeof parameter}` 
    }
    else if(typeof parameter == "number") return parameter * (-1)
    else if(typeof parameter === true) return false
    else if(typeof parameter === false) return true
}

function estaEntre( num, min, max, inclusivo = false){
    if(inclusivo) return num <= max && num >= min
    return num > min && num < max
}

function multiplicar(num1, num2){
    for(let i = 1; i<num2; i++)
        num1 += num1
    return num1
}

function repetir(elem, quantidade){
    let my_array = []

    for(let i=0; i < quantidade; i++)
        my_array.push(elem)

    return my_array
}

function simboloMais(quantidade){
    let my_string = ''
    for(let i=0; i < quantidade; i++)
        my_string += '+'
    return my_string
}

// erro aqui no meu pc---> 
function receberPrimeiroEUltimoElemento(conjunto){
    let my_array = []
    ultimo_elem = conjunto.lenght - 1
    my_array[0] = conjunto[0]
    my_array[1] = conjunto[ultimo_elem]
    return my_array
}

function removerPropriedade(objeto, propriedade){
    let obj_copia = Object.assign({}, objeto)
    delete obj_copia[propriedade]
    return obj_copia
}

function filtrarNumeros(conjunto){
    let my_array = []
    for(let i = 0; i < conjunto.lenght; i++){
        elemento = conjunto.pop()
        if(typeof(elemento) === 'number')
            my_array.push(elemento)
    }
    return my_array
}

function objetoParaArray(objeto){
    let my_array = []
    for(let chave in objeto)
        my_array.push([chave, objeto[chave]])
    return my_array
}

// erro aqui no meu pc ---->
function receberSomenteOsParesDeIndicesPares(conjunto){
    let my_array = []
    for(let i = 0; i < conjunto.lenght; i +=2){
        if(conjunto[i] % 2 === 0)
            my_array.push(conjunto[i])
    }
    return my_array
}

function checarAnoBissexto(ano){
    const bissexto = (ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0)
    return bissexto
}

// erro aqui  ---->
function somarNumeros(numeros){
    let soma = 0
    for(let i = 0; i < numeros.lenght; i++)
        soma += numeros.pop()
    return soma
}

function despesasTotais(produtos){
    let precoTotal = 0
    for(let item of produtos)
        precoTotal += item.preco
    return precoTotal
}
