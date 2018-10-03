/* © Sergey Roganov aka belomir, 2018 */
/* © Сергей Роганов aka Беломир, 2018 */

(function(){
	window.addEventListener("load", function(){
		setTimeout(function(){
			console.log('\u042F\x20\u0441\u043A\u0430\u0436\u0443\x20\u0432\u0441\u0435\u043C\x2C\x20\u0434\u043E\x20\u0447\u0435\u0433\u043E\x20\u0434\u043E\u0432\u0451\u043B\x20\u043F\u043B\u0430\u043D\u0435\u0442\u0443\x20\u044D\u0442\u043E\u0442\x20\u0444\u0438\u0433\u043B\u044F\u0440\x20\u041F\u0416\x21\x20\u041F\u0430\u0446\u0430\u043A\u0438\x20\u0447\u0430\u0442\u043B\u0430\u043D\u0430\u043C\x20\u043D\u0430\x20\u0433\u043E\u043B\u043E\u0432\u0443\x20\u0441\u0435\u043B\u0438\x21\x20\u041A\u044E\x21');
		}, 5000);
		setTimeout(ce, 4000);
	});
	/* Любопытной варваре на базаре нос оторвали */
	function ce(){
		var b = document.querySelector("body");
		var s = window.getComputedStyle(b);
		var d = document.createElement("div");
		d.title = '\u0423\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\x2C\x20\u0447\u0442\u043E\x20\u0442\u044B\x20\u044D\u0442\u043E\x20\u0432\u043E\u043E\u0431\u0449\u0435\x20\u043D\u0430\u0448\u0451\u043B\x21';
		var style = {
			position: "absolute",
			overflow: "hidden",
			width: "1px",
			height: "1px",
			background: "black",
			margin: "0",
			padding: "0",
			transition: "all 5s",
			cursor: "pointer"
		};
		for(var i in style){
			d.style[i] = style[i];
		}
		d.style.opacity = 0;
		d.style.left = 1+Math.random()*(parseInt(s.width)-2)+"px";
		d.style.top = 1+Math.random()*(parseInt(s.height)-2)+"px";
		b.appendChild(d);
		setTimeout(function(){d.style.opacity = 1;}, 1000);
	}
})(this);
