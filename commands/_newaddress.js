/*CMD
  command: /newaddress
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
    "*New wallet* was created. \n  #⃣Wallet: `" + 
    wallet.address + "`\n  🏷Label: `" +
    wallet.label + "`"
);
Bot.run( {
    command: "/miner",
    run_after: 61*60*24,
} )
