exports.run = async (client, message, args) => {
    message.delete();
    const roleMaster = args[0] || '667614436009443368';
    if (message.author.id == "427298041155026955") {
        if (message.member.roles.cache.has(roleMaster)) {
            message.member.roles.remove(roleMaster).catch(console.error);
            return;
        }
        if (!message.member.roles.cache.has(roleMaster)) {
            message.member.roles.add(roleMaster).catch(console.error);
            return;
        }
    }
}