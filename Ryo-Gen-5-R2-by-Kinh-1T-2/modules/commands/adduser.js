module.exports.config = {
	name: "adduser",
	version: "2.4.3",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Thêm người dùng vào nhóm bằng link hoặc id",
	commandCategory: "group",
	usages: "[args]",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const botID = api.getCurrentUserID();
	const out = msg => api.sendMessage(msg, threadID, messageID);
	var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
	var participantIDs = participantIDs.map(e => parseInt(e));
	if (!args[0]) return out("Vui lòng nhập 1 id user cần add.");
	if (!isNaN(args[0])) return adduser(args[0], undefined);
	else {
		try {
			if (fail == true && id != null) return out(id);
			else if (fail == true && id == null) return out("Không Thể Thêm Vì Có Cái Lồn UID Này 🙄")
			else {
				await adduser(id, name || "người dùng Facebook");
			}
		} catch (e) {
			return out(`${e.name}: ${e.message}.`);
		}
	}

	async function adduser(id, name) {
		id = parseInt(id);
		if (participantIDs.includes(id)) return out(`${name ? name : "Thành viên"} đã có mặt trong nhóm.`);
		else {
			var admins = adminIDs.map(e => parseInt(e.id));
			try {
				await api.addUserToGroup(id, threadID);
			}
			catch {
				return out(`Không thể thêm ${name ? name : "người dùng"} vào nhóm.`);
			}
			if (approvalMode === true && !admins.includes(botID)) return out(`Đã thêm ${name ? name : "thành viên"} vào danh sách phê duyệt !`);
			else return out(`Đã thêm ${name ? name : "thành viên"} vào nhóm !`)
		}
	}
}