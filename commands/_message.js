/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📞 You are now in direct contact with our Administrator
Send here any message you want to submit, you will receive the answer directly here in chat!
  ANSWER
  keyboard: 
  aliases: 🗣 support
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}



msg = "Message from: " + user.username +
     "\n" +
      message +
     "\n/reply" + user.telegramid;

Bot.sendMessageToChatWithId(admin_chat, msg);

Bot.sendMessage("Message was sended to admin");
