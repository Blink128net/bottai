/*CMD
  command: /setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Just Type Your Wallet Here
  keyboard: 
  aliases: 
CMD*/

if(message.length==34){
      User.setProperty("addressDoge", data.message, "string");
      Bot.sendMessage("✅ Your Doge wallet address updated successfully. Your current wallet address is:"+
                      "\n*<addressDoge>*");
   }else{
      Bot.sendMessage(" Your Doge Wallet Address Looks Wrong. Please Verify The Address Is Correct And Try Again.");
   }
