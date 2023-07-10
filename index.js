const app =  require('./app')
const config = require('./src/config/config')


app.listen(config.port, ()=>{
    console.log(`server running on http://localhost:${config.port}/`);
})


