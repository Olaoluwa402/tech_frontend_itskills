export class UI{
  static.ready(){
    const sumbmitfordata = document.getElementsByClassName("btn-sumbit")[0]
    sumbmitfordata.addEventListener("click",UI.submitFormDataHandler)
  }

  static submitFormDataHandler(e){
    e.preventDefualt()
    const title = document.getElementsByClassName("input-titile")[0].value;
    const author = document.getElementsByClassName("author")[0].value;
    const isbn = document.getElementsByClassName("isbn")[0].value;


    // perfrom validation
    if(!title || !author || !isbn){
      UI.alretbox("all filde are required")
    }

    // check if title or isbn throw and error\
    UI.titleOrIsbtnexist(title,isbn)
const data = {
  id:author + isbn ,
  title,
  author,
  isbn
}
  }
  static titleOrIsbtnexist(title,isnb)
}