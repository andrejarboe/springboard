function countdown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("DONE!");
    } else {
      console.log(time);
    }
  }, 1000);
}

// countdown(5);

function randomGame(){
    let num;
    let count = 0;
    let timer = setInterval(function(){
        num = Math.random()
        count++;
        if(num > .75){
            clearInterval(timer);
            return console.log("The number of tries it took before we found a number greater than .75: " +count);
        }
        // console.log(num);
    }, 1000);




}

randomGame();