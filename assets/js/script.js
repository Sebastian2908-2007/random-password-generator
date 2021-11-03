

 function generatePassword () {
  var mixChars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()_+-=[]{}/?<>/|";
  var passwordLength = 8;
  var passwordText = document.querySelector("#password");
  var passwordText = "";
  var passwordOptions = window.prompt("what type of characters would you like you password to include? Enter 1 for a mix, enter 2 for lowercase, enter 3 for uppercase or enter 4 for special characters");
   passwordOptions = parseInt(passwordOptions);

   switch(passwordOptions) {
       case 1:
       for(var i = 0; i <= passwordLength; i++) {
           var randomNumber = Math.floor(Math.random() * mixChars.length);
           passwordText += mixChars.substring(randomNumber, randomNumber + 1);
       }
       writePassword(passwordText)
       break;
      
        case 2:
            for(var i = 0; i <= passwordLength; i++) {
                var randomNumber = Math.floor(Math.random() * lowerChars.length);
                passwordText += lowerChars.substring(randomNumber, randomNumber + 1);
            }
            writePassword(passwordText)
            break;

            case 3:
                for(var i = 0; i <= passwordLength; i++) {
                    var randomNumber = Math.floor(Math.random() * upperChars.length);
                    passwordText += upperChars.substring(randomNumber, randomNumber + 1);
                }
                writePassword(passwordText)
                break;

                case 4:
                    for(var i = 0; i <= passwordLength; i++) {
                        var randomNumber = Math.floor(Math.random() * specialChars.length);
                        passwordText += specialChars.substring(randomNumber, randomNumber + 1);
                    }
                    writePassword(passwordText)
                    break;

                    default:
                        window.alert("you did not pick a valid option. Try Again.");
                        break;

   }
 };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  // generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
