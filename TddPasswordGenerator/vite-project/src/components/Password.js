

export default function PasswordGenerator  ( length , isNumAllowed, isCharAllowed) {

    if (length <8 || length > 16) {
        throw new Error("Length of the password is out of bounds")
    }
    let passLength = length
    let pass = ""
    let str = ""
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789"
    const characters = "!@#$%^&*~<>+"

    function replaceCharAt(str, index, replacement) {
    //   if (index < 0 || index >= str.length) {
    //       throw new Error("Index out of bounds");
    //   }
      return str.slice(0, index) + replacement + str.slice(index + 1);
    }
     
    for (let i = 0; i < passLength; i++) {
      let num = Math.floor(Math.random() * alphabets.length )
      str += alphabets[num]  
    }

    if (isNumAllowed == false && isCharAllowed == false) {
      pass = str
    }else if (isNumAllowed == true && isCharAllowed == false) {
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        str = replaceCharAt(str, temp, numbers[num])
      }
      pass = str
    }else if(isNumAllowed == false && isCharAllowed == true){
      for (let i = 0; i < passLength/2 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }else{
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * numbers.length)
        str = replaceCharAt(str, temp, numbers[num])
      }
      for (let i = 0; i < passLength/4 ; i++) {
        let temp = Math.floor(Math.random() * passLength)
        let num = Math.floor(Math.random() * characters.length)
        str = replaceCharAt(str, temp, characters[num])
      }
      pass = str
    }
     return pass
  } 
