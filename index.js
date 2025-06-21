import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/param', (req , res) => {
    res.send('lya bhona param bolu');
})

app.get('/tatva', (req, res) => {
    res.send('Tatva is a great place to learn and grow!');
});

app.get('/savan', (req, res) => {
    res.send('khaddo is a great place to learn and grow!');
});

app.get('/amogh', (req, res) => {
    res.send('vaghri is a great place to learn and grow!');
});

app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
});