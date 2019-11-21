`# Vue_Express[3]笔记`


`In vue.config.js`
const path=require('path');
module.exports = {
    outputDir: path.resolve(__dirname,'../server/public'), //build the src on public folder
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:5000'
            }
        }
    }
    
}
`In server/index.js`
//Handle production
if(process.env.NODE_ENV === 'production'){
    //static folder
    app.use(express.static(__dirname+'/public/'));

    //handle SPA
    app.get(/.*/,(req,res)=>res.sendFile(__dirname+'/public/index.html'));
}

//