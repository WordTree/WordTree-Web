'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var ajax = require('./ajax.js');
require('./upload-dragger.js');
var uploadDragger_vue_vue_type_script_lang = require('./upload-dragger.vue_vue_type_script_lang.js');

var script = vue.defineComponent({
  components: {
    UploadDragger: uploadDragger_vue_vue_type_script_lang["default"]
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: "file"
    },
    data: {
      type: Object,
      default: () => null
    },
    headers: {
      type: Object,
      default: () => null
    },
    method: {
      type: String,
      default: "post"
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: null
    },
    accept: {
      type: String,
      default: ""
    },
    onStart: {
      type: Function,
      default: shared.NOOP
    },
    onProgress: {
      type: Function,
      default: shared.NOOP
    },
    onSuccess: {
      type: Function,
      default: shared.NOOP
    },
    onError: {
      type: Function,
      default: shared.NOOP
    },
    beforeUpload: {
      type: Function,
      default: shared.NOOP
    },
    drag: {
      type: Boolean,
      default: false
    },
    onPreview: {
      type: Function,
      default: shared.NOOP
    },
    onRemove: {
      type: Function,
      default: shared.NOOP
    },
    fileList: {
      type: Array,
      default: () => []
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
      default: () => ajax["default"]
    },
    disabled: Boolean,
    limit: {
      type: Number,
      default: null
    },
    onExceed: {
      type: Function,
      default: shared.NOOP
    }
  },
  setup(props) {
    const reqs = vue.ref({});
    const mouseover = vue.ref(false);
    const inputRef = vue.ref(null);
    function uploadFiles(files) {
      if (props.limit && props.fileList.length + files.length > props.limit) {
        props.onExceed(files, props.fileList);
        return;
      }
      let postFiles = Array.from(files);
      if (!props.multiple) {
        postFiles = postFiles.slice(0, 1);
      }
      if (postFiles.length === 0) {
        return;
      }
      postFiles.forEach((rawFile) => {
        props.onStart(rawFile);
        if (props.autoUpload)
          upload(rawFile);
      });
    }
    function upload(rawFile) {
      inputRef.value.value = null;
      if (!props.beforeUpload) {
        return post(rawFile);
      }
      const before = props.beforeUpload(rawFile);
      if (before instanceof Promise) {
        before.then((processedFile) => {
          const fileType = Object.prototype.toString.call(processedFile);
          if (fileType === "[object File]" || fileType === "[object Blob]") {
            if (fileType === "[object Blob]") {
              processedFile = new File([processedFile], rawFile.name, {
                type: rawFile.type
              });
            }
            for (const p in rawFile) {
              if (shared.hasOwn(rawFile, p)) {
                processedFile[p] = rawFile[p];
              }
            }
            post(processedFile);
          } else {
            post(rawFile);
          }
        }).catch(() => {
          props.onRemove(null, rawFile);
        });
      } else if (before !== false) {
        post(rawFile);
      } else {
        props.onRemove(null, rawFile);
      }
    }
    function abort(file) {
      const _reqs = reqs.value;
      if (file) {
        let uid = file;
        if (file.uid)
          uid = file.uid;
        if (_reqs[uid]) {
          ;
          _reqs[uid].abort();
        }
      } else {
        Object.keys(_reqs).forEach((uid) => {
          if (_reqs[uid])
            _reqs[uid].abort();
          delete _reqs[uid];
        });
      }
    }
    function post(rawFile) {
      const { uid } = rawFile;
      const options = {
        headers: props.headers,
        withCredentials: props.withCredentials,
        file: rawFile,
        data: props.data,
        method: props.method,
        filename: props.name,
        action: props.action,
        onProgress: (e) => {
          props.onProgress(e, rawFile);
        },
        onSuccess: (res) => {
          props.onSuccess(res, rawFile);
          delete reqs.value[uid];
        },
        onError: (err) => {
          props.onError(err, rawFile);
          delete reqs.value[uid];
        }
      };
      const req = props.httpRequest(options);
      reqs.value[uid] = req;
      if (req instanceof Promise) {
        req.then(options.onSuccess, options.onError);
      }
    }
    function handleChange(e) {
      const files = e.target.files;
      if (!files)
        return;
      uploadFiles(files);
    }
    function handleClick() {
      if (!props.disabled) {
        inputRef.value.value = null;
        inputRef.value.click();
      }
    }
    function handleKeydown() {
      handleClick();
    }
    return {
      reqs,
      mouseover,
      inputRef,
      abort,
      post,
      handleChange,
      handleClick,
      handleKeydown,
      upload,
      uploadFiles
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=upload.vue_vue_type_script_lang.js.map
