let tg = window.Telegram.WebApp;

let btn = document.querySelector('#click');

btn.onclick = () => {
    if (tg.MainButton.InVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText('Вы выбрали котика!')
        tg.MainButton.show()
    }
}


tg.expand()