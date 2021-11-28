'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var configProvider = require('./config-provider.js');
var index = require('../../../hooks/use-locale/index.js');
var configProvider$1 = require('../../../tokens/config-provider.js');

const ConfigProvider = vue.defineComponent({
  name: "ElConfigProvider",
  props: configProvider.configProviderProps,
  setup(props, { slots }) {
    index.useLocale();
    vue.provide(configProvider$1.configProviderContextKey, props);
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

exports.ConfigProvider = ConfigProvider;
//# sourceMappingURL=index.js.map
