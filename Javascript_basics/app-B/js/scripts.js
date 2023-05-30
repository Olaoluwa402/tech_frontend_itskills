// oop- object oriented programing approach to build project
//  group project into class moduke -book class, store class, uiclass and event

// book class
export class book{

}

// UI class
export class UI{
  static ready(){
    if(document.readyState === "loading "){
      document.addEventListener("DOMContentLoaded",   UI.ready())
    }else{
      UI.ready()
    }
  }
 
}



// store class
export class Store{ }