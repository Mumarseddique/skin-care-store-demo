const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const statuses = ['Processing', 'Shipped', 'In Transit', 'Delivered'];

app.post('/api/checkout', (req, res) => {
  const trackingNumber = 'GF' + Math.floor(100000000 + Math.random() * 900000000);
  const trackingStatus = statuses[Math.floor(Math.random() * statuses.length)];

  res.json({
    paymentStatus: 'Paid',
    trackingStatus,
    trackingNumber,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
