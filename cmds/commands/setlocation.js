module.exports = {
  name: "setlocation",
  code: `
$argsCheck[>1;Please enter a location to set!]
$setUserVar[location;$message]
$title[✓ Location set]
$description[💕You have successfully set your location!]
$footer[Executed by $username]
$addTimestamp
$color[f29cfb]
$onlyIf[$charCount<=20;Sorry, location character limit is 20!]
`
}
