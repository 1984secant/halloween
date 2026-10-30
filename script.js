let speaker = document.getElementById("speaker");
let affirm = document.getElementById("affirm");
let restart = document.getElementById("restart");
let yay = document.getElementById("yay");
let nay = document.getElementById("nay");
let jokeList = ["what do ghosts wear when their eyesight gets blurry?", "what kind of makeup do witches wear?","why do demons and ghouls hang out together?", "why are zombies so hard to understand?", "are skeletons good at painting?", "how did the zombie  become great at trick or treating?"];


restart.addEventListener("click", refresh);
affirm.addEventListener("click", tellJoke);
yay.addEventListener("click", likeJoke);
nay.addEventListener("click", dislikeJoke);

yay.disabled = true; 
nay.disabled = true; 

function tellJoke(){
        
    speaker.innerHTML = jokeList[Math.floor(Math.random() * 6)]
    if(speaker.innerHTML == jokeList[0]){
        setTimeout(()=>{
            speaker.innerHTML = "spooktacles.";
            yay.disabled = false;  
            nay.disabled = false;  
        }, 3000)
    }
    else if(speaker.innerHTML == jokeList[1]){
      setTimeout(()=>{
            speaker.innerHTML = "mas-scare-a!";
            yay.disabled = false;  
            nay.disabled = false;
        }, 3000)
    }
    else if(speaker.innerHTML == jokeList[2]){
      setTimeout(()=>{
            speaker.innerHTML = "because demons are a ghoul's best friend!";
            yay.disabled = false;  
            nay.disabled = false;
        }, 3000)
    }
    else if(speaker.innerHTML == jokeList[3]){
      setTimeout(()=>{
            speaker.innerHTML = "they're very crypt-ic.";
            yay.disabled = false;  
            nay.disabled = false;
        }, 3000)
    }
    else if(speaker.innerHTML == jokeList[4]){
      setTimeout(()=>{
            speaker.innerHTML = "no, they prefer making skull-putres.";
            yay.disabled = false;  
            nay.disabled = false;
        }, 3000)
    }
    else if(speaker.innerHTML == jokeList[5]){
      setTimeout(()=>{
            speaker.innerHTML = "dead-ication.";
            yay.disabled = false;  
            nay.disabled = false;
        }, 3000)
    }
    else{
        speaker.innerHTML = "error";
    }
}

function likeJoke(){
    speaker.innerHTML = "awesome!!"
    nay.disabled = true;    
}

function dislikeJoke(){
    speaker.innerHTML = "dangit..."
    yay.disabled = true;
}

function refresh(){
    window.location.reload();
  }

  