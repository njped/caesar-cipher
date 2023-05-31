// ASCII Code: A -> 65
// Shifting Value = X

const shift = 3
const text = 'alohaz'
let tempText = text.toUpperCase()
for(let i = 0; i < tempText.length; i++) {
  let tempChar = tempText[i]
  let code = tempChar.charCodeAt()
  let shiftCode = tempChar.charCodeAt() + shift
  let offset = ((code - 65 + shift) % 26) + 65
  let newChar = String.fromCharCode(offset)
  console.log(`${tempChar} -> ${code} -> ${offset} -> ${newChar}`)
}