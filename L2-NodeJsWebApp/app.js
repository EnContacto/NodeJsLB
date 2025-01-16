const express = require('express');
const app = express();

// Function to calculate how many days are left until the end of the year
function calculateDaysUntilEndOfYear() {
  const today = new Date();
  const endOfYear = new Date(today.getFullYear(), 11, 31);
  const differenceInMilliseconds = endOfYear - today;
  const remainingDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  return remainingDays;
}

// Function to get the greeting based on the current hour
function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour >= 6 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

app.get('/', (req, res) => {
  const greeting = getGreeting();
  const daysUntilEndOfYear = calculateDaysUntilEndOfYear();
  
  // HTML styles
  res.send(`
    <html>
      <head>
        <title>Greeting</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f3f4f6;
          }
          h1 {
            font-size: 3em;
            margin: 0;
          }
          p {
            font-size: 1.5em;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>${greeting}</h1>
          <p>${daysUntilEndOfYear} days left until the end of the year.</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = 5454;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
