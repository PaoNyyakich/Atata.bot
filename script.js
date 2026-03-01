let tg = window.Telegram.WebApp;

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

btn1.onclick = () => {
    tg.MainButton.setText("Вы выбрали Москва-Нижний Новгород!");
    item = "Москва-Нижний Новгород";
    tg.MainButton.show();
};

btn2.onclick = () => {
    tg.MainButton.setText("Вы выбрали Самара-Казань!");
    item = "Самара-Казань";
    tg.MainButton.show();
};

btn3.onclick = () => {
    tg.MainButton.setText("Вы выбрали Ижевск-Брянск!");
    item = "Ижевск-Брянск";
    tg.MainButton.show();
};

btn4.onclick = () => {
    tg.MainButton.setText("Вы выбрали Владивосток-Сочи!");
    item = "Владивосток-Сочи";
    tg.MainButton.show();
};

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});

tg.expand();
