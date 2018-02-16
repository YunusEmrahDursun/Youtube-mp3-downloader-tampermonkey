// ==UserScript==
// @name         Youtube mp3 downloader
// @namespace    https://github.com/DeliDoktoru/Youtube-mp3-dowloander
// @version      0.1
// @description  Youtube mp3 downloader
// @author       DeliDoktoru
// @match        *://www.youtube.com/*
// @match        *://www.onlinevideoconverter.com/*
// @grant        window.close
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';


   if(window.location.href.indexOf("https://www.onlinevideoconverter.com/tr/success")!== -1)
{
    if(document.querySelector("#downloadq")!==null)
    {  GM_setValue("dl",document.querySelector("#downloadq").href);

      GM_setValue("status",true);
     window.open(GM_getValue("youtubeurl"),'_self');



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
    input.style.cssText = 'left:50%;position: absolute;width:100px;height:25px;z-index:99999999999';
    input.onclick=function(){ window.open("https://www.onlinevideoconverter.com/tr/mp3-converter", '_self');};
    input.value="download";

     document.body.appendChild(input);
   if(GM_getValue("status"))
   {
       window.open(GM_getValue("dl"), '_self');
        GM_setValue("status",false);
   }

}




})();
