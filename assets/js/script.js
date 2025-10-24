const tg = window.Telegram.WebApp;

tg.expand();

const buyBtn = document.getElementById('buyStar');
buyBtn.addEventListener('click', () => {
    tg.sendData(JSON.stringify({
        type: 'buy_star',
        amount: 5  // məsələn, 5 Star
    }));
});


document.getElementById('startBtn').addEventListener('click', () => {
    tg.MainButton.setText('Loto başladı 🎲');
    tg.MainButton.show();
});