module.exports = {
  name: "ping",
  code: `
$title[$randomText[Pong :full_moon_with_face:;Pong :eggplant:;Pong :sunglasses:;Pong :smirk:;Pong :shit:;Pong :hot_face:] ]
$description[Latency - \`\$ping\`
Server Count - \`\$serverCount\`
Credits - \`\Developed by jaxon#6666\`]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]`


}
