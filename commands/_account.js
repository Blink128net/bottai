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
let deposit = Libs.ResourcesLib.userRes("deposit");
let baseValue = deposit.baseValue();
let delta = deposit.value()
money.add(delta);
let reinvest = Libs.ResourcesLib.userRes("reinvest");
Bot.sendMessage(
      "👤 Account  @" + user.username +
      "/`" + user.telegramid + 
      "`\n\n*Your Balance Is:*" +
      "\n\n👝 DOGE Balance: " + money.value().toFixed(4) + " DOGE" +
      "\n- Every Day Added 50% To Doge Balance" +
      "\nIterations📈: " + deposit.growth.info().completed_iterations_count +
      "\nProgress: " + deposit.growth.progress().toFixed(2) + "%" + 
      "\n-------" +
      "\n\n♻️Doge Reinvest Balance: " + reinvest.value() + "\nProcess: " + reinvest.growth.progress().toFixed(2) + "%" +
      "\n\n`/tip " + user.telegramid + " 100 `\n To Tip Your Friend" + 
      
      "\nTransfering in chat: @DogeIncreasesGroub"
);
Bot.run( {
    command: "/tobank",
    run_after: 1*60.1*60*24,  // add bonus after 1 day
} )

