/*CMD
  command: /plan3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Just Type Here Ammount Want You Reinvest
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(data.message);
let res = Libs.ResourcesLib.userRes("money");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
if (amount<35000 || amount>res.value()){
Bot.sendMessage(" Error ‼‼ \nPlease Reinvest In The Minimum Reinvest  \nMinimum Reinvest Is 35000\nYour Balance: " + res.value());
}else{
res.remove(amount);
reinvest.add(amount);
let secs_in_year = 1 * 60* 60 *24  ;

reinvest.growth.addPercent({
  value: 45,
  interval: secs_in_year,
  max_iterations_count: 4
})
Bot.sendMessage("Succes Reinvest")}
