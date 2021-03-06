/*!
 * git-watchers.js - a repository watchers button for GitHub
 * http://addyosmani.com/
 * 
 * Copyright (c) 2011 Addy Osmani
 * Based on gitfollow by Guillermo Rauch
 * Dual licensed under the MIT and GPL licenses.
 *
 */

(function (window, document) {

    window.gitwatch = {

        text: '% watchers',

        styles: [
            '.gitwatch { background: #fafafa; background-color: #fbfbfb; background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#fbfbfb), to(#cccccc)); background-image: -webkit-linear-gradient(#fbfbfb, #cccccc); background-image: -moz-linear-gradient(#fbfbfb, #cccccc); background-image: -ms-linear-gradient(#fbfbfb, #cccccc); background-image: -o-linear-gradient(#fbfbfb, #cccccc); background-image: linear-gradient(#fbfbfb, #cccccc); font: 11px "Lucida Grande", Verdana, sans-serif; outline: 0; -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); font-weight: bold; line-height: 1; cursor: pointer; position: relative; text-decoration: none; width: auto; border-bottom-color: rgba(0, 0, 0, 0.3); -webkit-border-radius: 15px; -moz-border-radius: 15px; border-radius:15px; padding: 4px 14px 6px; color: #4183C4; text-shadow: 0 1px 0 #fff; }',
            '.gitwatch:active { top: 1px; }',
            '.gitwatch:hover { background: #eee; text-decoration: none; }',
            '.gitwatch img { vertical-align: middle; padding-right: 5px; border: 0; }',
            '.gitwatch.vertical { padding: 10px 15px 8px; font-size:30px; letter-spacing:-2px; bottom:5px; }',
            '.gitwatch.small { padding: 2px 14px 4px; }'
        ],

        logo: 'data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%20%00%00%00%0F%08%06%00%00%00%85%80%CD%17%00%00%00%04sBIT%08%08%08%08%7C%08d%88%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%D2%DD~%FC%00%00%00%1CtEXtSoftware%00Adobe%20Fireworks%20CS4%06%B2%D3%A0%00%00%00%15tEXtCreation%20Time%0012%2F8%2F09%5E%88%A8%A3%00%00%048IDAT8%8D%BD%94%5DH%DBW%18%C6%7F%E7%FCc%3E%5C%14%17%B3%D8%A4Z%8Bq%A0%0E%D7X%E9%CA%3E%B2*tq%A3%DB%C5F%95%0E%0B%B6%17%A3%B0R%98%D0%0D3%D8%CD%3A%84%89%D8%CB%C9.%DC%06k%A1s%A30%9C%A3%A8utS%CAZ%91d%E9%8ARi%3B%1Bp%A1%BAL%B3%A6%89%F9%E7%DDEc)%B2%8E%5E%F5%B9%3B%BF%F7y%DF%F3%C0y9%F0p9%81%F3%C0%9B%FFQ%DB%02%9C%03%C2%FF%D3%BFY_%02_%3C%B2%BB%A2%A2%E2%00%20%5E%AF%F7%B7%CD%B5c%C7%8E5%01%D2%D4%D4%14%7D%D4y%1E%8Fg%B5%A2%A2bu3%D7%0Fk%18%1B%1B3zzz8y%F2%A4Y%40%1F%00%1D%00%E5%E5%E5Jk%8D%CB%E5*%7B%D4%00%0E%87%C3%EEt%3A%ED%9B%B9%E5%81%20%AF%01V%E0W%C0%D5%DF%DF%7F%A9%BD%BD%7D%A8%B4%B4%F4%1C%D0%02%7CZRR%F2%E7%DA%DA%DA%AD%A5%A5%A5%9C%C5b!%9B%CD*%E0%25%C0%06L%14f%B5%00Y%60%1A%F0%00%BB%81K6%9BML%D3%04%D8U%E0%E3%40%06%A0L)%F5%23%20%80(%A5RZ%EBtMMM7%20n%B7%BB%CF%E7%F3%FD%B2Q%B7Z%AD%B7%3B%3A%3A%DE%F0%F9%7Cy%A5%94lp%60%10%B0%19%86q%C7%E1p%C4%01%1A%1A%1A%0E%02R%5B%5B%FB%EE%9E%3D%7B%D6%B4%D6%F7%FD%86a%9C%07J%B4%CDf%FBJD%5E%1D%1E%1Efnn%0E%E0%89P(T%D4%D7%D7W%0C%10%0C%06w%8F%8F%8F%FFc%B5Z%09%06%83%CC%CF%CF%9B%AD%AD%AD%92L%26%A9%AD%ADedd%84%B6%B66%80%23.%97%EB%E5m%DB%B6%D9jjj%DC%00%A1P%C8%0F%B0w%EF%DE%FAT*%95u%3A%9D%0C%0F%0Fs%FC%F8qL%D3l-**%FAN777%EF%02%B8x%F1b%EF%F8%F8%F8%8B%00%1E%8F%E7%8FT*%F5%13%80R%CA%A8%AF%AF%7FGk%0D%B0R%5D%5D%DD%BC%BC%BC%9CH%A7%D3*%10%08%AC%EE%DB%B7%EF%F5C%87%0E%5D%06hnnn%B3X%2C9%20%07%90%CDfs%00%A6i%9A%D9l%D6%F0z%BD%F9%FD%FB%F7%B7wuu%0Dj%ADY__%7FE%9F9s%26%DA%D6%D6%C6%C0%C0%40%F8%E8%D1%A3S%5B%B7n%A5%BB%BB%7Blbb%22S%08%80Rj%C94MDd%5D)u%2B%9F%CFg%00%12%89%C4%8AR%EA%87%0B%17.%9C%05%A8%AA%AA%F2%88%88d2%19%05%E0v%BB%EF%3C%B0o%3A%97%CB%E5%94R%DF%9E8q%E2%9B%7C%3E%7F%0FVVV%1E%DC%BE%7D%FB%82%88%A8%A1%A1!%E6%E6%E6%E2%81%40%E0%13%8B%C5R%5EH%AF%26\'\'%B5%D5je~~%BE%14%E8%9C%9A%9Az%CAb%B1%20%22%06%40%3E%9F%B7%00%14%17%17%A7%FD~%7F%F6%DA%B5k%0E%E0%FD%C1%C1%C1%B7%00%B4%D6%D8%EDv%B9q%E3%86%15%F8htt%B4%1F%A0%B7%B7%17%AD%94%BA%9DL%26%E3%00%A7N%9D%1A%A9%AB%AB%7B%5B)%B5%E8%F3%F9%ACZkr%B9%5CQKKK%B6%B3%B33%97H%24%1C%C0%D7Z%EB%1DN%A7%13%A5%94%06%B8%7B%F7%AE%5D)%C5%CA%CA%0A%3D%3D%3D%97%5D.%17%40_%3A%9D~%CE0%0C2%99%8C6%0C%C3%B4%D9l%00%1F%A7R%A9%9D%DD%DD%DD%84%C3%E1%0F%01%5E%F0%FB%FD%D7%BD%5E%AF%B8%5C%AEdaK%CF%C6b%B1%1D%91H%C4%8C%C5b%9F%03%88%C8g%D3%D3%D32%3B%3B%2B%F1x%FC%40%24%12%F9%3B%16%8B%8D%02%C4b%B1%AE%99%99%99%FC%CC%CC%CC%7B%22%12%88%C7%E3%7F%CD%CE%CE%CA%EA%EA%EAr4%1A5%A3%D1%E8%91H%24%F2%F3%CD%9B7%EF%2C..%CA%95%2BWDD%066%DEF%00%B9z%F5jBD%AE%1F%3E%7CX%00ill%AC%13%91gE%C4w%DF(%F2%BC%88%04D%C4!%22%CF%88Hu%81%97%89%C8N%11%F1%14%CE%5B%0A%3E%A7%884%8A%88KD%FC%22R%25%22%95%22%D2p%7F3%C2%E1%B0%94%95%95%89%DDn%FF%1D%F8%DE%E1pdB%A1%90%2C%2C%2C%3C%CD%E3%90%88%F4%9E%3E%7D%3A%B5%F1I%04%83%C1%F5%A5%A5%A5%F3%22R%F4X%02%14B%B4%8B%88)%F74)%22O%3E%AE%BB%FF%05%F5a%F7%07%0C%EA%3Aj%00%00%00%00IEND%AEB%60%82',

        className: 'gitwatch',

        injectScript: function ( src ) {
            var script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        },

        applyCss: function (css) {
            var style = document.createElement('style');
            style.type = 'text/css';

            try {
                style.appendChild(document.createTextNode(css));
            } catch (e) {
                if (style.styleSheet) {
                    style.styleSheet.cssText = css;
                }
            }

            document.body.appendChild(style);
        },


        getByClass: function () {
            if (document.getElementsByClassName) {
                return document.getElementsByClassName('gitwatch');
            } else {
                var links = document.getElementsByTagName('a'),
                    found = [];
                for (var i = 0, l = links.length; i < l; i++) {
                    if ((' ' + this + ' ').indexOf(' ' + links[i].className + ' ') > -1) {
                        found.push(links[i]);
                    }
                }
                return found;
            }
        },

        run: function () {
            this.elements = this.getByClass(this.className);
            if (this.elements && this.elements.length === 0) {
                //if (window.console) console.log('No elements found to use with gitwatch.');
                return false;
            }
            var match = this.elements[0].href.match(/com\/([^\s\/]+)\/([^\s\/]+)/);
            if (!match || !match[1]) {
                //if (window.console) console.log('Bad GitHub URL ' + this.elements[0].href);
                return false;
            }

            this.username = match[1];
            this.reponame = match[2];

            this.injectScript('https://api.github.com/repos/' + encodeURIComponent(this.username) + '/' + encodeURIComponent(this.reponame) + '?callback=' + encodeURIComponent('gitwatch.callback'));
        },

        callback: function ( object ) {
            if (object && object.data) {
                this.apply(object.data.watchers);
            }
        },

        apply: function ( count ) {
            this.applyCss(this.styles.join(''));
            var img = '<img src="' + this.logo + '" /> ',
                text = "", currentEl, currentClass;

            for (var i = 0, l = this.elements.length; i < l; i++) {
                currentEl = this.elements[i];
                currentClass = currentEl.className;

                if (currentClass.indexOf('small') > 0 || currentClass.indexOf('vertical') > 0) {
                    text = img + count;
                } else {
                    text = img + this.text.replace(/%/, count);
                }
                currentEl.innerHTML = text;
            }
        }

    };

    var run = function () {
        window.gitwatch.run();
    };

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', run , false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', run);
    }

})( window, document );
