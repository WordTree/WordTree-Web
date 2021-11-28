import { defineComponent, inject, computed, provide, getCurrentInstance, onBeforeUnmount, ref, h } from 'vue';
import { NOOP } from '@vue/shared';
import '../../../tokens/index.mjs';
import upload from './ajax.mjs';
import './upload-list.mjs';
import './upload.mjs';
import useHandlers from './useHandlers.mjs';
import script$1 from './upload.vue_vue_type_script_lang.mjs';
import script$2 from './upload-list.vue_vue_type_script_lang.mjs';
import { elFormKey } from '../../../tokens/form.mjs';

var script = defineComponent({
  name: "ElUpload",
  components: {
    Upload: script$1,
    UploadList: script$2
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
      default: NOOP
    },
    beforeRemove: {
      type: Function,
      default: NOOP
    },
    onRemove: {
      type: Function,
      default: NOOP
    },
    onChange: {
      type: Function,
      default: NOOP
    },
    onPreview: {
      type: Function,
      default: NOOP
    },
    onSuccess: {
      type: Function,
      default: NOOP
    },
    onProgress: {
      type: Function,
      default: NOOP
    },
    onError: {
      type: Function,
      default: NOOP
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
      default: upload
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    },
    onExceed: {
      type: Function,
      default: () => NOOP
    }
  },
  setup(props) {
    const elForm = inject(elFormKey, {});
    const uploadDisabled = computed(() => {
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
    } = useHandlers(props);
    provide("uploader", getCurrentInstance());
    onBeforeUnmount(() => {
      uploadFiles.value.forEach((file) => {
        if (file.url && file.url.indexOf("blob:") === 0) {
          URL.revokeObjectURL(file.url);
        }
      });
    });
    return {
      abort,
      dragOver: ref(false),
      draging: ref(false),
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
      uploadList = h(script$2, {
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
    const uploadComponent = h(script$1, uploadData, {
      default: () => trigger == null ? void 0 : trigger()
    });
    return h("div", [
      this.listType === "picture-card" ? uploadList : null,
      this.$slots.trigger ? [uploadComponent, this.$slots.default()] : uploadComponent,
      (_b = (_a = this.$slots).tip) == null ? void 0 : _b.call(_a),
      this.listType !== "picture-card" ? uploadList : null
    ]);
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue_type_script_lang.mjs.map
