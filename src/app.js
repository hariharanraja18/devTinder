const express = require('express');

const app = express();

// app.use('/user', (req, res) => {
// 	res.send('Hello Hariharan');
// });

app.get('/user', (req, res) => {
	res.send({name:"hari",age:22});
});

app.post('/user', (req, res) => {
	res.send('Save in db successfully');
});

app.delete('/user',(req,res)=>{
    res.send("User has been delelted successfully");
})

app.listen(7777, () => {
	console.log('Server is successfully listening on port 7777 da?');
});
