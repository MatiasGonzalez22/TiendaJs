const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let products = [
    {

      id: 1,
      name: "Blue Lock",
      price: 50,
      image: "images/product-1.jpg",
      stock: 2

    },
    {

        id: 2,
        name: "El monstruo sin nombre",
        price: 50,
        image: "images/product-2.jpg",
        stock: 50
  
      },
      {

        id: 3,
        name: "Real",
        price: 50,
        image: "images/product-3.jpg",
        stock: 50
  
      },
      {

        id: 4,
        name: "Twenty first century boys",
        price: 50,
        image: "images/product-4.jpg",
        stock: 50
  
      },
      {

        id: 5,
        name: "Ranma 1/2",
        price: 50,
        image: "images/product-5.jpg",
        stock: 50
  
      },

]
app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
    const ids = req.body;
    const productsCopy = products.map(p => ({...p}));
    ids.forEach(id => {

        const product = productsCopy.find(p => p.id === id);
        if(product.stock > 0){

            product.stock--;

        }
        else{
            throw("Sin stock");
        }
        
        
    });
    products = productsCopy;
    res.send(products);
  });

app.use("/", express.static("Frontend"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})