import cryptoJs from "crypto-js";
// import Buffer from "buffer";

const key = "ef3980778718b1556c0fd6cb";

// export const deTest = (msg) => {
//   const md5Key = Buffer.from(key);
//   const iv = Buffer.alloc(0);
//   var keyHex = cryptoJs.enc.Utf8.parse(md5Key)
//   var decrypted = cryptoJs.DES.decrypt(
//     {
//       ciphertext: cryptoJs.enc.Hex.parse(message)
//     },
//     keyHex,
//     {
//       mode: cryptoJs.mode.ECB,
//       padding: cryptoJs.pad.Pkcs7
//     }
//   )
//   return decrypted.toString(cryptoJs.enc.Utf8)
// }

// DES加密
export const encryptDES = (message) => {
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
  var encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
  return encrypted.ciphertext.toString()
}

// DES解密
export const decryptDES = (message) => {
  var keyHex = cryptoJs.enc.Utf8.parse(key)
  var decrypted = cryptoJs.DES.decrypt(
    {
      ciphertext: cryptoJs.enc.Hex.parse(message)
    },
    keyHex,
    {
      mode: cryptoJs.mode.ECB,
      padding: cryptoJs.pad.Pkcs7
    }
  )
  return decrypted.toString(cryptoJs.enc.Utf8)
}


function strToBase64 (rawStr) {
  const wordArray = cryptoJs.enc.Utf8.parse(rawStr);
  const base64 = cryptoJs.enc.Base64.stringify(wordArray);
  return base64
}

function base64ToStr (base64) {
  const parsedWordArray = cryptoJs.enc.Base64.parse(base64);
  const parsedStr = parsedWordArray.toString(cryptoJs.enc.Utf8);
  return parsedStr
}

export function encryptByBase64DES (paramStr) {
  const des = encryptDES(paramStr)
  return strToBase64(des)
}

export function decryptByBase64DES (base64Str) {
  const str = base64ToStr(base64Str)
  return decryptDES(str)
}
