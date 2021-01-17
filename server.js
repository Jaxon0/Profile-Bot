const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "bot-token", 
prefix: "p/" 
})
 
bot.onMessage()
 
const fs = require('fs')

const folders = fs.readdirSync("./cmds/")

for (const files of folders) {
const folder = fs.readdirSync(`./cmds/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./cmds/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}

bot.status({
      text: "for p/help",
      type: "WATCHING",
      status: "dnd",
      time: 12
})

bot.status({
    text: "https://discord.gg/dYsuMfvZYh",
    type: "PLAYING",
    time: 12
})

bot.variables({
    about: "Not set yet!",
    pronouns: "Not set yet!",
    name: "Not set yet!",
    location: "Not set yet!",
    occupation: "Not set yet!",
    birthday: "Not set yet!",
    likes: "0",
    globalpro: "Not set yet!",
    globalbio: "Not set yet!",
    globalname: "Not set yet!",
    avatar: "https://media.discordapp.net/attachments/773055345463394315/776267864931696640/unknown.png?width=453&height=453",
    banner: "https://styleclick.ca/public/front/images/no-img-banner.jpg"
  })

bot.command({
 name: "nuke",
 code: `
$onlyForIDs[345377106160648203;No.]
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' nuked this channel! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('I dont have enough perms'))
]
$onlyPerms[managechannels;{title:Missing permissions!} {description:You are missing the \`MANAGE_CHANNELS\` permission which is needed to run this command} {color:f29cfb}]`
});

//main page
bot.command({
name: "help",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,1️⃣,2️⃣,3️⃣,4️⃣;awaitReaction1,awaitReaction2,awaitReaction3,awaitReaction4,awaitReaction5;yes]
$textSplit[$sendMessage[{title: Help} {description:React to see the following pages:
1️⃣ - Setup Commands
2️⃣ - Profile Commands
3️⃣ - Other Commands
4️⃣ - Global Profile Setup

[Support Server\\](https://discord.com/invite/8G5TaED5Fm) | [Website\\](https://www.profile-bot.tk)} {color:f29cfb};yes]; ]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`})

//return to main page
bot.awaitedCommand({
 name: "awaitReaction1",
 code: `$editMessage[$message[1];{title:Help} {description:Help Command Pages:
1️⃣ - Setup Commands
2️⃣ - Profile Commands
3️⃣ - Other Commands
4️⃣ - Global Profile Setup

[Support Server\\](https://discord.com/invite/8G5TaED5Fm) | [Website\\](https://www.profile-bot.tk)} {color:f29cfb}
]
`})

//page 1
bot.awaitedCommand({
 name: "awaitReaction2",
 code: `
 $editMessage[$message[1];{title:Page 1} {description:✦**__How To Setup Your Profile!__**✦
1.≛ run \`\p/setname (your name here)\`
2.≛ run \`\p/setabout (your bio here)\`
3.≛ run \`\p/setpronouns (your pronouns here)\`
4.≛ run \`\p/setlocation (your location here)\`
5.≛ run \`\p/setbirthday (your birthday here)\`
6.≛ run \`\p/setoccupation (your occupation here)\`
7.≛ run \`\p/setavatar (link here)\`
8.≛ run \`\p/setbanner (link here)\`} {color:f29cfb} {footer:🔄 - Return to home page}
]
 `
})

//page 2
bot.awaitedCommand({
 name: "awaitReaction3",
 code: `
 $editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 2} {description:**__Profile Commands!__**
\`\p/profile\` (shows your profile, can show another profile if a user is mentioned)
\`\p/reset\` (resets every aspect of your profile)
\`\p/like @mention\` (likes another users profile)} {color:f29cfb} 
]
 `
})

//page 3
bot.awaitedCommand({
    name: "awaitReaction4",
    code: `
$editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 3} {description:**__Other Commands__**
\`\p/invite\`
\`\p/upvote\`
\`\p/ping\`

**Wanna make a suggestion? Run \`\p/suggest (your suggestion)\`**}{color:f29cfb}
]
`
})

//page 4
bot.awaitedCommand({
    name: "awaitReaction5",
    code: `
$editMessage[$message[1];{footer:🔄 - Return to home page}
{title:Page 3} {description:**__Global Profile Commands__**
\`\p/setglobalbio\` (your bio here)
\`\p/setglobalname\` (your name here)
\`\p/setglobalpro\` (your pronouns here)

**Wanna make a suggestion? Run \`\p/suggest (your suggestion)\`**}{color:f29cfb}
]
`
})

bot.botJoinCommand({
    channel: "$systemChannelID",
    code:`
$title[Arrival]
$description[Thank you so much for inviting me to $serverName!

**What is Profile Bot?**
Profile Bot is a fun discord bot, that can create basic user profiles for your server!

Invite me [here!\\](https://discord.com/oauth2/authorize?client_id=773408774266028032&permissions=522304&scope=bot)]
$image[https://i.imgur.com/Yhs6QyY.jpg]
$footer[Got an idea? Use p/suggest to let my developer know about it!]
$color[f29cfb]`
})
bot.onGuildJoin()