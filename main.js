






function onload_events(){
	let list = ["red","purple","blue","cyan","deep-purple",
	"teal","green","light-green","amber","red","blue"
	];

	let color = list[randint(0,list.length-1)];
	$("#M17").attr("class",`w3-text-${color}`);
}




function main(){

	onload_events()


}


$(document).ready(main());