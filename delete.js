const dbConnect=require('./mongodb');
const deleteData=async ()=>{
    let data=await dbConnect();
    let result= await data.deleteMany(
        {name:'note 1'}
        )
        if(result.acknowledged)
        {
            console.log(result)
        }
}
deleteData();