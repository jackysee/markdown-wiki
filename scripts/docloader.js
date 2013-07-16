define(['markdown'], function(markdown){

	return {
		load: function(el, page){
			require(['text!../docs/'+page+'.md'], function(doc){
				el.innerHTML = markdown.makeHtml(doc);
			});
		}
	};

});