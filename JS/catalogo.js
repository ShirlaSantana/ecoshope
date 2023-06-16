const $ELEMENTOS = document.getElementsByClassName("elemento");

let elementos_id = [], elemento_mostrado = 0;

for (let i = 0; i < $ELEMENTOS.length; i++) {
    elementos_id.push($ELEMENTOS[i].getAttribute("id"));
}

const $BTN_NEXT = document.getElementById("next");
$BTN_NEXT.onclick = next;

const $BTN_PREV = document.getElementById("prev");
$BTN_PREV.onclick = prev;

function next() {
    elemento_mostrado++;
    $BTN_PREV.disabled = false;
    window.location.href = "#" + elementos_id[elemento_mostrado];

    if (elemento_mostrado + 1 === $ELEMENTOS.length) {
        $BTN_NEXT.disabled = true;
    }
}

function prev() {
    elemento_mostrado--; 
    $BTN_NEXT.disabled = false; 
    window.location.href = "#" + elementos_id[elemento_mostrado]; 

    if (elemento_mostrado === 0) {
        $BTN_PREV.disabled = true;
    }
}