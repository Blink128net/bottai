/*CMD
  command: /wdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💵 withdraw
CMD*/

let address = User.getProperty("addressDoge");

if (address==undefined){
Bot.sendMessage("Error To Be Able to Withdraw Set You're Address, Please Set Your Wallet /setwallet ");
}else{if  (address==address){
Bot.sendMessage("Please Check Again Your Address Is:\n*" + address + "*\nIf Correct Type /withdraw YourAddress Ammount");}}
