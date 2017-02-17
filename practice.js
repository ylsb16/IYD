var n = 100 
var song = '<ul class=lyrics>'

while (n >=0) {
	if (n !==0){
		song=song + '<li>' +n+ "bottles" + (n===1? '':'s')
		+ 'of beer on the wall! chug, chug, chug</li>'
	}else {
		song+="<li>no bottle of beer! Stumble, stumble, stumble...<li>"
	}
	n--
}
song +="</ul>"
document.querySelector('#lyrics').innerHTML = song


alert(Math.random(0,9))