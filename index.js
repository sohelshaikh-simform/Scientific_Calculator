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
    screen.value+= memory
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

function cos() {
    screen.value = Math.cos(screen.value)
}

function tan() {
    screen.value = Math.tan(screen.value)
}
function sinh() {
    screen.value = Math.sinh(screen.value)
}

function cosh() {
    screen.value = Math.cosh(screen.value)
}

function tanh() {
    screen.value = Math.tanh(screen.value)
}
function fact(){
    let n=screen.value;
    var f=1;
    for(i=1;i<=n;i++){
        f=f*i;
    }
    screen.value=f;
}
function sqrt(){
    screen.value=Math.sqrt(screen.value)
}
function pi(){
    screen.value+=3.14;
}

function square(){
    screen.value=screen.value*screen.value;
}
function xPowy(){
    btntxt="**"
    screen.value+=btntxt;
}
function tenPower(){
    screen.value=Math.pow(10,screen.value)
}
function log(){
    screen.value=Math.log(screen.value)
}

function ln(){
    screen.value=Math.log10(screen.value)
}
function e(){
    screen.value+=2.718281828459045;
}
function uniminus(){
    screen.value=-screen.value;
}
function abs(){
    screen.value=Math.abs(screen.value)
}
function dvd(){
    screen.value=1/screen.value;
}
function rand(){
    screen.value=Math.random()*100;
}
function exp(){
    btntxt="e"
    screen.value+=btntxt;
}
function mod(){
    btntxt="%";
    screen.value += btntxt;

}