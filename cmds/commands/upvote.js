module.exports = {
  name: "upvote",
  code: `
$title[Vote for Profile Bot!]
$description[*By voting for Profile Bot, you're helping us grow!*
[Click here to vote\\](https://top.gg/bot/773408774266028032/vote)
[You can also vote here!\\](https://discord.boats/bot/773408774266028032/vote)
The more servers we reach, the more features that will be added! Which means, even more servers!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}]
`
}
