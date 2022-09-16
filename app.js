var initialPrice=document.querySelector("#initial-price");
var quantity=document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var output=document.querySelector("#output-msg");
var btnSubmit=document.querySelector("#submit-btn");
var body = document.querySelector("body");
var head=document.querySelector('#heading');

btnSubmit.addEventListener("click",clickHandler);


function clickHandler(){
    
  if(Number(initialPrice.value)<0 || Number(quantity.value)<0 || Number(currentPrice.value)<0) {
    output.style.display = "display";
    errMessage("Please enter values greater than 0");
    }
    else if (initialPrice.value.length == 0 || quantity.value.length == 0 || currentPrice.value.length == 0) {
    errMessage("Please enter all the values");
    }
   else{
        var ip= Number(initialPrice.value);
        var qty= Number(quantity.value);
        var cp= Number(currentPrice.value);
        calculateProfitAndLoss(ip, qty, cp);
    }  
}


function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss= (initial-current)*quantity;
         var lossPercentage= (loss/initial)*100;
         output.innerHTML=`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`;
         output.style.color='black';
    }
    else if(current>initial){
        var profit= (current-initial)*quantity;
        var profitPercentage= (profit/initial)*100;
        output.innerHTML=`Hey, the profit is ${profit} and the percent is ${profitPercentage}%`;
        output.style.color='black';
    }
    else{
        output.innerHTML=`Hey, you have neither made a profit nor a loss.`;
        output.style.color='white';
        //output.style.fontSize='1em'; //JS case sensitive. S is caps
    }


    if (profitPercentage >= 50) {
      body.style.backgroundImage = "url('images/happy.png')"; 
      body.style.backgroundRepeat = "no-repeat";
      head.style.color='black'; 
      var els = document.getElementsByClassName('lbl'); 
      // document.getElementsByClassName returns a list of DOM Node. So you need to loop through it and apply styles to all elements individually.
      for (var i = 0; i < els.length; i++) {
        els[i].style.color = 'maroon';
      }
    }
    else if (lossPercentage >= 50) {
      body.style.backgroundImage = "url('images/sad.jpg')";
      body.style.backgroundRepeat = "no-repeat";
      head.style.color='black'; 
      var els = document.getElementsByClassName('lbl'); 
      for (var i = 0; i < els.length; i++) {
        els[i].style.color = 'maroon';
      }
    }
    else {
      body.style.backgroundImage = "url('images/bg.png')";
      body.style.backgroundRepeat = "no-repeat";
       head.style.color='rgb(248, 248, 41)'; 
        var els = document.getElementsByClassName('lbl'); 
        for (var i = 0; i < els.length; i++) {
          els[i].style.color = 'rgba(0, 255, 179, 0.911)';
        } 
    }

}


