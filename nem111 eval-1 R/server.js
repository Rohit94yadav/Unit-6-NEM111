const express = require("express");

const app = express();



const fs = require("fs");

app.use(express.json());



app.get("/products",(req,res)=>{
    res.send("here are the products");
})

app.post("/products/create",(req,res)=>{

    const product = req.body;

    const file = fs.readFileSync("./products.json",{encoding:"utf-8"})

    const parsedfile = JSON.parse(file);

    const newarr = parsedfile.products.push(product);

    fs.writeFileSync("./products.json",JSON.stringify(parsedfile),{encoding:"utf-8"})

    res.send("Thanks for add");
})
app.delete("/products/:productId", (req, res) => {
	
	const { productId } = req.params;

	let data = fs.readFileSync("./products.json", "utf-8");

	let parsedData = JSON.parse(data)

	let products = parsedData.products;

	let updatedProducts = products.filter(prod => {

		return prod.id == productId ? false : true
	})
	parsedData.products = updatedProducts;

	fs.writeFileSync("./products.json", JSON.stringify(parsedData), "utf-8")

	console.log(parsedData.products)

	res.send("your product deleted")
})

app.patch("/products/:productId", (req, res) => {

	const { productId } = req.params;

	const payload=req.body;

	let data = fs.readFileSync("./products.json", "utf-8")

	let parsedData = JSON.parse(data)

	let products = parsedData.products;

	let updatedProducts = products.map(prod => {

		return prod.id == productId ? { ...payload, id:productId } : prod
	})


	parsedData.products = updatedProducts;

	fs.writeFileSync("./products.json", JSON.stringify(parsedData), "utf-8")

	


	res.send("product update successfully")
})



app.listen(8201,()=>{
  console.log("rahul")
})