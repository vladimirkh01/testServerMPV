const express = require('express'),
        app = express(),
        server = require('http').createServer(app);

const host = 'eurovision.fun';

app.get('/api/users', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.write("пизда ебатть");
    res.end();
});

async function main() {
    const port = 3000;
    server.listen(port, () => console.log(`Server listens http://${host}:${port}`));
}

main();