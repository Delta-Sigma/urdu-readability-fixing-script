// ==UserScript==
// @name        Urdu Readability Fix
// @namespace   http://www.some-website.org/danyal-saeed-the-namespace/scripts/whats-a-namespace
// @description Tries to display Urdu in Nastaleeq script using Nastaleeq fonts.
// @author		Danyal Saeed
// @include     *
// @exclude		http://*.wikipedia.org/*
// @exclude		https://*.wikipedia.org/*
// @exclude		http://quran.com/*
// @exclude		https://quran.com/*
// @exclude		http://*.pakwheels.com/*
// @exclude		https://*.pakwheels.com/*
// @exclude   http://*.urdulibrary.org/*
// @version     1
// @grant       none
// ==/UserScript==


// == To Do in Future, If Possible ==
// Add the following
// @dowloadURL
// @icon
// @name:ur
//
// Use resource/require directives to auto-download Jameel Noori Nastaleeq
// ====================================


function add_css(css_string) {
    var head = document.getElementsByTagName('head')[0];
    if (!head) {
    	return;
    }
    var new_css = document.createElement('style');
    new_css.type = 'text/css';
    new_css.innerHTML = css_string;
    head.appendChild(new_css);
}

// var arabicPatt = /[\u0600-\u06ff]/;
// [].forEach.call(document.getElementsByTagName('p'), function(p) {
//   var lang, dir;
//   if (arabicPatt.test(p.textContent)) {
//     lang = 'ur'; dir = 'rtl';
//   }
//   else {
//     lang = 'en'; dir = 'ltr';
//   }
//   p.setAttribute('lang', lang);
//   p.setAttribute('dir', dir);
// });

add_css(' \
	:dir(rtl) { \
		font-size: 105%; \
		word-spacing: 110%; \
		line-height: normal !important;\
		text-shadow: 0px 0px 0.4px gray !important;\
		font-family: "Jameel Noori Nastaleeq", "Alvi Nastaleeq", "Fajer Noori Nastaleeq" !important;\
	} \
	');

// add_css(' \
// 	*[dir="rtl"], \
// 	[lang="ur"] \
// 	{ \
// 		font-size: initial !important;\
// 		line-height: normal !important;\
// 		font-size: 135% !important;\
// 		text-shadow: 0px 0px 0.4px gray !important;\
// 		font-family: "Jameel Noori Nastaleeq", "Alvi Nastaleeq", "Fajer Noori Nastaleeq" !important;\
// 	} \
// 	');
//add_css(' *[dir="rtl"] { line-height: 135%; font-size: 135%; font-family: "Jameel Noori Nastaleeq", "Alvi Nastaleeq", "Fajer Noori Nastaleeq" !important ;}');
//add_css(' *[lang="ur"] {line-height: normal !important; font-size: 135% !important; text-shadow: 0px 0px 0.4px gray !important; font-family: "Jameel Noori Nastaleeq", "Alvi Nastaleeq", "Fajer Noori Nastaleeq" !important ;}');
