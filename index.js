const express = require("express")
const app = express();
const port = 3000;
const quotes = [ "The only way to do great work is to love what you do. – Steve Jobs", "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer", "The future depends on what you do today. – Mahatma Gandhi", "Believe you can and you're halfway there. – Theodore Roosevelt", "Don't watch the clock; do what it does. Keep going. – Sam Levenson", "It does not matter how slowly you go as long as you do not stop. – Confucius", "The best way to predict the future is to create it. – Peter Drucker", "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt", "Strive not to be a success, but rather to be of value. – Albert Einstein", "A journey of a thousand miles begins with a single step. – Lao Tzu" ];

app.get('/quote', (req, res) => {
  const selected=quotes[Math.floor(Math.random()*quotes.length)];
  res.json({"quote" :selected});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});