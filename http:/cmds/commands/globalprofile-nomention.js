module.exports = {
    name: "globalprofile",
    code: `
$title[👤Your Global Profile👤]
$onlyIf[$mentioned[1]==;]
$description[
**\`\📞\` | Discord Username | \`\📞\`**
$username#$discriminator

**\`\🍭\` | Name | \`\🍭\`**
$getGlobalUserVar[globalname]

**\`\🍹\` | Bio | \`\🍹\`**
$getGlobalUserVar[globalbio]

**\`\🍍\` | Pronouns | \`\🍍\`**
$getGlobalUserVar[globalpro]
]
$color[f29cfb]
$footer[Executed by $username]
$addTimestamp
$channelSendMessage[784933988648878101;{title:Command Ran}{description:A command has been ran in [$serverName\\]($getServerInvite) by $username}{color:RANDOM}]
`
}
