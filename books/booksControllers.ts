import { Router } from "express";
import { autoInjectable } from "tsyringe";
import BookService from "./booksServices";

@autoInjectable()
export default class BookController{
    bookService:BookService;
    router:Router;
    constructor (bookService:BookService){
        this.bookService=bookService;
        this.router=new Router();
    }

    getBookRoute(){
        return this.bookService.getBooks();
    }
    routes(){
        this.router.get('/',(_req,res)=>res.send(this.getBookRoute()));
        return this.routes;
    }

}