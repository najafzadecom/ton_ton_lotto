const tg = window.Telegram.WebApp;
tg.expand();

// Telegram-dan gələn bütün məlumatı ekrana yazdır
const container = document.createElement('div');
container.style.whiteSpace = "pre-wrap";
container.style.background = "#fff";
container.style.color = "#000";
container.style.padding = "10px";
container.style.margin = "10px";
container.style.borderRadius = "10px";
container.style.maxHeight = "200px";
container.style.overflowY = "scroll";
document.body.appendChild(container);

container.textContent = "Telegram WebApp obyekti:\n" + JSON.stringify(tg, null, 2) + "\n\n";
container.textContent += "initDataUnsafe:\n" + JSON.stringify(tg.initDataUnsafe, null, 2) + "\n\n";
container.textContent += "initData:\n" + tg.initData + "\n\n";

// Star alma düyməsi
const buyBtn = document.getElementById('buyStar');
buyBtn.addEventListener('click', () => {
    tg.sendData(JSON.stringify({
        type: 'buy_star',
        amount: 5
    }));
});

// Start düyməsi
document.getElementById('startBtn').addEventListener('click', () => {
    tg.MainButton.setText('Loto başladı 🎲');
    tg.MainButton.show();
});

// İstifadəçi məlumatını ayrıca yazdır
const user = tg.initDataUnsafe.user;
const userDiv = document.createElement('div');
userDiv.style.marginTop = "20px";
userDiv.style.background = "#eee";
userDiv.style.color = "#000";
userDiv.style.padding = "10px";
userDiv.style.borderRadius = "10px";
userDiv.textContent = "User info:\n" + JSON.stringify(user, null, 2);
document.body.appendChild(userDiv);
