const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const overlay = document.querySelector('.overlay');
const modal_1 = document.querySelector('.first-modal');
const modal_2 = document.querySelector('.second-modal');
const modal_3 = document.querySelector('.third-modal');
const closeButtons = document.querySelectorAll('.close');


console.log(closeButtons);

const CloseAll = function () {
    overlay.classList.add('hidden');
    modal_1.classList.add('hidden');
    modal_2.classList.add('hidden');
    modal_3.classList.add('hidden');
};


btn1.addEventListener('click', function () {
    console.log('bt1 clicked');
    overlay.classList.remove('hidden');
    if (modal_1.classList.contains('hidden')) {
        modal_1.classList.remove('hidden')
    }
});

btn2.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    if (modal_2.classList.contains('hidden')) {
        modal_2.classList.remove('hidden')
    }
});

btn3.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    if (modal_3.classList.contains('hidden')) {
        modal_3.classList.remove('hidden')
    }
})


closeButtons.forEach(button =>
    button.addEventListener('click', CloseAll ));

overlay.addEventListener('click', CloseAll);

document.addEventListener('keydown', (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
        CloseAll();
    }
})