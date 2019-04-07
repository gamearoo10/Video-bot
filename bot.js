const config = require("./config.json");
const discord = require("discord.js");

const bot = new discord.Client;

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("m.help | Bot Made By: Gamearoo#0001")
});

bot.on("message", async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return message.author.send("I Dont Work In Dm's Atm");

    let prefix = config.prefix;
    if (!message.content.startsWith(prefix));
    let messageArry = message.content.split(" ");
    let cmd = messageArry[0];
    let args = messageArry.slice(1);

    if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.avatarURL;

    let botembed = new discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#3e15f2") //can any hex code
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
    }

    if(cmd === `${prefix}serverinfo`){
        let sicon = message.guild.iconURL;
        let serverenbed = new discord.RichEmbed()
        .setDescription("Server Information")
        .setColor("#3e15f2") //can be any hex code
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverenbed);
    }
});

bot.login(config.token);
