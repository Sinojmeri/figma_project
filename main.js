let vizat = document.getElementById('vizat');
let lista = document.getElementById('lista');
let container = document.getElementById('container');
let visibleList = true;
document.addEventListener("DOMContentLoaded", () => {
    container.classList.remove('relative');
    lista.classList.remove("absolute");
});
vizat.addEventListener('click', function () {
    if (visibleList) {
    lista.classList.remove('hidden');
    lista.classList.add('flex', 'absolute', 'flex-col');
    visibleList = false;  
    }
    else {
        lista.classList.add('hidden');
        lista.classList.remove('flex', 'absolute', 'flex-col');
        container.classList.remove('relative');
        visibleList = true;
    }
});
document.addEventListener('click', function (event) {
    const outside_click = !vizat.contains(event.target) && !lista.contains(event.target);
    if (outside_click) {
        lista.classList.add('hidden');
        lista.classList.remove('flex', 'absolute', 'flex-col');
        container.classList.remove('relative');
        visibleList = true;
    }
});
