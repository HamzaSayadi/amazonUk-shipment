chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
       



    //INIT      
          var dimensions = "null";
          var itemNum = "null";
          var boxWeight = "null";
          var details; 
    //Scrap details from amazon website 
    if(document.getElementById('detail_bullets_id')) {
           details = document.getElementById('detail_bullets_id') ; 
           details =  details.getElementsByTagName('ul')[0];
           try  {
          details = details.getElementsByTagName('li');
          for (var i = 0; i < details.length; i++) {
          	
          	if ( details[i].getElementsByTagName('b')[0].innerHTML.match(/Product Dimensions/g))
          	{
          		
          		var pos = details[i].innerHTML.search("</b>");
          		dimensions =  details[i].innerHTML.substring(pos+4,details[i].innerHTML.length);
          	}
          	if ( details[i].getElementsByTagName('b')[0].innerHTML.match(/Item model number/g))
          	{
          		
          		pos = details[i].innerHTML.search("</b>");
          		itemNum =  details[i].innerHTML.substring(pos+4,details[i].innerHTML.length);
          	}
          	if ( details[i].getElementsByTagName('b')[0].innerHTML.match(/Boxed-product Weight/g))
          	{
          		
          		pos = details[i].innerHTML.search("</b>");
          		boxWeight =  details[i].innerHTML.substring(pos+4,details[i].innerHTML.length);
          	}
          
          };
      }
      catch(err){
      	details = err ; 
      }
     
    }
    else if((document.getElementById('prodDetails')))
    {

    	details = document.getElementById('prodDetails') ;
    	details = details.getElementsByTagName('table');
    	det = details[0].getElementsByTagName('td');
    	for ( var j = 0 ; j< det.length ;j++)
    	{
    	console.log(det[j].innerHTML+"   ");
    	if (det[j].innerHTML == "Model Number"){
	    	{
	    	itemNum = det[j+1].innerHTML; 	
	    	}
    	}
    	if (det[j].innerHTML == "Item Weight"){
	    	{
	    	boxWeight = det[j+1].innerHTML; 	
	    	}
    	}
    	if (det[j].innerHTML == "Product Dimensions"){
	    	{
	    	dimensions = det[j+1].innerHTML; 	
	    	}
    	}
    }
    }  
        //construct object to send 
      var prod = {title:document.getElementById('productTitle').innerHTML, by:document.getElementById('brand').innerHTML, 
      ASIN:document.getElementById('ASIN').value, dim:dimensions , num:itemNum , weight:boxWeight ,url : document.URL, tab : msg.tab};
   
        sendResponse(prod);
    }




 

});

