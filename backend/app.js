import express from "express";
import cors from "cors";


const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.listen(8800, () => {
  console.log("Server is running!");
});