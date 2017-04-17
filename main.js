const messages = [
	"We flew into Havana, Cuba.",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	""
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

[1,2,3,4,5,6,7,8,9,10,11,12].forEach(function(num){
	document.getElementById("day"+num).addEventListener("click",function(){
		display(messages[num-1]);
	});
});
