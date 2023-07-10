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
        minhaLista.push({
            tarefa: input.value,
            concluida:false
        });
        input.value = ''
        mostrarTarefas();
    }

    //Criar outra função para mostrar as tarefas ho html, 
    //uma vez criado pela função pegaValorInput 

    function mostrarTarefas(){

        let novaLista = ''
// o forEach percorre item por item do array
        minhaLista.forEach ( (item, index ) => {
            
            novaLista = novaLista + `
            <li class="lista_individual" id="${item.concluida && "done"}">
                <i class="fa-solid fa-check" onclick="concluirTarefa(${index})"></i>
                <p>${item.tarefa} </p>
                <i class="fa-solid fa-trash" onclick="deletarItem(${index})"></i>
            </li>
            `
        });
        
       listaCompleta.innerHTML = novaLista 
       localStorage.setItem('lista', JSON.stringify(minhaLista))
    };

        function concluirTarefa(index){
            minhaLista[index].concluida = !minhaLista[index].concluida
            mostrarTarefas()
        };

        function deletarItem(index){
            minhaLista.splice(index, 1)
            mostrarTarefas()
        };

        function recarregarTarefas(){
            const tarefasDoLocalStorage = localStorage.getItem("lista")
            if(tarefasDoLocalStorage){
            minhaLista= JSON.parse(tarefasDoLocalStorage)
            }
            mostrarTarefas()
            
        };
        recarregarTarefas()
//O addEventListener é para saber todas as vezes que o botão for clicado 
button.addEventListener('click', pegaValorInput);


