/*CMD
  command: /claim
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: If You Want Take Doge From Bank, Time Of The Profit Will Be Repeated, If You Want To Continue Type "yes"
  keyboard: 
  aliases: 📥 take doge from bank
CMD*/

if(data.message=="yes"){
 Bot.runCommand("/inbank")}
