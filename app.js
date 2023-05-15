const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;




app.use(express.json());
app.use(cookieParser());




app.listen(port, () => {
    console.log(`Start listen Server: ${port}`)
})