module.exports = {
  name: "like",
  code: `
$argsCheck[>1;Must mention a user to like their profile!]
$setUserVar[likes;$sum[$getUserVar[likes;$mentioned[1]];1];$mentioned[1]]
You have liked <@$mentioned[1]>'s profile!
$suppressErrors[An error occurred! Either you didn't mention a user, or there are other problems.]
$onlyIf[<value>!=<@$authorID>;Nice try.]
$cooldown[1d;You must wait %time% before liking another users profile!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}
