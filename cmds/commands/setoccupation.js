module.exports = {
  name: "setoccupation",
  code: `
$argsCheck[>1;Please enter an occupation!]
$setUserVar[occupation;$message]
$title[✓ Occupation set]
$description[💕You have successfully set your occupation!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=30;Sorry, occupation character limit is 30!]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]`
}
