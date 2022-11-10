'use strict';

// Задание 1
let field = document.getElementById('field');
let ball = document.querySelector('#ball');
ball.style.transition = 'all 1s';
field.style.position = 'relative';
ball.style.position = 'absolute';
field.onmousedown = function(event) {
    if (event.target === ball) {
        return;
    }
    let ball_cords = {
        top: event.clientY - field.offsetTop - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - field.offsetLeft - field.clientLeft - ball.clientWidth / 2
    }
    
    // вверхняя граница 
    if (ball_cords.top < 0) {ball_cords.top = 0}
    // левая граница
    if (ball_cords.left < 0) {ball_cords.left = 0}

    // нижняя ганица
    if (ball_cords.top + ball.clientWidth > field.clientHeight) {
        ball_cords.top = field.clientHeight - ball.clientHeight
    }

    // правая 
    if (ball_cords.left + ball.clientWidth > field.clientWidth) {
        ball_cords.left = field.clientWidth - ball.clientWidth
    }


    ball.style.left = `${ball_cords.left}px`;
    ball.style.top = `${ball_cords.top}px`;
}

// Задание 2
for (let elem of document.querySelectorAll('.pane__BlockMain')) {
    console.log(elem);
    elem.insertAdjacentHTML('afterbegin' ,'<button class="remove-button">[x]</button>')
}

document.querySelector('.task_2').addEventListener('click', function(event){
        if (event.target.class == 'remove-button') {event.nodeElemnt.nodeElemnt.remove()}
    }
)