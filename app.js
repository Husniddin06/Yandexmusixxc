const tg = window.Telegram.WebApp;

let userId = 111;

if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
  userId = tg.initDataUnsafe.user.id;
}

document.getElementById("uid").innerText = userId;

function pay() {
  fetch("/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: userId
    })
  });

  alert("So‘rov yuborildi!");
}
