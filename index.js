//immporting library is being populated with the marked method that is responsible 
//for converting the markup to html
var marked = require('marked')
//console.log(marked)
//variable mustache is immport of library that will allow a variable to be populated with data properties, templating engine, go to npm.org and github and look at it.
var mustache = require('mustache')
//console.log(mustache)
var fs = require('fs')
//console.log(fs)
var data = {
	greeting: process.argv[2] || "Hello" //process command line value or just run Hello using hte trulian evaluator ||
	//"Hey" //property we want to pass to usage of mustache templating function
}

var template = "{{greeting}}, Testing this **markdown** to convert to html."//template we are passing to data variable, uses markup language, and property from data
var markdown = mustache.render(template, data)//populating markdown with with the retemplated data from previous templates.

//console.log(markdown)
var html = marked(markdown)//populated html variable with conversion of markdown variable which should convert data from markdown to html

console.log(html)
var file = "index.html"//must be a string maybe console.log(file) after declaring

fs.writeFileSync(file,html) //important to include create the file from the file variable provided, and populate it with html variable that was created above from the mustache template, parsed through the markdown module which created the html formatted version of data
console.log( file +"File Created!")