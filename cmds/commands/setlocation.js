module.exports = {
  name: "setlocation",
  code: `
$argsCheck[>1;Please enter a location to set!]
$setUserVar[location;$message]
$title[✓ Location set]
$description[💕You have successfully set your location!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=20;Sorry, location character limit is 20!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}
