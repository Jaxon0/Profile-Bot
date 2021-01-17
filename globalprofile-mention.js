module.exports = {
    name: "globalprofile",
    code: `
$title[👤User's Global Profile👤]
$onlyIf[$mentioned[1]!=;]
$description[
**\`\📞\` | Discord Username | \`\📞\`**
$mentioned[1]#$discriminator[$mentioned[1]]

**\`\🍭\` | Name | \`\🍭\`**
$getGlobalUserVar[globalname;$mentioned[1;yes]]

**\`\🍹\` | Bio | \`\🍹\`**
$getGlobalUserVar[globalbio;$mentioned[1;yes]]

**\`\🍍\` | Pronouns | \`\🍍\`**
$getGlobalUserVar[globalpro;$mentioned[1;yes]]
]
$color[f29cfb]
$footer[Executed by $username]
$addTimestamp
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}