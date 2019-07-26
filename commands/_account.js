/*CMD
  command: /account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👤 account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");

Bot.sendMessage(
      "👤 Account  @" + user.username +
      "/`" + user.telegramid + 
      "`\n\n*Your Balance Is:*" +
      "\n👝 DOGE Wallet: " + money.value().toFixed(4) + " DOGE" +
      "\n🏧 Bank Wallet: " + bank_deposit.value().toFixed(4) + " DOGE" +
      "\n\nEvery Day ⏳:" +
      "\n- Added 50% To Bank Wallet" +
      
      "\n\nIterations📈: " + money.growth.info().completed_iterations_count +
      "\nProgress: " + money.growth.progress().toFixed(2) + "%" +
      "\nNext in: " + money.growth.willCompletedAfter().toFixed(1) + " secs" + 
      "\n-------" +
      "\n\n*For a tip someone enters a: \n/tip UserId Amount  As Below* " +
      "\n\n`/tip " + user.telegramid + " 100 `" + 
      
      "\n\nTransfering in chat: @DogeIncreasesGroub"
);
