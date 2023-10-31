const busca = document.querySelector('#busca');
const enviar = document.querySelector('#enviar');
const div = document.querySelector('.container-resultado');
const ajax = new XMLHttpRequest();

enviar.addEventListener('click', () => {
    let cep = busca.value;
    let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
    ajax.open("GET", url, true);

    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status === 200) { 
            let dados = JSON.parse(ajax.response);

            div.innerHTML = "<h2>CEP: " + cep + "</h2>" +
                "<p>" + dados['street'] + "</p>" +
                "<p>" + dados['neighborhood'] + "</p>" +
                "<p>" + dados['city'] + " - " + dados['state'] + "</p>";
        } else {
            div.innerHTML = "<h2>CEP: " + cep + "</h2>" +
                            "<p>Erro endereço não localizado!</p>";
        }
    }
    
    ajax.send();
});