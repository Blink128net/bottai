/*CMD
  command: /setsend
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hehe
  keyboard: 
  aliases: 
CMD*/

if(message.length==9){
      User.setProperty("sendd", data.message, "string");
      Bot.sendMessage("✅ Your Doge wallet address updated successfully. Your current wallet address is:"+
                      "\n*<sendd>*");
   }else{
      Bot.sendMessage(" Your Doge Wallet Address Looks Wrong. Please Verify The Address Is Correct And Try Again.");
   }

