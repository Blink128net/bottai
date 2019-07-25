/*CMD
  command: /withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  let address = User.getProperty("addressDoge");
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("Wrong Command, Please Check Again");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("money");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("money", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Succes Withdraw To Your Wallet : " + amount)
       }
Api.sendMessage({ chat_id : "@dogetrdpayment" , text : "Withdrawal Requests Sent ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" DOGE\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : DOGE"})

Bot.sendMessageToChatWithId("758972534", "Withdrawal Requests Sent ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" DOGE\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : DOGE")
     }else{
        Bot.sendMessage("Your balance is not enough: " + amount)
     }
  }
}else{
  Bot.sendMessage("No params. Need another user TelegramID and AMOUNT")
}
