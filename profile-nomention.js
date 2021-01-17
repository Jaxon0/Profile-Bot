module.exports = {
  name: "profile",
  code: `
$title[👤Your Profile👤]
$onlyIf[$mentioned[1]==;]
$description[
**__You have: $getUserVar[likes] likes on your profile!__**

\`\🍭\` | **Name** | \`\🍭\`
$getUserVar[name]

\`\🍥\` | **About** | \`\🍥\`
$getUserVar[about]

\`\🍡\` | **Pronouns** | \`\🍡\`
$getUserVar[pronouns]

\`\🎂\` | **Birthday** | \`\🎂\`
$getUserVar[birthday]

\`\🍧\` | **Location** | \`\🍧\`
$getUserVar[location]

\`\🍰\` | **Occupation** | \`\🍰\`
$getUserVar[occupation]]
$thumbnail[$getUserVar[avatar]]
$image[$getUserVar[banner]]
$color[f29cfb]
$footer[Executed by $username]
$addTimestamp
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]`
}