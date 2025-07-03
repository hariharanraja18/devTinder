const express = require('express');

const app = express();

app.use('/test', (req, res) => {
	res.send('Hello from ExpressJs server');
});

app.use('/hello', (req, res) => {
	res.send('Hello hello how are you?');
});

app.listen(7777, () => {
	console.log('Server is successfully listening on port 7777 da?');
});
