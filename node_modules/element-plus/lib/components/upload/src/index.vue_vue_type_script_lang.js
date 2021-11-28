'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../tokens/index.js');
var ajax = require('./ajax.js');
require('./upload-list.js');
require('./upload.js');
var useHandlers = require('./useHandlers.js');
var upload_vue_vue_type_script_lang = require('./upload.vue_vue_type_script_lang.js');
var uploadList_vue_vue_type_script_lang = require('./upload-list.vue_vue_type_script_lang.js');
var form = require('../../../tokens/form.js');

var script = vue.defineComponent({
  name: "ElUpload",
  components: {
    Upload: upload_vue_vue_type_script_lang["default"],
    UploadList: uploadList_vue_vue_type_script_lang["default"]
  },
  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    method: {
      type: String,
      default: "post"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: "file"
    },
    drag: {
      type: Boolean,
      default: false
    },
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "select"
    },
    beforeUpload: {
      type: Function,
      default: shared.NOOP
    },
    beforeRemove: {
      type: Function,
      default: shared.NOOP
    },
    onRemove: {
      type: Function,
      default: shared.NOOP
    },
    onChange: {
      type: Function,
      default: shared.NOOP
    },
    onPreview: {
      type: Function,
      default: shared.NOOP
    },
    onSuccess: {
      type: Function,
      default: shared.NOOP
    },
    onProgress: {
      type: Function,
      default: shared.NOOP
    },
    onError: {
      type: Function,
      default: shared.NOOP
    },
    fileList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: "text"
    },
    httpRequest: {
      type: Function,
      default: ajax["default"]
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    },
    onExceed: {
      type: Function,
      default: () => shared.NOOP
    }
  },
  setup(props) {
    const elForm = vue.inject(form.elFormKey, {});
    const uploadDisabled = vue.computed(() => {
      return props.disabled || elForm.disabled;
    });
    const {
      abort,
      clearFiles,
      handleError,
      handleProgress,
      handleStart,
      handleSuccess,
      handleRemove,
      submit,
      uploadRef,
      uploadFiles
    } = useHandlers["default"](props);
    vue.provide("uploader", vue.getCurrentInstance());
    vue.onBeforeUnmount(() => {
      uploadFiles.value.forEach((file) => {
        if (file.url && file.url.indexOf("blob:") === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    });
    return {
      abort,
      dragOver: vue.ref(false),
      draging: vue.ref(false),
      handleError,
      handleProgress,
      handleRemove,
      handleStart,
      handleSuccess,
      uploadDisabled,
      uploadFiles,
      uploadRef,
      submit,
      clearFiles
    };
  },
  render() {
    var _a, _b;
    let uploadList;
    if (this.showFileList) {
      uploadList = vue.h(uploadList_vue_vue_type_script_lang["default"], {
        disabled: this.uploadDisabled,
        listType: this.listType,
        files: this.uploadFiles,
        onRemove: this.handleRemove,
        handlePreview: this.onPreview
      }, this.$slots.file ? {
        default: (props) => {
          return this.$slots.file({
            file: props.file
          });
        }
      } : null);
    } else {
      uploadList = null;
    }
    const uploadData = {
      type: this.type,
      drag: this.drag,
      action: this.action,
      multiple: this.multiple,
      "before-upload": this.beforeUpload,
      "with-credentials": this.withCredentials,
      headers: this.headers,
      method: this.method,
      name: this.name,
      data: this.data,
      accept: this.accept,
      fileList: this.uploadFiles,
      autoUpload: this.autoUpload,
      listType: this.listType,
      disabled: this.uploadDisabled,
      limit: this.limit,
      "on-exceed": this.onExceed,
      "on-start": this.handleStart,
      "on-progress": this.handleProgress,
      "on-success": this.handleSuccess,
      "on-error": this.handleError,
      "on-preview": this.onPreview,
      "on-remove": this.handleRemove,
      "http-request": this.httpRequest,
      ref: "uploadRef"
    };
    const trigger = this.$slots.trigger || this.$slots.default;
    const uploadComponent = vue.h(upload_vue_vue_type_script_lang["default"], uploadData, {
      default: () => trigger == null ? void 0 : trigger()
    });
    return vue.h("div", [
      this.listType === "picture-card" ? uploadList : null,
      this.$slots.trigger ? [uploadComponent, this.$slots.default()] : uploadComponent,
      (_b = (_a = this.$slots).tip) == null ? void 0 : _b.call(_a),
      this.listType !== "picture-card" ? uploadList : null
    ]);
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue_type_script_lang.js.map
