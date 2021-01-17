module.exports = {
  name: "setbanner",
  code: `
$argsCheck[>1;Please enter a link to set!]
$setUserVar[banner;$message]
$title[✓ Banner set]
$description[💕You have successfully set your banner!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
`
}
