define(['marked', 'highlight.pack'], function(marked, highlight){

	marked.setOptions({
		highlight: function(lang, code){
			console.log('highlighting', lang, code);
			console.log('result', highlight.highlightAuto(lang, code).value);
			return highlight.highlightAuto(lang, code).value;
		}
	});

	return {
		load: function(el, page){
			require(['text!../docs/'+page+'.md'], function(doc){
				el.innerHTML = marked(doc);
			});
		}
	};

});