const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// user bosganda saqlaymiz
let payments = [];

// user "men to‘ladim" bosdi
app.post("/payment", (req, res) => {
  const { userId } = req.body;

  payments.push({
    userId,
    status: "pending"
  });

  console.log("Yangi to‘lov:", userId);

  res.send({ ok: true });
});

// tekshirish (premium)
let premiumUsers = [];

app.get("/check", (req, res) => {
  const userId = Number(req.query.userId);

  if (premiumUsers.includes(userId)) {
    res.send({ premium: true });
  } else {
    res.send({ premium: false });
  }
});

// ADMIN qo‘lda premium beradi
app.get("/give-premium", (req, res) => {
  const userId = Number(req.query.userId);

  premiumUsers.push(userId);

  res.send("Premium berildi");
});

app.listen(3000, () => {
  console.log("Server ishlayapti: http://localhost:3000");
});
