module.exports = {
    name: "setglobalbio",
    code: `
  $argsCheck[>1;Please enter a name to set!]
  $setGlobalUserVar[globalbio;$message]
  $title[✓ Bio set]
  $description[💕You have successfully set your global bio!]
  $footer[Executed by $username]
  $addTimestamp
  $color[f29cfb]
  $onlyIf[$charCount<=200;Sorry, global bio character limit is 200!]
  $channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
  `
  }