import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000; //port 5000 untuk backend

app.use(cors()); // Aktifasi CORS
app.use(express.json());

//route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
