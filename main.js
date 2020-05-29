






function onload_events(){




	let list = ["red","purple","blue","cyan","deep-purple",
	"teal","green","light-green","amber","red","blue"
	];

	let color = list[randint(0,list.length-1)];
	$("#M17").attr("class",`w3-text-${color}`);
}





function projects(){

	let html = `
	<span class="close w3-display-topright text-light" onclick="home()">
	<i class="fa fa-times"></i>
	</span>
	<div class="text-center">
	<br><hr>
	<span class="display-2 lead cuprum w3-text-amber">PROJECTS</span>
	<hr><br><br>

	<h1 class="w3-text-teal open-sans">Lifely</h1><br>
	<h1 class="w3-text-indigo open-sans">Quizely</h1><br>
	<h1 class="w3-text-cyan open-sans">Cricket</h1><br><br>
	<h3 class="text-light informal">And more...</h3><br>

	</div>
	`;
	$("#main").html(html);




}



function home(){

	let html = `

<div id="particles-js" class="home">

<div id="main-content" class="text-center w3-display-middle">
<span class="display-3 text-light informal">
<span class="glow-less">wraith</span><span id="M17">M17</span>
</span><br><br><br><br>

<button onclick="projects()" class="w3-btn w3-border 
w3-border-red w3-text-white w3-large 
w3-hover-red open-sans">PROJECTS</button><br><br><br>

<a href="https://wraithm17.github.io/Quizely" 
target="_blank" 
class="w3-btn w3-border w3-border-blue w3-text-white w3-large 
w3-hover-blue open-sans">&nbsp;QUIZELY&nbsp;</a>

</div>

</div>



	`




	$("#main").html(html);
	onload_events();
}


function main(){
	home();
	onload_events();




}


$(document).ready(main());