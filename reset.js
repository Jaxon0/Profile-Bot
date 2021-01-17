module.exports = {
  name: "reset",
  code: `
$title[Reset Profile]
$description[Your profile has been successfully reset! If you would like to set it back, use \`\p/help\` to see how!]
$footer[Executed by $username]
$addTimestamp
$setUserVar[about;Not set yet!]
$setUserVar[name;Not set yet!]
$setUserVar[banner;https://styleclick.ca/public/front/images/no-img-banner.jpg]
$setUserVar[location;Not set yet!]
$setUserVar[occupation;Not set yet!]
$setUserVar[birthday;Not set yet!]
$setUserVar[avatar;https://media.discordapp.net/attachments/773055345463394315/776267864931696640/unknown.png?width=453&height=453]
$setUserVar[pronouns;Not set yet!]
$color[f29cfb]
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]`
}