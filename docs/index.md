Wiki in Markdown
=================

Hello, this is a wiki which can be written as plain markdown files. Checkout the project at [github](https://github.com/jackysee/markdown-wiki).

## Open the wiki

The wiki can either be started with or without server. 

Locally just open the `index.html` in browser. Or you can use the run `grunt` at command line. See more on [server](#server).

Therefore it's easy to host your wiki. e.g. just put these files in an public dropbox folder and get that link.

## Wiki Link

The wiki link is simply a link hash value. e.g.

	[link text](#otherPage)

This link will load the corresponding `docs\otherPage.md` page. The markdown file name should contains letter and hypen only.

To create a new wiki page, create the corresponding `.md` doc in `docs\` folder and link it through `#filename`.

Click on this [other page](#otherpage) for example.

## Github Flavor

The markdown parse we used is `Marked`. It supports github flavoured markdown. e.g. you can do code block with fenced block:

	```javascript
	function hi(){
		return "Hello!";
	}
	```
It would look like

```javascript
function hi(){
	return "Hello!";
}
```

## Live-reload

The default `grunt` task would also kick start live-reload. So you can create and edit markdown files in your editor and watch the browser reload per save.

## Edit page and style

Just edit `index.html` for additional elements like headers/footers. The style for markdown is in `markdown.css` and all the rules are contexted under `.markdown` class. The code block color is at `highlight.min.css`. Edit the page style in `app.css`.

To keep thing simple there is no css concat minify job defined in grunt so that no build step is needed for hosting files.

TO keep

## Library used

- [requirejs](http://requirejs.org)
- [Marked](https://github.com/chjj/marked)
- [highlightjs](https://github.com/isagalaev/highlight.js)

