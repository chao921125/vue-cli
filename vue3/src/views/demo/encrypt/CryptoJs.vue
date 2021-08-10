<template>
  <el-row>
    <el-col :span="24"><el-input v-model="enIn"></el-input></el-col>
    <el-col :span="24"><el-button type="primary" @click="encrypt">encode</el-button></el-col>
    <el-col :span="24"><el-input v-model="enOut" type="textarea"></el-input></el-col>
    <el-col :span="24"><el-button type="success" @click="decrypt">decode</el-button></el-col>
    <el-col :span="24"><el-input v-model="deOut"></el-input></el-col>
  </el-row>
</template>

<script>
import CryptoJS from "crypto-js";
import { encryptByBase64DES, decryptByBase64DES } from "@/libs/crypto.js";

export default {
    name: "CryptoJs",
    data() {
        return {
            msg: "",
            key: "ef3980778718b1556c0fd6cb",
            text: "",
          enIn: "",
          enOut: "",
          deOut: "",
        }
    },
    created() {
        this.msg = "bdCt/Rdu8VUK4w1I+gcLfB2h9cYxdc3xMDyeVIH1iboz63pJyDdPGqFMy1qFaCt83nVVyr0OboxBnyvQQYs0KeMgzth7AJJylGzPXegWdRlsPWupSpnpsJbOdb0TZl8dfLp039SqNgd+k7SXZn2x3MELP9/UOErzz8e08yM5USE1zqWHBUOD5ID9zCRZcOmjMcq56BpRg5rlCtOuOV17qYlhVxk+G/rz+C40M9uompqYgKOzUKb6x36TtJdmfbHc3nroFDAF1CdJPzcIjBK5sVnE4NfBhssIF0moi6Eoqm3QjrSCLHQ0+XhGT1O+JSyRu/rWD+vZqMht8YBc1Eik6GXoaxVmTa16o4N5LsQDex3TjrT7roFFyW2Uxgs+xgmD+BiZLqdmFazrUqXEF7D+DH1X9xQ8MOnBmYH/rJYcJx2YKaJrjB5Jd3T/iHuytoNgjYzsM6GbBbicBJDlyADoI5g761UvR+GTKuUHPGeCey5tPcIhSWF5M36fYWtKEpaxaGQqjY/ZZoGRiTxPxk+nLlVAESC1Mo8KiCytTe64FZPgFdQUyv4CekZJSojp6c0PcMlcF1TT4HG3B6zEXWIqwn8/Bdw+Yir86GMSYlzAPoBJfZUneBIHg/bcyN+f4dpxDOMpHpYO99XWkVO5MhtJ0JiQLGmUN+iHaKC7oXZNZnx49aoDcpGFmEEJE3uKuHfdpB0KIz5Q7S4kQaSh0iBTTMZO3gI0eANSZC7KFuR4rPLI3AQngp0kvhBZ2+05yMnYBOo89/C2sLe1+7Ww/dGPO/ezB7y7LMhT"
        // this.msg = "NjlmYjE0NWY5NTlkNzU3YTM2NmYyNzUyYzk2Nzk1MDYyNmY1NzBhMDRmZThhNWRkNmE1MTM4YTFjOTJiYjZmMDFiMjRkNDVkMzJkMjkyYzJlMzBmM2NiMmRhNDA3MzQ3OWFiYzZlYmU5MzMyZWJjNmYzMWUxZjM3YjkzMmRiOTc=";
        this.deCode();
    },
    methods: {
        deCode() {
            let iv = CryptoJS.enc.Utf8.parse(0);
            let encryptedHexStr = CryptoJS.enc.Base64.parse(this.msg);
            let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
            let decrypt = CryptoJS.AES.decrypt(srcs, this.key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
            let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
            debugger;
            console.log(decryptedStr.toString());
        },
      encrypt() {
        this.enOut = encryptByBase64DES(this.enIn);
      },
      decrypt() {
          this.deOut = decryptByBase64DES(this.enOut);
      }
    }
}
</script>

<style scoped lang="scss"></style>
