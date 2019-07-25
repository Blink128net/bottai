/*CMD
  command: /getbalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Wes tak tambah balancemu
  keyboard: 
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money"); 
money.set(1000);

Libs.ResourcesLib.userRes("wood").set(10);
Libs.ResourcesLib.chatRes("crystals").set(10);

Libs.ResourcesLib.userRes("bank_deposit").set(10);

Bot.runCommand("/balance");
