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

document.getElementById("inviteBtn").addEventListener("click", () => {
    const user = tg.initDataUnsafe.user;
    const refLink = `https://t.me/ton_ton_lotto_bot/app?startapp=ref_${user.id}`;
  
    tg.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=🎯 Play Ton Ton Lotto with me and earn rewards!`
    );
  });