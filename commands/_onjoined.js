/*CMD
  command: /onjoined
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
   Bot.runCommand("/keyboard");
}else{
   Bot.sendMessage("You are NOT chanell member! Please Join @DogeIncreaseschannel");
}
