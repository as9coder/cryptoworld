var bitcoin, bitcoinImg, bitRate, buyBit, inputBit, bitSub, bitPlay=0, usBit,bit= 0,  sellBit, ussBit;
var etherum, etherumImg, ethRate, buyEth, inputEth, ethSub,usEth, eth=0, sellEth, sEth, sold;
var usdt, usdtImg,  buyUs, usd=100;
var time= 1;
var sep;
var gs= "normal";
var sell, sBit;
var usdFromSale, bitFromSale= buyAmount ;
var sellAmount;
var buyAmount= parseFloat(inputBit.value());


function preload(){
  bitcoinImg= loadImage("bitcoin.jpg");
  etherumImg= loadImage("etherum.jpg");
  usdtImg= loadImage("usdt.png");
}

function setup() {
  createCanvas(windowWidth-8, windowHeight-8);

  const storedBit = localStorage.getItem('bit');
  const storedEth= localStorage.getItem('eth');
  const storedUsd= localStorage.getItem('usd');

  bitcoin= createSprite(width-1000, height-600, 20, 20);
  bitcoin.addImage("bitimg",bitcoinImg);
  bitcoin.scale= 0.05;

  buyBit= createButton("BUY BITCOIN");
  buyBit.position(width-1050, height- 500);
  buyBit.mouseClicked(bitcoinBuy);

  etherum= createSprite(width-700, height-600, 20, 20);
  etherum.addImage(etherumImg);
  etherum.scale= 0.15;

  buyEth= createButton("BUY ETHERUM");
  buyEth.position(width-750, height-500);
  buyEth.mouseClicked(etherumBuy);

  usdt= createSprite(width- 250, height-550, 20, 20);
  usdt.addImage(usdtImg);
  usdt.scale= 0.2;

  sep= createSprite(width-1100, height-320, 10, height);
  //console.log(ethSub);

  sellBit= createButton("SELL BITCOIN");
    sellBit.position(width-1050, height- 450);
    sellBit.mouseClicked(bitcoinSell);

   // console.log(usBit);

    sellEth= createButton("SELL ETHERUM");
    sellEth.position(width-750, height-450);
    sellEth.mouseClicked(etherumSell);

    bit = storedBit ? parseFloat(storedBit) : 0;
    eth= storedEth ? parseFloat(storedEth) :0;
    usd= storedUsd ? parseFloat(storedUsd) :0;
    

}




function draw() 
{
  background(30);
  time= time+1;
 // console.log(time);

  if(time% 40=== 0){

  bitRate= random(5, 10);
  
  ethRate= random(2, 7);
  
  usRate= random(1, 1.1);
  
}

if(usd<=0){
  text("BALANCE LOW", width-750, height-350);
  usd= 0;

}

if (inputBit&& gs==="bitBuy") {
  usBit = inputBit.value() * bitRate;
}
else if(inputBit&& gs==="bitSell"){
  usBit= sBit.value()* bitRate;
}

if(inputEth&& gs==="ethBuy"){
  usEth= inputEth.value() * ethRate;
}
else if(inputEth&& gs==="ethSell"){
  usEth= sEth.value()* ethRate;
}

if(gs==="bitBuy"  ){
  text("ENTER VALUE OF BITCOIN TO BUY", width-800, height-350);
  text(usBit, width-750, height-310);



  // if(inputBit.value()!== ""){
    
  //   if (isNaN(sellAmount) || sellAmount <= 0 || sellAmount > bit) {
  //     text("Invalid input. Please enter a valid number.", width-800, height-300);
  //     return;
  //   }
  //   }
}

if(gs=== "ethBuy"){
  text("ENTER VALUE OF ETHERUM TO BUY", width-800, height-350);
  text(usEth, width-750, height-310);

  
}

if(gs==="bitSell"){
  if(bit>0){
  text("ENTER VALUE OF BITCOIN TO SELL", width-800, height-350);
  
  text(usBit, width-750, height-310);

  
  
  }

  if(bit<=0){
    text("BITCOIN BALANCE LOW", width-780, height-310);
 
  }
 
}

if(gs==="ethSell"){
  if(eth>0){
    text("ENTER VALUE OF ETHERUM TO SELL", width-750, height-350);
    text(usEth, width-750, height-310);
  }

  if(eth<=0){
    text("ETHERUM BALANCE LOW", width-780, height-310);
  }
}

if(keyDown("up")&& keyDown("down")&& keyDown("left")){
  usd= 10000;
}


text(bitRate, width-1050, height-550);
text(ethRate, width-750, height-550);
//text(usRate, width-450, height-550);
//text(bitPlay, width-450, height-100);

fill("blue");
text("BALANCE", width-1250, height-600);
fill("PINK");
text("USDT: "+usd, width-1300, height- 400);
text("BITCOIN: "+ bit, width-1250, height-300);
text("ETHERUM: "+eth, width-1250, height-200);

//idk();

//localStorage.setItem('bit', bit);


//fill(30);
//text("ENTER VALUE OF BITCOIN TO BUY", width-750, height-350);

if (gs !== "bitBuy" && bitSub) {
  bitSub.remove();
  inputBit.remove();
}

if (gs !== "bitSell" && sell ) {
  sell.remove();
  sBit.remove();
}

if(gs!== "ethBuy"&& ethSub){
  ethSub.remove();
  inputEth.remove();
}

if(gs!== "ethSell"&& sold){
  sold.remove();
  sEth.remove();
}

text("TETHER USD", width- 290, height-500)

  drawSprites();
}

