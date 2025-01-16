// server.js
const express = require("express");
const User = require("./models/user");

const app = express();
app.use(express.json());

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/users", async (req, res) => {
  try {
    const user = await User.update(
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).json({
      message: "Update success!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({
      where: { id: id },
    });
    res.status(200).json({
      message: "Delete success!",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
