const dbConnect = require('./mongodb');

const insert=async()=>{
    const db = await dbConnect();
    const result = await db.insertMany([
        { name:'note 1',brand:'micro',price:4200,category:'mobile'},
        { name:'note 2',brand:'sony',price:3200,category:'mobile'},
        { name:'note 3',brand:'moto',price:5200,category:'mobile'}  

    ]);
        if(result.acknowledged)
        {
            console.log("data inserted")
        }
}
insert();