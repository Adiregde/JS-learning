const express = require('express');
const app = express();
const tasks = require('./routes/tasks');


//middleer

app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Task manager App is being ready')
})

// app.get('/home', (req, res) => {
//     res.send('Task manager App is being ready in home directory')
// })
app.use('/api/v1/tasks', tasks)



const port = 5000

app.listen(port, console.log(`server is working fine on port: ${port}`))