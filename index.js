const express = require("express");

const app = express();

const port = 3000;

const cocktails = [
  {
    id: 0,
    name: "Margarita",
  },
  {
    id: 1,
    name: "Mojito",
  },
  {
    id: 2,
    name: "Cuba Libre",
  },
];

app.get("/cocktails", (req, res) => {
  res.status(200).json(cocktails);
});

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.get("/users/:name", (req, res) => {
    res.send(`Welcome ${req.params.name}`);
  });

app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});