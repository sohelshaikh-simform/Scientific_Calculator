let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('.btn');
let memory = ""

for (item of btns) {
    item.addEventListener("click", (e) => {

        btntxt = e.target.innerText;

        if (btntxt == 'X') {
            btntxt = '*'
            screen.value += btntxt
        }
        else {
            screen.value += btntxt
        }
    });
}
function memoryStore() {
    memory = screen.value;
    clr();
    console.log(memory);
}

function memoryClear() {
    memory = "";
    clr();
}

function memoryIncre() {
    memory = Number(memory) + 1;
}

function memoryDecre() {
    memory = Number(memory) - 1;
}

function memoryRead() {
    screen.value = memory
}

function equal() {
    screen.value = eval(screen.value)

}
function clr() {
    screen.value = ""

}
function dlt() {
    screen.value = screen.value.substr(0, screen.value.length - 1)

}
function sin() {
    screen.value = Math.sin(screen.value)
}