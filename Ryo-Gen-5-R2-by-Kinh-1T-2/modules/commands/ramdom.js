module.exports.config = {
  name: "ramdom",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Đức Ryo",
  description: "Ramdom Ra Hạn Thử Admin",
  commandCategory: "Admin",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["1day","2day","3day","4day","5day","6day,"7day","Chúc May Mắn Lần SSa"Chúc May Mắn Lần Sau,"Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","Chúc May Mắn Lần Sau","1 Tháng"]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`Đây Là Ramdom Của :` 
 + " [ {name} ] "
  .replace(/\{name}/g, nameUser) 
 + `: ${random_emoji}\n[ ! ] => Hãy Làm Theo Trước Khi Bấm Lại nhé !\n[ H ] Đóng góp Số Lần Thử Qua \'/callad\' nhé !`, event.threadID, event.messageID);
}