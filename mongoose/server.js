import express from "express";
const app = express();
const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('server is running')
});

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})