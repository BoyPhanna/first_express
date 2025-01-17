import { container } from "tsyringe";
import BookController from "./books/booksControllers";
import express from "express";

const app = express();
const port = 8088;

app.use("/books", container.resolve(BookController).routes);
app.listen(port, () => console.log(`run in port ${port}`));
