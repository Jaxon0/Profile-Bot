module.exports = {
  name: "invite",
  code: `
$title[]
$description[[Click here to invite me to your server!\\](https://discord.com/oauth2/authorize?client_id=773408774266028032&permissions=522304&scope=bot)]
$color[f29cfb]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}