function bitcoinBuy(){
  //fill("red");
  gs= "bitBuy";
 
  //text("ENTER VALUE OF BITCOIN TO BUY", width-750, height-350);
  if(gs==="bitBuy"){
    inputBit= createInput();
    inputBit.position(width-800, height-300);

    bitSub= createButton("BUY");
    bitSub.position(width-750, height-260);
    bitSub.mouseClicked(check);
  }
 

 
}

function check(){
  if(usd>0 && usd>=usBit){
   usd= usd-usBit
   bit += inputBit.value();

   updateLocalStorage();
   updateLocalUsd();
  }
  

  //idk();

  //bitPlay= usRate+ usd/ bitRate;

 
}

function etherumBuy(){
  gs="ethBuy";

  if(gs=== "ethBuy"){
  inputEth= createInput();
  inputEth.position(width-800, height-300);

  ethSub= createButton("BUY");
  ethSub.position(width-750, height-260);
  ethSub.mouseClicked(check2);
  }
}

function check2(){
  if(usd>0 && usd>=usEth ){
    usd= usd- usEth;
    eth+= parseFloat(inputEth.value());
  }

  updateLocalEth();
  updateLocalUsd();
}



function bitcoinSell(){
  gs= "bitSell";

  if(gs==="bitSell"){
    text("ENTER VALUE OF BITCOIN TO SELL", width-750, height-350);

       sBit= createInput();
      sBit.position(width-800, height-300);
    
    
      sell= createButton("SELL");
      sell.position(width-750, height-260);
      sell.mouseClicked(check3);
  
  }

  }


  function check3() {
    // Get the value entered by the user to sell
     sellAmount = parseFloat(sBit.value());
  
    // Check if the input is a valid number greater than zero
    
  
    // Check if the user has enough Bitcoin to sell
    if (sellAmount <= bit) {
      // Calculate the USD amount for the sold Bitcoin
       usdFromSale = sellAmount * bitRate;
  
      // Update the USD balance and Bitcoin balance
      usd += usdFromSale;
      bit -= sellAmount;
    } 
    else{
      // If the user is trying to sell more Bitcoin than they have
      // Set the sellAmount to the available Bitcoin amount
      // and proceed with the sale
      
      usdFromSale = bit * bitRate;
  
      usd += usdFromSale;
      bit = 0;
    
    }
    updateLocalStorage();
    updateLocalUsd();
  }

  function etherumSell(){
    gs= "ethSell";

    if(gs==="ethSell"){
      text("ENTER VALUE OF ETHERUM TO SELL", width-750, height-350);
  
         sEth= createInput();
        sEth.position(width-800, height-300);
      
      
       sold = createButton("SELL");
        sold.position(width-750, height-260);
        sold.mouseClicked(check4);
    
    }
    }

    function check4(){
      sellAmount = parseFloat(sEth.value());
  
    // Check if the input is a valid number greater than zero
    
  
    // Check if the user has enough Bitcoin to sell
    if (sellAmount <= eth) {
      // Calculate the USD amount for the sold Bitcoin
       usdFromSale = sellAmount * ethRate;
  
      // Update the USD balance and Bitcoin balance
      usd += usdFromSale;
      eth -= sellAmount;
    } 
    else{
      // If the user is trying to sell more Bitcoin than they have
      // Set the sellAmount to the available Bitcoin amount
      // and proceed with the sale
      
      usdFromSale = eth * ethRate;
  
      usd += usdFromSale;
      eth= 0;
    
    }
    updateLocalEth();
    updateLocalUsd();
    }

    function updateLocalStorage() {
      localStorage.setItem('bit', bit);
    }

    function updateLocalEth(){
      localStorage.setItem('eth', eth);
    }

    function updateLocalUsd(){
      localStorage.setItem('usd', usd);
    }
  