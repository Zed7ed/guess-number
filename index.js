let input = document.querySelector(".field__form__input");
let btn = document.querySelector(".field__form__btn");
let check = document.querySelector(".result__check__out");
let help = document.querySelector(".result__help__out");
let count = document.querySelector(".result__count__out");


const randNum = Math.ceil(Math.random() * 100);
let tries = 0;
let userNum;

btn.onclick = function guessNum (evt) {
    
   
    if (tries >= 4) {
        check.textContent = "Вы проиграли!";
        help.textContent = "Пожалуйста обновите страницу, чтобы сыграть заново";
        count.textContent = '6';
    }

    evt.preventDefault();
    userNum = input.value;
    console.log(userNum, randNum);

    if (userNum > randNum) {
      check.textContent = "Неверно";
      help.textContent = "Загаданное число меньше Вашего";
      tries++;
      count.textContent = tries;
    } else if (userNum < randNum) {
      check.textContent = "Неверно";
      help.textContent = "Загаданное число больше Вашего";
      tries++;
      count.textContent = tries;
    } else {
      check.textContent = "Верно!";
      help.textContent = "Поздравляю! Вы угадали число! Обновите страницу, чтобы начать заново";
      tries++;
      count.textContent = tries;
    } if (tries > 6) {
        alert (' Вы проиграли! Это Ваша седьмая попытка!')
        check.textContent = "Загаданное число: " + randNum;
        help.textContent = "Пожалуйста обновите страницу, чтобы сыграть заново.";
        count.textContent = '6';
    }

   
    
}