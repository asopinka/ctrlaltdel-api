var bluebird = require('bluebird');
var request = require('request');
var cheerio = require('cheerio');

exports.getComic = function(date) {
	return new Promise(function(resolve, reject) {
		request('http://www.cad-comic.com/cad/' + date, function(err, httpRsp, body) {
			if (err) {
				reject({ error: 'Comic Not Found' });
			}
			else {
				var $ = cheerio.load(body);
				var img = $('div#content').find('img');

				if (img.length == 0) {
					reject({ error: 'Comic Not Found' });
				}
				else {
					var comic = {
						title: img.attr('title'),
						image_src: img.attr('src'),
						web_link: 'http://www.cad-comic.com/cad/' + date
					};
					resolve(comic);
				}
			}
		});
	});
};