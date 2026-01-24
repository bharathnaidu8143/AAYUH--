import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const APP_ID = "79249740";
const APP_KEY = "4783b88aadd36580a2ec5cfc216391ae";

app.post("/diagnosis", async (req, res) => {
  const response = await fetch(
    "https://api.infermedica.com/v3/diagnosis",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "App-Id": APP_ID,
        "App-Key": APP_KEY
      },
      body: JSON.stringify({
        sex: "male",
        age: 25,
        evidence: req.body.evidence
      })
    }
  );

  res.json(await response.json());
});

app.listen(3000, () =>
  console.log("Infermedica backend running")
);
