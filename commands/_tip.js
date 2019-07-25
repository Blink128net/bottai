/*CMD
  command: /tip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("Wrong Command, Please Check Again");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("money");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("money", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Succesfull Transfered Doge: " + amount)
       }
     }else{
        Bot.sendMessage("You Dont Have Doge: " + amount)
     }
  }
}else{
  Bot.sendMessage("Use /tip Userid Ammount")
}
