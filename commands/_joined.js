/*CMD
  command: /joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ✅joined
CMD*/

let id = user.telegramid;
Api.getChatMember({
chat_id:"@DogeIncreaseschannel", user_id: id, on_result :"/onjoined"})
//Bot.sendMessage(inspect(options));
