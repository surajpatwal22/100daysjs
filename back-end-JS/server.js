import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

let items = [];

app.get('/', (req, res) => {
  res.status(200).send("server is running");
});

// Route to add data to the array
app.post('/items', (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).send('ID and name are required');
  }
  items.push({ id, name });
  res.status(201).send('Item added');
});

// Route to update data in the array
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  if (!name) {
    return res.status(400).send('Name is required');
  }
  items[itemIndex].name = name;
  res.status(200).send('Item updated');
});

// Route to delete data from the array
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex(item => item.id === id);
  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }
  items.splice(itemIndex, 1);
  res.status(200).send('Item deleted');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
