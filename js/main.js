// обработчиков событий
var li = document.getElementsByTagName("li");

for ( var i = 0; i < li.length; i++ ) {
	li[i].onmouseover = function() {
		this.style.backgroundColor = 'blue';
	};

	li[i].onmouseout = function() {
		this.style.backgroundColor = 'white';
	};
}
