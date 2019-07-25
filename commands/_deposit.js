/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: /cekdeposit to cek your deposit
  keyboard: 
  aliases: 💰 deposit
CMD*/

Libs.BlockIO.setSecretPin("52084242");

Libs.BlockIO.Dogecoin.setApiKey("20a2-2031-8bc0-7fbf");

Libs.BlockIO.Dogecoin.getAddressByLabel({ onSuccess: "/onmyaddress", onError: "/onerror", label: "user" + chat.chatid } );
