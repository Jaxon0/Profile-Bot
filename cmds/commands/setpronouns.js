module.exports = {
  name: "setpronouns",
  code: `
$argsCheck[>1;Please enter your pronouns to set!]
$setUserVar[pronouns;$message]
$title[✓ Pronouns set]
$description[💕You have successfully set your pronouns!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=10;Sorry, pronouns character limit is 10!]
`
}
