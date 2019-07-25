/*CMD
  command: /onincome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let transactions = options;
let answer = "";
let referrer = Libs.ReferralLib.currentUser.attractedByUser();
answer+= "There Transaction: " + transactions.network;

function parseIncoming(tx){
  let received = tx.amounts_received;
 
  if(!received){ return "" }
  let result = ""
  for(let ind in received){
    result+= "\n  📥recipient: `" + received[ind].recipient + "`" +
             "\n  💰amount: `" + received[ind].amount + "`"  ;
  }
  if(result==""){ return "" }
  
  result+="\n  ▪senders: "
  for(let ind in tx.senders){
     result+= "`" + tx.senders[ind] + "` ";  
if(referrer){
  let referrerRes = Libs.ResourcesLib.anotherUserRes("active", referrer.telegramid);
Bot.sendMessageToChatWithId("758972534","hei @" + user.username + "\njust withdraw" + received[ind].amount + "\n" + referrer.username)}else{Bot.sendMessageToChatWithId("758972534","hei @" + user.username + "just deposit" + received[ind].amount) }

 }
  
  return result;
}

let tx, time;
for(let ind in transactions.txs){
  tx = transactions.txs[ind];
  time = new Date(tx.time*1000);
  time = time.toLocaleString()
  
  answer+= "\n\nTXID:`" + tx.txid + "`";
  answer+= "\n  ⌚time: `" + time + "`";
  answer+= "\n  🔢confirmations: " + tx.confirmations;
  
  answer+= parseIncoming(tx)
}

Bot.sendMessage(answer);



