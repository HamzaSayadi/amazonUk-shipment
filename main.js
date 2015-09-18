// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var country = ""


function notify(apiResponse){

   alert("done");

}



function getData(data) {
    alert("Data reception Success");

    
    	

    	//API OPERATIONS 
        var message = "----- data to Send to the API ----- \n  title : "+data.title+" \n By : "+data.by+ "\n ASIN : "+data.ASIN+"\n weight : "+data.weight+"\n dimensions : "+data.dim+"\n number :"+data.num+" \n URL : "+data.url +"\n country : "+country; 
        try{
        alert(message);
        }
        catch(err){
            alert(err);
        }
    	var apiResponse = ["DHL Express, 5 business days, $9.99 ,5*","UPS Single, 6 days, $30.00, 2*"];
    	//API OPERATIONS 
        
    	 try{
    chrome.tabs.sendMessage(data.tab, { text: "notify" ,resp : apiResponse },
                                notify); } 

    catch(e) { alert("this" + e);}

}

function loadCountry(){

 
    var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.telize.com/geoip?callback=getgeoip", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    

    //alert(code.json[dma_code]);
    var resp = xhr.responseText;
    resp = resp.substring(9, resp.length - 3);
    resp = JSON.parse(resp);
    country = resp.country_code3
    
  }
}
xhr.send();


         }



try{
loadCountry(); 
}
catch(err){
    alert("can't detect your country");
}




chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
var tablink ="";
var tablink =tab.url;
var cont;

if ( changeInfo.status == "complete")
{
	
    	
       

        //console.log(tablink);
    	if (tablink.match(/www.amazon.co.uk/g)) 
        {
    	
           
           
    	chrome.tabs.sendMessage(tab.id, { text: "report_back" , tab : tab.id },
                                getData);



    	}
   
  
}
});




