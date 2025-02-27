                      // my coadind on count
const Dec = document .getElementById("Dec") ;
const Res = document .getElementById("Res") ;
const Inc =document .getElementById("Inc") ;
const cyber = document .getElementById("cyber") ;

 count = 0 ;

Dec .onclick = function () {
  count -- ;
  document.getElementById("cyber") .textContent = count;

  document.getElementById("Dec")  .textContent = "subtracting"; 
  
}

Inc .onclick = function () {

  count ++ ;
  document.getElementById ("cyber").textContent = count  ;

  document.getElementById("Inc") .textContent = ("Adding") ;
  
}

Res .onclick =function () {
  count = 0 ; 
  cyber .textContent = count ;
   
  Res  .textContent = ("Reset")

  if (Res .onclick) {

    document.getElementById("Inc") .textContent = ("Increase") ;
    document.getElementById("Dec") .textContent = ("Decrease") ;

  }
  
}

            //  my coading on from nnnbbvvvvcccxxxx
 
first = document.getElementById("first") ;
 last = document.getElementById("last");
 user = document.getElementById("user") ;
email = document.getElementById("email") ;
 age = document.getElementById("age") ;
 password = document.getElementById("password") ;
 submit = document.getElementById("submit") ;
 h5 = document.getElementById("h5") ;
 h3 = document.getElementById("h3")
 

submit .onclick = function () {
                    //  my work to accept user input
 
  f   =  document.getElementById("first") .value ;
  l   =  document.getElementById("last") .value ;
  u   =  document.getElementById("user").value ;
  e   =  document.getElementById("email").value ;
  a   =  document.getElementById("age").value ;
  p   =  document.getElementById("password") .value ;


  console.log(f);
  console.log(l);
  console.log(u);
  console.log(e);
  console.log(a);
  console.log(p);


                  // my work on h3
  document.getElementById("h3").textContent= " Welcom to Adausm website.com "
      //  my work on age
  age = document.getElementById("age").value ;


 if ( age >=100 ) {
  document.getElementById("h5").textContent = "you are too old to acess our website"

  
 }
 else if (age < 18) {
  document.getElementById("h5").textContent = "you must be 18+ to acess our website"
  
 }
 
 
 
 else {
  document.getElementById("h5").textContent =" welcom to your website adausm.com"
  
 }
       

}
                                        //  my coad on select button
 const sub =  document.getElementById("sub") ;
 const zenith= document.getElementById("zenith") ;
 const polaries= document.getElementById("polaries") ;
 const UBA= document.getElementById("UBA") ;
 const ECO= document.getElementById("ECO") ;
 const p1 = document.getElementById("p1") ;
 const p2=   document.getElementById("p2") ;
 const submitt = document.getElementById("submitt") ;

   
 submitt.onclick = function () {

  if (document.getElementById("sub").checked) {
    document.getElementById("p1").textContent="you have surcessfully subcribe to a bank !"
  } else {
    document.getElementById("p1").textContent="pls subcribe to a bank"
  }

  if (document.getElementById("zenith").checked) {
    document.getElementById("p2").textContent="Welcome to zenith banking" 
  }
  if (polaries .checked) {
    document.getElementById("p2").textContent="Hello!, this is our polaries baanking system"   
  }
  if (document.getElementById("UBA") .checked) {
    document.getElementById("p2").textContent="UBA banking system is plesed to have u hear"
  }
  if (ECO.checked) {
    document.getElementById("p2").textContent="Welcone to ECO easy bank system"

    
  }
 }




const score = document.getElementById("score");
const enter = document.getElementById("enter");
const display = document.getElementById("display");


enter.onclick = function () {

   x =  document.getElementById("score") .value ;
  
   
   
  switch (true) {
    case x >= 70 :
      console.log("A");
      document.getElementById("display").textContent = "your exzm score has surcessfully been recorded on our data base with A"
      break;
    case x >= 60 :
      console.log("B");
      document.getElementById("display").textContent = "your exzm score has surcessfully been recorded on our data base with B"
      break;
   case x >= 50 :
      console.log("C");
      document.getElementById("display").textContent = "your exzm score has surcessfully been recorded on our data base with C"
      break;
  
    default :
      console.log("user input below 50" );
      document.getElementById("display").textContent = "exzm score below 50 can not be accepted on our data "
      break;
  }
  
}

                  //  my work on login using while loop 
