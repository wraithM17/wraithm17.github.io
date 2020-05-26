
function randint(min,max){
	let int = Math.floor(Math.random()*(max-min+1))+min;
	return int;

};




function shuffle(array) {
   	for (let i = array.length - 1; i > 0; i--) {
      	const j = Math.floor(Math.random() * (i + 1));
      	[array[i], array[j]] = [array[j], array[i]];
   	}
};



function clearSelection() {
    if(document.selection && document.selection.empty) {
        document.selection.empty();
    } else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    }
}