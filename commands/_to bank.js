/*CMD
  command: /to bank
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📤 send doge to bank
CMD*/

let res = Libs.ResourcesLib.userRes("money");
let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");
    
    if(res.have(201)){
       if( res.exchangeTo(bank_deposit, { remove_amount: 201, add_amount: 200  }) ){
         
let secs_in_day = 1 * 60 * 60 * 24;
         bank_deposit.growth.addCompoundInterest({percent: 50, interval: secs_in_day });
   
         Bot.sendMessage("Transfered Doge to bank deposit: " + 200 + "\nBank take 1 DOGE as commission" );
       }
     }else{
        Bot.sendMessage("You have not such Doge " + 201);
     }
