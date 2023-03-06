const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');



// middleware
app.use(cors());
app.use(express.json());

//  UserName  = bootstrap_tree
//  Password = cZ6Jj0iBtB5rayul


const uri = "mongodb+srv://bootstrap_tree:cZ6Jj0iBtB5rayul@cluster0.ksaovkw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    const BootStrap = client.db("bootstrap_tree").collection("BootStrap");









  }
  finally {
    // await client.close();
  }
}
run().catch((err) => console.error(err))









app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})