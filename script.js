function dadosNaTela(dados) {
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade:" + dados.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}
async function buscarCidade(cidade) {

    let chave = "e6255bc556e042edef76380f3459ed89"

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric").then(resposta => resposta.json())

    dadosNaTela(dados)
}

function pesquisar() {
    let cidade = document.querySelector("#inp").value

    if (cidade == "") {
        alert("Preencha o campo para continuar")
    }
    
    buscarCidade(cidade)
}
