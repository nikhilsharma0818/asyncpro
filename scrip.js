const randomcolor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i =0 ; i<6;i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  }
  console.log(randomcolor());
   let stopin
  const startchange = function (){
     stopin = setInterval(changeColor,500);
    function changeColor(){
      document.body.style.backgroundColor = randomcolor();
    }
  };
  const stopchange = function (){
    clearInterval(stopin)
  }
  document.querySelector("#start").addEventListener(`click`,startchange)
  document.querySelector("#stop").addEventListener(`click`,stopchange)