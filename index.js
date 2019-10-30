const Discord = require("discord.js")
const Client = new Discord.Client()

let prefix = "ws/"

Client.on('ready', () => {
    Client.user.setStatus('available')
    Client.user.setPresence({
        game: {
            name: 'twitch.tv/wezender',
            type: "STREAMING",
            url: "https://www.twitch.tv/wezender"
        }
    });
});

Client.on("ready", ()=> {
    console.log("WEZENDER SUPPORT: !i! A bot sikeresen elindult...")
})
Client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;
})
Client.on("message", message => {
  if(message.content.startsWith(prefix + "Teszt")) {
    message.channel.send("Ez egy teszt parancs!")
  }
  if(message.content.startsWith(prefix + "anyakfajsfd")) {
    return message.reply("anyakfajsfd!")
  }
  if(message.content.startsWith(prefix + "setup")) {
    let setup = new Discord.RichEmbed()
    .setColor("#ffea00")
    .setTitle("┏╋━━━━━━◥◣**Setup**◢◤━━━━━━╋┓")
    .addField("**GTX 1060 TI**")
    message.channel.send(setup);
  }
})
Client.login("NjM3OTIyMzI1Nzk4NDUzMjQ4.XbVN0Q.DFFM2BzNW8yhCG_8KlZBtwB5QNo")
