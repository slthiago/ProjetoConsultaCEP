
var btnElement = document.querySelector('#botao');
var tableElement = document.querySelector('#lista table');


btnElement.onclick = function () {
    var cepElement = document.getElementById('cep').value;

    tableElement.innerHTML="";
    axios.get('https://viacep.com.br/ws/' + cepElement + '/json')
        .then(function (response) {

            var theadElement = document.createElement('thead');
            var tbodyElement = document.createElement('tbody');
            theadElement.className = 'thead-dark';
            tableElement.appendChild(theadElement);
            tableElement.appendChild(tbodyElement);

            var trHead = document.createElement('tr');
            var trElement = document.createElement('tr');
            theadElement.appendChild(trHead);
            tbodyElement.appendChild(trElement);
            //CEP
            var cepHead = document.createElement('th');
            var cepTitle = document.createTextNode('CEP');
            var tdCep = document.createElement('td');
            var cepElement = document.createTextNode(response.data.cep);
            cepHead.appendChild(cepTitle);
            tdCep.appendChild(cepElement);
            trHead.appendChild(cepHead);
            trElement.appendChild(tdCep);
            
            //LOGRADOURO
            var ruaHead = document.createElement('th');
            var ruaTitle = document.createTextNode('LOGRADOURO');
            var tdRua = document.createElement('td');
            var ruaElement = document.createTextNode(response.data.logradouro);
            ruaHead.appendChild(ruaTitle);
            tdRua.appendChild(ruaElement);
            trHead.appendChild(ruaHead);
            trElement.appendChild(tdRua);

            //BAIRRO
            var bairroHead = document.createElement('th');
            var bairroTitle = document.createTextNode('BAIRRO');
            var tdBairro = document.createElement('td');
            var bairroElement = document.createTextNode(response.data.bairro);
            bairroHead.appendChild(bairroTitle);
            tdBairro.appendChild(bairroElement);
            trHead.appendChild(bairroHead);
            trElement.appendChild(tdBairro);

            //CIDADE
            var cidadeHead = document.createElement('th');
            var cidadeTitle = document.createTextNode('CIDADE');
            var tdCidade = document.createElement('td');
            var cidadeElement = document.createTextNode(response.data.localidade);
            cidadeHead.appendChild(cidadeTitle);
            tdCidade.appendChild(cidadeElement);
            trHead.appendChild(cidadeHead);
            trElement.appendChild(tdCidade);
            
            //UF
            var ufHead = document.createElement('th');
            var ufTitle = document.createTextNode('UF');
            var tdUf = document.createElement('td');
            var ufElement = document.createTextNode(response.data.uf);
            ufHead.appendChild(ufTitle);
            tdUf.appendChild(ufElement);
            trHead.appendChild(ufHead);
            trElement.appendChild(tdUf);
        })
        .catch(function (error) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'O CEP informado é inválido ou inexistente. Tente novamente!'
                
              })
        });

}


