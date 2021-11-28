'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var descriptionsCell = require('./descriptions-cell.js');
var token = require('./token.js');

var script = vue.defineComponent({
  name: "ElDescriptionsRow",
  components: {
    [descriptionsCell["default"].name]: descriptionsCell["default"]
  },
  props: {
    row: {
      type: Array
    }
  },
  setup() {
    const descriptions = vue.inject(token.elDescriptionsKey, {});
    return {
      descriptions
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=descriptions-row.vue_vue_type_script_lang.js.map
