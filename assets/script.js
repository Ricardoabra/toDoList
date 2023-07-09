//a const é para saber quem são as tags do html
const button = document.querySelector('.botao');
const input = document.querySelector('.tarefas');
const listaCompleta = document.querySelector('.listas');

//Abaixo segue os comandos para criar novas tarefas e aparecer no html
//, para isso se cria um array com let, pois os valores desse array vão mudando

let minhaLista = [];

//A função é chamada todas as vezes que o 
//botão do addEventListener for clicado. 
    function pegaValorInput (){
        //O método push adiciona alguma coisa dentro do array minhaLista 
        minhaLista.push(input.value);
        mostrarTarefas();
    }

    //Criar outra função para mostrar as tarefas ho html, 
    //uma vez criado pela função pegaValorInput 

    function mostrarTarefas(){

        let novaLista = ''
// o forEach percorre item por item do array
        minhaLista.forEach ( (item) => {
            
            novaLista = novaLista + `
            <li class="lista_individual">
                <i class="fa-solid fa-check"></i>
                <p>${item} </p>
                <i class="fa-solid fa-trash"></i>
            </li>
            `
        });
        
       listaCompleta.innerHTML = novaLista 
    };
//O addEventListener é para saber todas as vezes que o botão for clicado 
button.addEventListener('click', pegaValorInput);


