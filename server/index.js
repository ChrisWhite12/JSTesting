
function repeatMessage(message, repeatNo){
    let messageToShow = ''
    for (let i = 0; i < repeatNo; i++) {
        messageToShow += message;
    }
    return messageToShow;
}

function calSum(inputArr){
    var total = 0;

    for (let i = 0; i < inputArr.length; i++) {

        const el = inputArr[i]

        if(typeof(el) == "number"){
            total += el
        }
        else{
            throw("Wrong data detected")
        }
    }
    return total
}



const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res) => {
//   res.send('Hello World!')
    res.json({
        message: "Hello World!"
    })
})

app.post('/names',(req,res) => {
    let incData = request.body.namesArray;
    console.log(incData);
    res.json({
        firstName: incData[0]
    })
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// app = coded-up routes & server inst
// server = server that is running & visitable by users

module.exports = {
    app,
    server,
    repeatMessage,
    calSum
}