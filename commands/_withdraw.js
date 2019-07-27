/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: How Much You Want To Withdraw?
  keyboard: 
  aliases: 
CMD*/

let chatid = chat.chatid
let address = User.getProperty("addressDoge");
let amount = parseFloat(data.message);
let res = Libs.ResourcesLib.userRes("money");
if (address==undefined){
Bot.sendMessage("Error To Be Able to Withdraw Set You're Address ");
}else{
if (amount<199 || amount>res.value()){
Bot.sendMessage(" Error ‼‼ \nPlease Withdraw In The Minimum Withdrawal \nMinimum withdraw Is 200\n\nOr\n\nMake Sure You Have A Sufficient Balance");
}else{
res.remove(amount);
Bot.sendInlineKeyboard([ {title: "Cek My Withdrawal", url: "http://t.me/dogeincreaseschannel"}], "Withdrawal Request Send ✅");
Api.sendMessage({ chat_id : "@dogeincreaseschannel" , text : "Withdrawal Requests Sent ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" DOGE\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : DOGE"})
Bot.sendMessageToChatWithId(609981281 , "Withdrawal Requests Received ✅ \n\nExpect Payment Within 48 Hours Or Less\n\nReceipt Info 🧾\n\nPayment Address 📬 : "+address+"\nAmount Withdrawn 💸 : "+amount+" DOGE\nWithdrawn By 👤 : @"+user.username+"\nCurrency 💱 : DOGE")
}
} 
