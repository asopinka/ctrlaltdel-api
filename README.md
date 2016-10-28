# Ctrl+Alt+Del Api
An api to get a Ctrl+Alt+Del comic for a given date.
All rights reserved: http://www.cad-comic.com/

## Install

`npm install ctrlaltdel-api --save`

## Usage

To get a comic, pass in the date in the following format: **YYYYMMDD** 
(where YYYY = 4-digit year, MM = 2 digit month, DD = 2 digit day)

An example:

```
var cadApi = require('ctrlaltdel-api');

cadApi.getComic('20161010').then(function(comic) {
	// success!
	console.log(comic);
})
.catch(function(err) {
	// an error
	console.log(err);
});
```

Here is the result you'll get:

```
{
	title: 'The Starcaster Chronicles 05.01',
	image_src: 'http://cdn2.cad-comic.com/comics/cad-20161010-f705d.png',
	web_link: 'http://www.cad-comic.com/cad/20161010'
}
```

### License

This API is licensed under the [MIT](http://choosealicense.com/licenses/mit/) license.