require.config({baseUrl:'scripts'});

define(['docloader'], function(docLoader){

	function loadDoc(){
		var doc = window.location.hash.replace(/^#/, '');
		var el = document.getElementById('doc');
		doc = doc || "index";
		docLoader.load(el, doc);
	}
	loadDoc();

	window.onhashchange = loadDoc;

	return {};
});
