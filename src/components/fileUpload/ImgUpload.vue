<template>
  <div>
    <el-upload
        list-type="picture-card"
        :accept="accept"
        :action="url"
        :auto-upload="true"
        :headers="{ authorization: this.$store.getters['auth/token'] }"
        :http-request="handleUploadForm"
        :on-remove="handleUploadRm"
        :before-upload="handleUploadBf"
        :disabled="isDisabled"
        :multiple="multiple"
        :limit="3">
      <i v-show="!isHideUpload && !isHideBtn" class="el-icon-plus"></i>
    </el-upload>
    <p class="file-tips">图片尺寸681{{ sizeWidth }}*831{{ sizeHeight }}像素，支持{{ accept }}格式</p>
  </div>
</template>

<script>
export default {
  name: 'ImgUpload',
  props: {
    url: {
      type: String,
      default: ''
    },
    accept: {
      type: String,
      default: '.jpg, .JPG, .png, .PNG, .jpeg, .JPEG, .bmp, .BMP'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 1
    },
    // 限制
    size: { // 大小 以MB为单位
      type: Number,
      default: 0
    },
    sizeWidth: { // 尺寸，宽
      type: Number,
      default: 0
    },
    sizeHeight: { // 尺寸，高
      type: Number,
      default: 0
    },
    isLimitType: { // 限制尺寸类型，0 不限制，1 等宽等高，2 比例宽高，3 小于宽高，4 大于宽高，5 宽<高，6 宽>高
      type: Number,
      default: 0
    },
    isHideUpload: { // 是否当上传完成后隐藏上传
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDisabled: false,
      isHideBtn: false,
      urlList: []
    };
  },
  methods: {
    // 上传前做拦截
    handleUploadBf(file) {
      if (this.size && Math.floor(file.size / 1024 / 1024) > this.size) {
        this.$message.warning(`大小不能超过${this.size}MB`);
        return false;
      }
      const isValidate = new Promise(function(resolve, reject) {
        let _URL = window.URL || window.webkitURL;
        let img = new Image();
        img.onload = function() {
          let valid = true; // img.width img.height;
          switch (this.isLimitType) {
            case 1: valid = img.width === this.sizeWidth && img.height === this.sizeHeight; break;
            case 2: valid = img.width / img.height === this.sizeWidth / this.sizeHeight; break;
            case 3: valid = img.width < this.sizeWidth && img.height < this.sizeHeight; break;
            case 4: valid = img.width > this.sizeWidth && img.height > this.sizeHeight; break;
            case 5: valid = img.width < img.height; break;
            case 6: valid = img.width > img.height; break;
            default: break;
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          valid ? resolve() : reject();
        };
        img.src = _URL.createObjectURL(file);
      }).then(() => {
        return file;
      }, () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject();
      });
      return isValidate;
    },
    // 上传图片
    handleUploadForm(param) {
      this.isUpload = true;
      let _this = this;
      let fileOne = param.file.name;
      let suffix = fileOne.slice(fileOne.lastIndexOf('.'));
      this.getBase64(param.file).then(res => {
        let imgData = {
          id: this.$store.getters['auth/user'].id,
          imgBase64: res,
          imgSuffix: suffix
        };
        // 向后端发送数据
        _this.$axios.post(this.$constants.requireUrl.uploadFile, imgData).then((res) => {
          this.isUpload = false;
          if (res) {
            this.form.img = res.url;
          }
        }).catch(e => {
          this.isUpload = false;
        });
      }).catch(e => {
        this.isUpload = false;
      });
    },
    handleUploadRm() {
      if (this.limit === 1) {
        return this.urlList[0];
      } else {
        return this.urlList;
      }
    },
    // 图片转换为base64格式
    getBase64(file) {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();
        let imgResult = '';
        reader.readAsDataURL(file);
        reader.onload = () => {
          imgResult = reader.result;
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.onloadend = () => {
          resolve(imgResult);
        };
      });
    }
  }
};
</script>

<style scoped>

</style>
