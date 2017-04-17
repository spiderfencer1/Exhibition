const messages = [
	"We flew into Havana, Cuba.",
	"We got introduced to the town of Matanzas, Cuba.",
	"We were introduced to a facility for disabled children in Cuba, and started painting it.",
	"We painted more of the facility for disabled children.",
	"We finished painting the facility, and talked about Cuba as a country, as well as freedom of speech around the world.",
	"We were surprised with a trip to the Bay of Pigs to snorkel.",
	"We taught English to some Cuban kids, and played sports with them.",
	"We brought bags of food to Cuban families. This was the day that Abhi lost his temper. Sorry!",
 "We drove to Varedaro Beach, where we spent the rest of the day.",
	"We drove to Havana, and toured the city.",
	"We took a car tour around Havana city.",
	"We left Cuba. Goodbye!"
];
const message = document.getElementById("message");

function remove(callback){
	if(message.innerHTML.length > 1){
		const anim = setInterval(function(){
			message.innerHTML = message.innerHTML.substring(1);
			if(message.innerHTML.length == 1){clearInterval(anim);callback();}
		},1000/60);
	}else{callback();}
}

function display(text){
 remove(function(){
  let i=0;
  const anim = setInterval(function(){
   message.innerHTML = message.innerHTML.substring(0,message.innerHTML.length-1) + text.charAt(i++) + "_";
   if(i == text.length){clearInterval(anim);}
  },1000/60);
 });
}

function render(src){
 document.getElementById("img").src = src;
}

[1,2,3,4,5,6,7,8,9,10,11,12].forEach(function(num){
	document.getElementById("day"+num).addEventListener("click",function(){
		display(messages[num-1]);
  render("images/" + num + ".jpg");
	});
});
