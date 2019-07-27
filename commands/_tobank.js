/*CMD
  command: /tobank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request){
  Bot.sendMessage("Balance Update After 1 Day")
  return
}
let money = Libs.ResourcesLib.userRes("money");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
amount = reinvest.value();

reinvest.exchangeTo(money, { remove_amount: amount, add_amount:amount } )
Bot.sendMessage("Success Tranferred To Doge Balance");
Bot.run( {
    command: "/addBonus",
    run_after: 1*60.1*60*24,
} )
