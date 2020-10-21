import express from 'express';

// 상수
const PORT = 8080;
// const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
        res.send('ok');
    });

app.listen(PORT);
console.log(`Runngin on port : ${PORT}`)
// console.log(`Running on http://${HOST}:${PORT}`);

export default app;