/*CMD
  command: /miner
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let secs_in_day = 1 * 60 * 60 * 24;
money.growth.addCompoundInterest({
  value: 50,
  interval: secs_in_day
});
