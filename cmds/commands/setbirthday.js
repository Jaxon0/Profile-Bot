module.exports = {
  name: "setbirthday",
  code: `
$argsCheck[>1;Please enter a birthday to set!]
$setUserVar[birthday;$message]
$title[✓ Birthday set]
$description[💕You have successfully set your birthday!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=10;Sorry, birthday character limit is 10!]
`
}
