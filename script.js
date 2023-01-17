const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const item = document.getElementsByTagName('li');
const classClean = document.getElementsByClassName('naoFeito');
const classComp = document.getElementsByClassName('completed');
const btnClear = document.getElementById('apaga-tudo');
const btnFinal = document.getElementById('remover-finalizados');
const div = document.getElementById('lista');

let itemLength = [0];
let index = 0;


const addInput = () => {
    if (input.value) {
        let content = input.value;
        let li = document.createElement('li');
        li.setAttribute('class', 'naoFeito');
        li.appendChild(document.createTextNode(content));
        ol.appendChild(li);
        itemLength[index] = index;
        input.value = '';
        index += 1;
        const changeColor = () => {
            for (let i = 0; i < classClean.length; i += 1) {
                classClean[i].classList.remove('feito');
            }
            li.classList.add('feito');
        }
        const addLine = () => {
            li.classList.toggle('completed');
        }
        li.addEventListener('click', changeColor);
        li.addEventListener('dblclick', addLine);
        input.focus();
    }
    const erase = () => {
        for (let i = 0; i < classClean.length; i += 1) {
            item[i].remove(item);
        }
        input.focus();
    };
    btnClear.addEventListener('click', erase);
    const eraseFnlzd = () => {
        for (let i = 0; i < classClean.length; i += 1) {
            if (classClean[i].className == 'naoFeito completed' || classClean[i].className == 'naoFeito feito completed') {
                classClean[i].remove(classClean);
            }
        }
    }
    btnFinal.addEventListener('click', eraseFnlzd);
};


window.onload = () => {
    input.focus();
    button.addEventListener('click', addInput);
};