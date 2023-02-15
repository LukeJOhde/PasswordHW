let passLength
let hasLower
let hasUpper
let hasNumbers
let hasSpecChars

const passPromt = () => {
  passLength = parseInt(prompt("how long do you want your password?"))
  hasLower = confirm("do you want lowercase letters?")
  hasUpper = confirm("do you want to have uppercase letters?")
  hasNumbers = confirm("do you want to have numbers?")
  hasSpecChars = confirm('do you want special characters?')
  console.log(passLength, hasLower, hasUpper, hasNumbers, hasSpecChars)
  if(isNaN(passLength)==true || passLength < 8 || passLength > 128) {
    alert('your password needs to be between 8 & 128')
    passPromt()
  }
}

const passGenerate = () => {
  let lowerString = "abcdefghijklmnopqrstuvwxyz"
  let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let numString = "0123456789"
  let specString = "!@#$%^&*()"
  let chosenString = ""
  let password = ""

  if(hasLower=== true) {
    chosenString += lowerString
    
  }
  if(hasUpper=== true) {
    chosenString += upperString
    
  }
  if(hasNumbers=== true) {
    chosenString += numString
    
  }
  if(hasSpecChars=== true) {
    chosenString += specString
   
  }
  console.log(chosenString)

for (let index = 0; index < passLength; index++) {
  let randomIndex = Math.floor(Math.random() * chosenString.length)
  console.log(randomIndex)
  let randomChar = chosenString[randomIndex]
  console.log(randomChar)
  password = password + randomChar
}
console.log(password)
return password
}

let tentativePassword
const passVerify = () => {
  tentativePassword = passGenerate()
  if(hasLower) {
    let verifyLower = false
    for (let index = 0; index < passLength; index++){
      let possibleLower = tentativePassword[index]
      console.log(possibleLower)
      if(possibleLower == "a" || possibleLower == "b"|| possibleLower == "c"|| possibleLower == "d"|| possibleLower == "e"|| possibleLower == "f"|| possibleLower == "g"|| possibleLower == "h"|| possibleLower == "i"|| possibleLower == "j"|| possibleLower == "k"|| possibleLower == "l"|| possibleLower == "m"|| possibleLower == "n"|| possibleLower == "o"|| possibleLower == "p"|| possibleLower == "q"|| possibleLower == "r"|| possibleLower == "s"|| possibleLower == "t"|| possibleLower == "u"|| possibleLower == "v"|| possibleLower == "w"|| possibleLower == "x"|| possibleLower == "y"|| possibleLower == "z"){
          verifyLower = true
      }}
      }
      if(verifyLower === false){
        console.log("no lowercase letters!")
        passVerify()
  }
  if(hasSpecChars) {
    let verifiedSpecChars = false
    for (let index = 0; index < passLength; index++) {
      let possibleSpec = tentativePassword[index]
      if( possibleSpec == '!' || possibleSpec == '@' || possibleSpec == '#' || possibleSpec == '$'|| possibleSpec == '%' || possibleSpec == '^' || possibleSpec == '&' || possibleSpec == '*' || possibleSpec == '(' || possibleSpec == ')'){
        verifiedSpecChars = true
      }

    }
    if(verifiedSpecChars === false)
    console.log("no spec chars")}
      passVerify()

    if(hasNumbers) {
      let verifiedNum = false
      for (let index = 0; index < passLength; index++) {
        let possibleNum = tentativePassword[index]
        if( possibleNum == '1' || possibleNum == '2' || possibleNum == '3' || possibleNum == '4'|| possibleNum == '5' || possibleNum == '6' || possibleNum == '7' || possibleNum == '8' || possibleNum == '9' || possibleNum == '0'){
          verifiedNum = true
        }
  
      }
      if(verifiedSpecChars === false)
      console.log("no Num chars")}
      passVerify ()

      if(hasUpper) {
        let verifyUpper = false
        for (let index = 0; index < passLength; index++){
          let possibleUpper = tentativePassword[index]
          console.log(possibleUpper)
          if(possibleUpper == "A" || possibleUpper == "B"|| possibleUpper == "C"|| possibleUpper == "D"|| possibleUpper == "E"|| possibleUpper == "F"|| possibleUpper == "G"|| possibleUpper == "H"|| possibleUpper == "I"|| possibleUpper == "J"|| possibleUpper == "K"|| possibleUpper == "L"|| possibleUpper == "M"|| possibleUpper == "N"|| possibleUpper == "O"|| possibleUpper == "P"|| possibleUpper == "Q"|| possibleUpper == "R"|| possibleUpper == "S"|| possibleUpper == "T"|| possibleUpper == "U"|| possibleUpper == "V"|| possibleUpper == "W"|| possibleUpper == "X"|| possibleUpper == "Y"|| possibleUpper == "Z"){
              verifyUpper = true
          }}
          }
          if(verifyUpper === false){
            console.log("no uppercase letters!")
            passVerify()
  }




document.getElementById("generate").addEventListener("click", () => {
  passPromt()
  passVerify()
})}