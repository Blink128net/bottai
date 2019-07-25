/*CMD
  command: /cekdeposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.BlockIO.setSecretPin("52084242");

Libs.BlockIO.Dogecoin.setApiKey("20a2-2031-8bc0-7fbf");

Libs.BlockIO.Dogecoin.getTransactions(
    { type: "received", 
      labels: "user" + chat.chatid ,
     onSuccess: "/onincome", onError: "/onerror" }
);

