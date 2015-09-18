// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function notify(apiResponse){

   alert("done");

}



function getData(data) {
    alert("Data reception Success");

    chrome.tabs.getSelected(null,function(tab){
    	tablink = tab.url;

    	//API OPERATIONS 
        var message = "----- data to Send to the API ----- \n  title : "+data.title+" \n By : "+data.by+ "\n ASIN : "+data.ASIN+"\n weight : "+data.weight+"\n dimensions : "+data.dim+"\n number :"+data.num+" \n URL : "+data.url ; 
        try{
        alert(message);
        }
        catch(err){
            alert(err);
        }
    	var apiResponse = ["DHL Express, 5 business days, $9.99 ,5*","UPS Single, 6 days, $30.00, 2*"];
    	//API OPERATIONS 
        
    	 try{
    chrome.tabs.sendMessage(tab.id, { text: "notify" ,resp : apiResponse },
                                notify); } 

    catch(e) { alert(e);}
});
}




chrome.tabs.onUpdated.addListener(function(tabId, info) {
var tablink;
var cont;
if ( info.status == "complete")
{
	chrome.tabs.getSelected(null,function(tab)
    {
    	tablink = tab.url;

    
    	if (tablink.match(/www.amazon.co.uk/g)) 
        {
    	
    	chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                getData);



    	}
    });
}
  

});




