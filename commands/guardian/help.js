const { Command } = require('discord-akairo');
const now = new Date();

class HelpCommand extends Command {
    constructor() {
        super('commands', {
            aliases: ['commands', 'help'],
            channel: 'guild'
        });
    }

    async exec(message) {

        const embed = this.client.util.embed().setColor("#000000");
        const prefix = message.guild.prefix;


      embed.setColor("#000000")
      embed.addField("__Anti__","Configure Your Server Limits `**OWNER ONLY**`")
      embed.addField("__Recent__","Shows Recent Actions")
    //  embed.addField("__Reset__","Reset Anti-Nuke Settings")
  //    embed.addField("__Trust__","Whitelist User")
  //    embed.addField("__Trust System__","Enable/Disable Whitelisting")
 //     embed.addField("__Backup__","Create Server Backup")
  //    embed.addField("__Restore__","Load Server Backup")
  //    embed.addField("__Instarestore__","Automatically Recover (Unstable)")
   //   embed.addField("__Removeperms__","Take All Permissions")
 //     embed.addField("__Adminrestore__","Restore All Permissions")
   //     embed.addField("__Recover__", "Shows Recovery Menu")
      const info = [`**[Direct Invite Link](https://discord.com/api/oauth2/authorize?client_id=743170252031918161&permissions=8&scope=bot)**`];
      embed.addField('__Invite__', info.join('\n'));
      embed.setAuthor("Anti-Nuke Plugin Commands", "")
     // embed.setImage("https://cdn.discordapp.com/attachments/717616425040347166/717625089683881994/0e0a866e9011385fb8039376210467a6adc329ede0da13a0c15da6f3340020b9.jpeg")
      embed.setThumbnail("")
      embed.setImage("https://media.discordapp.net/attachments/742599109713723467/743292582259458168/image1.gif?width=285&height=161")
    //  embed.setFooter("tno tyrell#5555")
      embed.setFooter("N̷i̷g̷h̷t̷m̷a̷r̷e̷")

        message.channel.send(embed);

    }
}

module.exports = HelpCommand