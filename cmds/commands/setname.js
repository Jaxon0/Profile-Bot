module.exports = {
  name: "setname",
  code: `
$argsCheck[>1;Please enter a name to set!]
$setUserVar[name;$message]
$title[✓ Name set]
$description[💕You have successfully set your name!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=10;Sorry, name character limit is 10!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}
