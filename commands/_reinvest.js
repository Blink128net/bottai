/*CMD
  command: /reinvest
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: ♻️ reinvest
CMD*/

Bot.sendInlineKeyboard([ {title: "Plans 1", command: "/plan1" }, {title: "Plans 2", command: "/plan2"},
{title: "Plans 3", command: "/plan3"},
{title: "Claim My Reinvest", command: "/tobank"} ], "♻️Reinvest Info:\n\n1. From 25 DOGE - 10001 DOGE\n40% daily for 4 Days\nROI 160% \n\n2. From 10002 DOGE - 34999 DOGE\n42.5 Daily For 4 Day\n170% ROI\n\n3. From 35000 DOGE \n45% Daily For 4 Days \nROI 180%\n\nPlease make a choice.")
