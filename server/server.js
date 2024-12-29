const express= require('express');
const app = express();
const gallery = require('./routes/gallery.router')
const PORT = process.env.PORT || 3000;

//establish middleware - and get an explanation above from abraham later on
app.use(express.json());
app.use(express.static('build'));

app.use('/api/gallery',gallery);

app.listen(PORT,()=>{
    console.log('my port is connected on', PORT);
})
