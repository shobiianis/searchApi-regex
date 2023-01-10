 const mongoose=require("mongoose");

const main= async()=>{

    await mongoose.connect("mongodb://localhost:27017/e-com")
    const productSchema=new mongoose.Schema({
       name:String

    })

    const productModel=mongoose.model("product",productSchema);
    let data=new productModel({name :"huwaie"}); //it will enter name in mongodb Database    
    let result=await data.save();
    console.log(result)
}

// let data=new productModel({name:"ipone",price:9000}) this will  enter name only as in schema we have defined only one field for products collection in ecom database
// what if we want to enter two fields so for this we just another field name and their datatype example:
/*
const productSchema=new mongoose.Schema({
    name:String,
    price:Number

})
*/

main();






