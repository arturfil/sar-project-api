const express = require('express');
const app = express();


// this is static and not editable, this is only for example purposes
app.get('/api/volcanoes', (req, res, next) => {
  const volcanoes = [
    {
      id: 1,
      name: "Popocatepetl",
      img: "https://www.geek.com/wp-content/uploads/2019/03/mexico_volcano-650x366.jpg",
      height: 17802,
      location: "Mexico, Puebla"
    },
    {
      id: 2,
      name: "Mauna Loa",
      img: "https://i.ytimg.com/vi/i-3IrJYq2Ko/maxresdefault.jpg",
      height: 13678,
      location: "Hawaii"
    },
    {
      id: 3,
      name: "Kilahuea",
      img: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8zODEvb3JpZ2luYWwvcHV1LW9vLmpwZw==",
      height: 17802,
      location: "Hawaii"
    },
    {
      id: 4,
      name: "Popocatepetl",
      img: "https://www.geek.com/wp-content/uploads/2019/03/mexico_volcano-650x366.jpg",
      height: 17802,
      location: "Mexico, Puebla"
    },
    {
      id: 5,
      name: "Mauna Loa",
      img: "https://i.ytimg.com/vi/i-3IrJYq2Ko/maxresdefault.jpg",
      height: 13678,
      location: "Hawaii"
    },
    {
      id: 6,
      name: "Kilahuea",
      img: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNy8zODEvb3JpZ2luYWwvcHV1LW9vLmpwZw==",
      height: 17802,
      location: "Hawaii"
    },
  ];

  res.json(volcanoes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Volcanoe server started on port: ' + port))