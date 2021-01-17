module.exports = {
    name: "setglobalname",
    code: `
  $argsCheck[>1;Please enter a name to set!]
  $setGlobalUserVar[globalname;$message]
  $title[✓ Name set]
  $description[💕You have successfully set your global name!]
  $footer[Executed by $username]
  $addTimestamp
  $color[f29cfb]
  $onlyIf[$charCount<=10;Sorry, global name character limit is 10!]
  $channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
  `
  }