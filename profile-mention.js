module.exports = {
  name: "profile",
  code: `
$onlyIf[$mentioned[1]!=;]
$title[👤$getUserVar[name;$mentioned[1;yes]]'s Profile👤]
$description[
**__This user has: $getUserVar[likes;$mentioned[1;yes]] likes on their profile!__**

\`\🍭\` | **Name** | \`\🍭\`
$getUserVar[name;$mentioned[1;yes]]

\`\🍥\` | **About** | \`\🍥\`
$getUserVar[about;$mentioned[1;yes]]

\`\🍡\` | **Pronouns** | \`\🍡\`
$getUserVar[pronouns;$mentioned[1;yes]]

\`\🎂\` | **Birthday** | \`\🎂\`
$getUserVar[birthday;$mentioned[1;yes]]

\`\🍧\` | **Location** | \`\🍧\`
$getUserVar[location;$mentioned[1;yes]]

\`\🍰\` | **Occupation** | \`\🍰\`
$getUserVar[occupation;$mentioned[1;yes]]]
$thumbnail[$getUserVar[avatar;$mentioned[1;yes]]]
$image[$getUserVar[banner;$mentioned[1;yes]]]
$color[f29cfb]
$footer[Executed by $username]
$addTimestamp
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]`
}
