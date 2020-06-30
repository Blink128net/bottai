/*CMD
  command: /debug
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Ok
  keyboard: 
  aliases: 
CMD*/

let apikey = Libs.BlockIO.setSecretPin("52084242");

let coin= Libs.BlockIO.Dogecoin.setApiKey("20a2-2031-8bc0-7fbf");
Bot.sendMessage("Api Key for " + coin + " was stored");
