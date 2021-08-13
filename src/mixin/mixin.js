export const mixins = {
  //身份证脱敏
  methods: {

    //身份证号脱敏
    setCertNo(certNo) {

      if (certNo && certNo.length >= 10) {

        var certNo = certNo.trim();
        // let cert1 = certNo.substring(0, certNo.length-4);
        // let cert2 = cert1 + "****";
        // return cert2;
        // let cert1 = certNo.replace(/(\w{6})\w{2}(\w{6})\w{4}/, '$1**$2****');
        let cert1 = certNo.substring(0, 6) + '**' + certNo.substring(8, certNo.length - 4) + '****';
        return cert1;
      } else {

        return certNo;
      }
    },
    //手机脱敏
    setTel(tel) {

      if (tel && tel.length >= 11) {

        var pat = /(\d{3})\d*(\d{4})/
        let telFinal = tel.replace(pat, '$1****$2');
        return telFinal
      } else {

        return tel;
      }
    },
    //脱敏姓名 方式一，根据性别变成某女士或者某先生
    setName(str, sex) {

      if (str && sex) {

        let str1 = str.substr(0, 1);
        let str2 = "";
        if (sex == "2") {

          str2 = str1 + "女士";
        } else {

          str2 = str1 + "先生";
        }
        return str2;
      }
    },
    //脱敏姓名 方式二，不知性别用*代替名
    setName1(str) {

      if (str) {

        let str1 = str.substr(0, 1);
        let num1 = str.substr(1).length;
        let str2 = ''
        for (let i = 0; i < num1; i++) {

          str2 += ' *'
        }
        let str3 = str1 + str2;
        return str3;
      } else {

        console.log("姓名为空")
      }
    },
  }
}