let speaker = document.getElementById("speaker");
let affirm = document.getElementById("affirm");
let restart = document.getElementById("restart");
var yay = document.getElementById("yay");
var nay = document.getElementById("nay");
let jokeList = ["what do ghosts wear when their eyesight gets blurry?", "what kind of makeup do witches wear?","why do demons and ghouls hang out together?", "why are zombies so hard to understand?", "are skeletons good at painting?", "how did the zombie  become great at trick or treating?"];

restart.addEventListener("click", refresh);
affirm.addEventListener("click", tellJoke);
yay.addEventListener("click", likeJoke);
nay.addEventListener("click", dislikeJoke);



function refresh(){
    window.location.reload();
  }

function tellJoke(){
        
    speaker.innerHTML = jokeList[Math.floor(Math.random() * 6)]
    if(speaker.innerHTML == jokeList[0]){
        setTimeout(()=>{
            speaker.innerHTML = "spooktacles.";
        }, 5000)
    }
    else if(speaker.innerHTML == jokeList[1]){
      setTimeout(()=>{
            speaker.innerHTML = "mas-scare-a!";
        }, 5000)
    }
    else if(speaker.innerHTML == jokeList[2]){
      setTimeout(()=>{
            speaker.innerHTML = "because demons are a ghoul's best friend!";
        }, 5000)
    }
    else if(speaker.innerHTML == jokeList[3]){
      setTimeout(()=>{
            speaker.innerHTML = "they're very crypt-ic.";
        }, 5000)
    }
    else if(speaker.innerHTML == jokeList[4]){
      setTimeout(()=>{
            speaker.innerHTML = "no, they prefer making skull-putres.";
        }, 5000)
    }
    else if(speaker.innerHTML == jokeList[5]){
      setTimeout(()=>{
            speaker.innerHTML = "dead-ication.";
        }, 5000)
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