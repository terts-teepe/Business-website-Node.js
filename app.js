const express = require('express')
const app = express()

app.use(express.static('public'))

app.use(express.static('myStaticPath', {
    index: 'myNonDefaultHomepage.html'
}));

const listener = app.listen(3000, () => {
    console.log('server has started at ', listener.address().port)
})
