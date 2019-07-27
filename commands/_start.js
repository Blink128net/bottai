/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 💡 To use this bot you must join this channel: @DogeIncreaseschannel
  keyboard: ✅joined
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let reinvest = Libs.ResourcesLib.userRes("reinvest");
let deposit = Libs.ResourcesLib.userRes("deposit");
let secs_in_year = 1 * 60  ;

deposit.growth.addPercent({
  value: 50,
  interval: secs_in_year
});

function hello(message){
  let greetings = "Hello, " + 
  user.first_name + " " + 
  user.last_name + 
  "(" + user.username + ") ! \nTelegramID: " + 
  user.telegramid + "\n\n";

  Bot.sendMessage(greetings + "\n" + message);
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(channel){
  hello("Referal: " + channel);
}

function doAtractedByUser(refUser){
  hello("Referal from user: " + 
    refUser.first_name + " @" + refUser.username);
  
  Bot.sendMessageToChatWithId(refUser.chatId, 
    "You Have New Referral: @" + user.username +
Libs.ResourcesLib.userRes("money").add(2) + Libs.ResourcesLib.anotherUserRes("money", refUser.telegramid).add(2)
) }

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

Bot.sendMessage(
"Hello @" + user.username + "/" + user.telegramid
)