document.getElementById("username") ;
 document.getElementById("password") ;
 document.getElementById("myppp") ;
document.getElementById("login") ;

let login = true

login.onclick = function () {
  
  
  while (!login) {
    document.getElementById("username").value ;
    document.getElementById("password") .value ;

    if (username == "adams" && password == "usman") {
      document.getElementById("myppp").textContent = (`Hello ${username} u have successfuly login to Adamus web site`) 
       login = false

       if (username == "" && password == "" ) {
        console.log("your input cant b an empty string")
        
       }
    }
  
     else {
      document.getElementById("myppp") .textContent = (`invalid user name or password`)
    }
    
  }
}


 const documentt   = document.getElementById("document");

 username =  "";

 if ( username === "") {
  documentt.textContent +=  "  Guset"
 } else {
  documentt.textContent += `   ${username}`  
 }




            //  my work on click me 
  const    mybox  = document.getElementById("mybox");

  mybox.addEventListener("click", function (event) {
    event.target.style.backgroundColor = "red"
    event.target.textContent = "Ouch😢"  })


    mybox.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "orange"
          event.target.textContent = "pls dont 😢"
          mybox.style.color = "white"
    })

    mybox.addEventListener("mouseleave", function (event) {
      event.target.style.backgroundColor = "green"
          event.target.textContent = " Click Me 😃"
          mybox.style.color = "black"
    })




    const Mainimage = document.getElementById("Mainimage");
    const Hideimage  =  document.getElementById("Hideimage");

    Hideimage.addEventListener("click", function (event) {
       
      if (Mainimage.style.visibility === "hidden") {
          Mainimage.style.visibility = "visible"
          Hideimage.textContent = "hide image"
      } else {
             Mainimage.style.visibility = "hidden";
             Hideimage.textContent = "display image"
      }
      

    })
    
 
    let MYbutton = document.querySelectorAll(".MYbutton");
  

    MYbutton.forEach(elemen => {
    elemen.addEventListener("click" ,  (event) => {
      event.target.style.backgroundColor = "black"
     event.target.remove(MYbutton)
    })
 });


    choice = ["Rock", "Paper" , "Scissors"];
const playerdisplay =  document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
 let resultdisplay = document.getElementById("resultdisplay");
 const playerscoredisplay = document.getElementById("playerscoredisplay");
 const computerscoredisplay = document.getElementById("computerscoredisplay");


username = "Joseph";
 let playerscore = 0;
 let computerscore = 0;

  function playgame(forplayer) {
        forcomputer = choice[Math.floor(Math.random() * 3)];
        console.log(  forcomputer);

        if (forplayer === forcomputer) {
          resultdisplay.textContent = `it is a tie between  ${username} and computer`;
          playerdisplay.textContent =`${forplayer}`;
          computerdisplay.textContent =   forcomputer;
        } else {
           
        switch (forplayer) {
          case"Rock" :
          resultdisplay.textContent =   (forcomputer === "Paper" ) ? `You win!  ${username}` : `You lose ${username}`;
          playerdisplay.textContent =`${forplayer}`;
          computerdisplay.textContent =   forcomputer;
            break;

          case"Paper" :
            resultdisplay.textContent =   (forcomputer === "Scissors" ) ? `You win!  ${username}` : `You lose ${username}`;
            playerdisplay.textContent =`${forplayer}`;
            computerdisplay.textContent =   forcomputer;
              break;

           case"Scissors" :
              resultdisplay.textContent =   (forcomputer === "Rock" ) ? `You win!  ${username}` : `You lose ${username}`;
              playerdisplay.textContent =`${forplayer}`;
              computerdisplay.textContent =   forcomputer;
                break;

                 
 
     
        }
        }


 if ( resultdisplay.textContent  ===  `You win!  ${username}`  ) {
    
        playerscore++
         playerscoredisplay.textContent =  playerscore;
  }
  if (resultdisplay.textContent  ==   `You lose ${username}` ) {
    computerscore++
    computerscoredisplay.textContent = computerscore;
  }
    
  }
            // my work on image slide


