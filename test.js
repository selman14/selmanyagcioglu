 
 //https://www.youtube.com/watch?v=CFLhndq7UGQ
 var slayt = document.getElementsByClassName("slayt"); 
 
 var slaytSayısı = slayt.length;
 
 var slaytNo = 0; 
 
   slaytGoster(slaytNo); 
   
   
   function onceki() {
	   
	   slaytNo--;
	   
	   slaytGoster(slaytNo);
	   
	   clearInterval(s);
	   
   }
   
    function sonraki() {
	   
	   slaytNo++;
	   
	   slaytGoster(slaytNo);
	    clearInterval(s);
   } 
   
  var s =  setInterval(function() {
	   
	   slaytNo++;
	   
	   slaytGoster(slaytNo);
	   
   },3000);
   
 
 
  function slaytGoster(slaytNumarası) {
	  
	    slaytNo = slaytNumarası;
		
		if(slaytNumarası >= slaytSayısı){
			
			slaytNo = 0;
			
		} 
		
		if(slaytNumarası < 0){
			
			slaytNo = slaytSayısı -1;
			
		}
	   
	    for(i = 0; i< slaytSayısı; i++) {
			
			slayt[i].style.display = "none";
			
			
		} 
		
		slayt[slaytNo].style.display = "block";
	   
	   
  }
  //https://www.youtube.com/watch?v=0BwiIZexkys&t=1191s 
var yukari = document.getElementsByClassName("yukari_cik")[0];
// console.log(yukari);

console.log("window");

window.addEventListener("scroll", function () {
  const mesafe = window.scrollY; //Yukarıdan olan uzaklığı verir.
  //   console.log(mesafe);
  if (mesafe > 200) {
    yukari.classList.add("goster");
  } else {
    yukari.classList.remove("goster");
  }
});

yukari.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

