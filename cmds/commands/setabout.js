module.exports = {
  name: "setabout",
  code: `
$argsCheck[>1;Please enter a bio to set!]
$setUserVar[about;$message]
$title[✓ About set]
$description[💕You have successfully set your about!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=200;Sorry, about me character limit is 200!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}
