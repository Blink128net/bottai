/*CMD
  command: /onmyaddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = options;

Bot.sendMessage(
    "*Minimum Deposit 200 Doge \nThis Is Your Deposit Address* : \n`" + 
    wallet.address + "`"
);
