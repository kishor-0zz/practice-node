const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());
app.use(express.json());



const product = [
   { id: 1, name: "kishor", email: "kishorsaha650@gmail.com" },
   { id: 2, name: "kishor", email: "kishorsaha650@gmail.com" },
   { id: 3, name: "kishor", email: "kishorsaha650@gmail.com" },
   { id: 4, name: "kishor", email: "kishorsaha650@gmail.com" },
   { id: 5, name: "kishor", email: "kishorsaha650@gmail.com" },
   { id: 5, name: "dipa", email: "dipa@gmail.com" }
]

app.get('/', (req, res) => {
   res.send('hello world')
})
app.get('/home', (req, res) => {
   if (req.query.name) {
      const query = req.query.name.toLowerCase();
      const QuaryMatch = product.filter(pro => pro.name.toLowerCase().includes(query));
      res.send(QuaryMatch)
   }
   else {
      res.send(product)
   }


})

app.get('/home/:id', (req, res) => {
   const id = req.params.id;
   // console.log(id);
   const match = product.find(pro => pro.id == id);
   res.send(match)
})
app.get('/about', (req, res) => {
   res.send(['one', 'two', "kasem"])
})
app.post('/home', (req, res) => {
   const user = req.body;
   user.id = product.length + 1;
   product.push(user);
   res.send(user);
})
app.listen(port, () => {
   console.log(port);
})