const express = require('express');
const app = express();
const port = 3001;



app.get('/', (req, res) => {
    res.send('Hello World!')
    /* res.sendStatus(500) */
});

app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });

app.listen(port, () => {
    console.log('Listening on port:', port);
})