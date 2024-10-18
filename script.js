//2-premier code
//+ exercice 6
let prenom = prompt( "Indique ton prénom: ")
let message = "Bonjour "
   //console.log (message)

   let firstname = message + "Beyonce ! "
   let secondname = message + prenom
   


 //3-dans une fonction  
//function sayHello (){
    //return (firstname)
//}
//sayHello ()

//function sayHello (firstname){
//    return (firstname)
//}

//4- un second paramètre
//function sayHello (firstname, hour){
//let hourBonsoir = hour >= 18
//         if (hourBonsoir)
  //              console.log ("Bonsoir Beyonce !")
//    else { 
//        console.log (firstname)
 //   }
 //   return
 //   }

 //   sayHello (firstname, 22)
 //   sayHello (firstname, 18)
 //   sayHello (firstname, 10)


 //6-Première manipulation du DOM

 document.querySelector('h1').innerText = secondname;

 function sayHello (secondname, hour){
    let hourBonsoir = hour >= 18
             if (hourBonsoir)
                    console.log ("Bonsoir Beyonce !")
        else { 
            console.log (secondname)
        }
        return
        }
    
        sayHello (secondname, 22)
        sayHello (secondname, 18)
        sayHello (secondname, 10)
    