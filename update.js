const dbConnect=require('./mongodb');
const updateData= async()=>{
let data=await dbConnect();
let result=await data.updateMany(
    {name:'note 5 pro'},{
        $set:{name:'note 5'}
    });
     console.log(result)
}
 

updateData();