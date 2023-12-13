const express = require('express')

const afra7Route = express.Router()

const { deletafra7,GetById,Updateafra7,Addafra7,Getafra7, Updateafra7}=require('../controller/afra7')

//get route http://localhost:4000/afra7/jibtafra7

 afra7Route.get('/jibtafra7',Getafra7) 

//delet routes  http://localhost:4000/afra7/afra7

afra7Route.delete('/afra7/:id',deletafra7)

//post route  http://localhost:4000/afra7/zidafra7
afra7Route.post('/zidafra7',Addafra7)

//put route http://localhost:4000/afra7/updatyafra7
 
afra7Route.put('/updatyafra7/:id',Updateafra7)

//and naw it's the get by id   http://localhost:4000/afra7/jibw7daafra7

afra7Route.get('/jibw7daafra7/:id',GetById)




module.exports = afra7Route