module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/2vHq8yr.png",
"",
"",
"",
 ];
  var callback = () => api.sendMessage({body:`Thông Tin Admin Bot
  👀 Tên: Trần Anh Đức
  ❎ Tuổi: 2006
  👤 Giới tính: Nam
  🙄 Sinh ngày: 30-11-2006
  💫 Chiều cao / cân nặng: 1m72 / 43kg
  💘 Mối quan hệ:  Thu Thủy ❤️
  😎 Quê quán: Hà Tĩnh
  🤔 Nơi ở: Cẩm Xuyên
  🌸 Cung: Chưa Tra Google 
  👫 Gu: dâm,cute, tóc dài hoặc ngắn, biết nấu cơm ko biết thì tập, lo lắng quan tâm vậy là đủ :)))
  🌸 Tính cách: Quen Lâu Là Biết ❤️
  📱 Facebook: https://fb.me/ducryo.200x
[ ⚜️ ]=== [  𝙍𝙮𝙤 𝘽𝙤𝙩 ] ===[ ⚜️ ]
📢 Những Lưu Ý Cho Những Bạn Dùng Bot Của Mình Neee 😏
[ 🦈 ] Vui lòng không spam khi sử dụng để tránh die bot 🍂
[ 🦈 ] Hạn Chế Sử Dụng Không Dùng Quá 5 Lần / 120s 🧸
[ 🦈 ] Sử Dụng Bot Sẽ Không Bị Band Nhưng Hạn Chế Spam Để Tránh Die Bot 🛡️
[ 🦈 ]  Đừng Report Bot Vì Bot Quản Trị Viên Bạn Bỏ Tiền Ra Bot Die Coi Như Mất Tiền
[ 🦈 ]  Nếu Bot Lỗi Hay Không Hoạt Động Thì Nhắn Tin Liên Hệ Admin Bot 👑
=> Admin Bot Thanks Các Bạn Đã Lựa Chọn Bot Này Để Sử Dụng 💞
[ ⚜️ ]=== [  𝙍𝙮𝙤 𝘽𝙤𝙩 ] ===[ ⚜️ ]
Nếu Bạn Thích Sử Dụng Bot Của Đức Ryo 

💳MB:       hmm admin hong có :<
💳VIB:       hmm admin hong có :<
🪙MoMo: 0889234148

[ ⚜️ ]=== [  𝙍𝙮𝙤 𝘽𝙤𝙩 ] ===[ ⚜️ ]`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
