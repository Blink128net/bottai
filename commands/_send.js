/*CMD
  command: /send
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let sendd = User.getProperty("sendd");

if (sendd==undefined){
Bot.sendMessage("Error To Be Able to Withdraw Set You're Address, Please Set Your Wallet");
}else{if  (sendd==sendd){
Bot.sendMessage("Please Check Again Your Address Is\n`" + sendd + "`" );}}
