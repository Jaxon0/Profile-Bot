module.exports = {
  name: "setavatar",
  code: `
$argsCheck[>1;Please enter a link to set!]
$setUserVar[avatar;$message]
$title[✓ Avatar set]
$description[💕You have successfully set your avatar!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
`
}
