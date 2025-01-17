export default class BookRepository{
    books=[
        {id:1,name:'Hello'},
        {id:2,name:'dd'},
    ];

    getBooks(){
        return this.books;
    }
}