module.exports = {
    name: "setglobalpronouns",
    code: `
  $argsCheck[>1;Please enter pronouns to set!]
  $setGlobalUserVar[globalpro;$message]
  $title[✓ Pronouns set]
  $description[💕You have successfully set your global pronouns!]
  $footer[Executed by $username]
  $addTimestamp
  $color[f29cfb]
  $onlyIf[$charCount<=10;Sorry, global pronouns character limit is 10!]
  $channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
  `
  }
