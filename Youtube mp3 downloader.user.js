// ==UserScript==
// @name         Youtube mp3 downloader
// @namespace    https://github.com/DeliDoktoru/Youtube-mp3-dowloander
// @version      0.1
// @description  Youtube mp3 downloader
// @author       DeliDoktoru
// @match        
// @grant        window.close
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';

   if(window.location.href.indexOf("https://www.onlinevideoconverter.com/tr/success")!== -1)
{
    if(document.querySelector("#downloadq")!==null)
    {window.close();
	window.open(document.querySelector("#downloadq").href, '_blank');
    }

}
   else if(window.location.href.indexOf("https://www.onlinevideoconverter.com/tr/mp3-converter")!==-1)
{

document.querySelector("#texturl").value=GM_getValue("youtubeurl");
    document.querySelector("#convert1").click();
}
else if(window.location.href.indexOf("https://www.youtube.com/watch")!==-1 )
{
    var input = document.createElement('input');
    input.type="button";
    GM_setValue("youtubeurl",window.location.href);
    input.style.cssText = 'width:100px;height:25px;';
    input.onclick=function(){ window.open("https://www.onlinevideoconverter.com/tr/mp3-converter", '_blank');};
    input.value="download";
    document.querySelector("#yt-masthead").appendChild(input);

}




})();