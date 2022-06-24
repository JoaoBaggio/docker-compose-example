require('dotenv').config()
const PORT = process.env.PORT || 5050;
const express = require("express");
const app = express();
const { Client } = require('pg')
const client = new Client()

client.connect()

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!!!!" });
});

app.get("/api/users", (req, res) => {
    const text = 'SELECT * FROM public.users'
    client.query(text, (err, data) => {
        if (err) {
            res.json(err.message)
        } else {
            res.json(data.rows)
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});