const express=require('express')
const app=express()
app.get('/',(req,res)=>{
	
	res.send({hw:'asin'})
})
app.listen(5000)