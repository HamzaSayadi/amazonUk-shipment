 
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
       if (msg.text && (msg.text == "notify")) {
    	alert("NOTIfYING ! ");
   try{
      document.getElementById('buybox_feature_div').innerHTML = "<div class='a-box  a-spacing-medium' ><div  class='a-box-inner'><div class='a-section a-spacing-medium a-text-center'> <span class='a-color-price a-text-bold' align='center' >Shipment Options </span><br>"+msg.resp[0]+ "<hr class='a-spacing-base a-divider-normal'>" + msg.resp[1]+" </div></div></div>" +document.getElementById('buybox_feature_div').innerHTML ; 
  }
catch(err)
{
	alert(err);

}
}
});