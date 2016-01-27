(function(){
	
	//pdfで出力する場合 "?print-pdf" をurlの後ろに付ける
	
	var loadJs = function(callback){
		var js_list = [
			'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/lib/js/head.min.js',
			'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/js/reveal.js',
		]
		var elems = [];
		var loaded_cnt = 0;
		for(var i in js_list){
			elems[i]        = document.createElement("script");
			elems[i].src    = js_list[i];
			elems[i].type   = "text/javascript";
			elems[i].onload = (i < js_list.length-1) ? function(){
				loaded_cnt++;
				document.head.appendChild(elems[loaded_cnt]);
			} : callback ;
		}
		document.head.appendChild(elems[0]);
	};
	
	var loadCss = (function(){
		var css_list = [
			'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/css/reveal.css',
			'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/css/theme/default.css',
			'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/lib/css/zenburn.css',
		];
		for(var i in css_list){
			var link  = document.createElement('link');
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = css_list[i];
			document.head.appendChild(link);
		}
		if( window.location.search.match(/print-pdf/gi) ){
			var link = document.createElement('link');
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/css/print/pdf.css';
			document.head.appendChild(link);
		}
	})();
	
	var setExtendStyle = function(o){
		var style = document.createElement('style');
		style.innerHTML = '\
			body{\
				background:' + o.body_color + ';\
			}\
			.reveal section > *{\
				color:#000;\
				text-shadow:0 0 0 #000;\
			}\
			.reveal section{\
				width:' + o.width + ';\
				height:' + o.height + ';\
				position:relative;\
			}\
			.slides:before{\
				content:"";\
				display:block;\
				position:absolute;\
				width:100%;\
				height:100%;\
				background-color:' + o.bg_color + ';\
				background-image:url(' + o.bg_image + ');\
				background-position:center center;\
				background-repeat:' + o.bg_repeat + ';\
				background-size:contain;     /* auto,contain,cover,0px,0% */\
				top:-50%;\
				left:-50%;\
			}\
		';
		document.head.appendChild(style)
	}
	
	var extend_style = {
		body_color:"rgba(0,0,0,0)",
		base_color:"rgba(0,0,0,0)",
		bg_color  :"rgba(0,0,0,0)",
		bg_image  :"", // "https://s3.amazonaws.com/media-p.slid.es/uploads/takaakiwatanabe/images/521412/github-octocat.png",
		bg_repeat :"no-repeat",
	};
	
	if(window.bg_style){
		for(var i in bg_style) extend_style[i] = bg_style[i];
	}
	
	var init_config = {
		controls: true,
		progress: true,
		history: true,
		center: true,
		rollingLinks: false,
		transitionSpeed: 'default', // default/fast/slow
		viewDistance: 3,
		transition:"none", // default/cube/page/concave/zoom/linear/fade/none
		dependencies: [
			{ src: 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: 'http://cdn.rawgit.com/hakimel/reveal.js/2.6.2/plugin/notes/notes.js' }
		]
	}
	
	window.onload = function(){
		var init = function(){
			setExtendStyle(extend_style);
			Reveal.initialize(init_config)
		};
		loadJs(init);
	}
})()