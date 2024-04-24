let vizat = document.getElementById('vizat');
let lista = document.getElementById('lista');
vizat.addEventListener('click', function () {
    lista.classList.remove('hidden');
    lista.classList.add('flex', 'absolute', 'flex-col');
});
document.addEventListener('click', function (event) {
    const outside_click = !vizat.contains(event.target) && !lista.contains(event.target);
    if (outside_click) {
        lista.classList.add('hidden');
        lista.classList.remove('flex', 'absolute', 'flex-col');
    }
});