/*CMD
  command: /inbank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");
let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");

amount = bank_deposit.value();

if( bank_deposit.exchangeTo(res, { remove_amount: amount, add_amount: amount  }) ){
     //bank_deposit.growth.addCompoundInterest({percent: 0.005, interval: secs_in_5minutes });
     Bot.sendMessage("Get Doge from bank deposit: " + amount );
}
