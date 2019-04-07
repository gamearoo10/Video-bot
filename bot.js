const config = require("./config.json");
const discord = require("discord.js");

const bot = new discord.Client;

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("!help | Bot Made By: Yourname")
});

bot.on("message", async message => {
    if(message.author.bot) return; 
    if(message.channel.type === "dm") return message.author.send("I Dont Work In Dm's Atm");

    let prefix = config.prefix;
    if (!message.content.startsWith(prefix));
    let messageArry = message.content.split(" ");
    let cmd = messageArry[0];
    let args = messageArry.slice(1);

    if(cmd === `${prefix}hello`){
       return message.channel.send("Hello");
    }

    
    

    
});

bot.login(config.token);
