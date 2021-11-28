'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../hooks/index.js');
var props = require('../../../utils/props.js');
var index = require('../../../hooks/use-locale/index.js');

const configProviderProps = {
  ...index.useLocaleProps,
  button: props.buildProp({
    type: props.definePropType(Object),
    default: () => {
      return props.mutable({
        autoInsertSpace: true
      });
    }
  })
};

exports.configProviderProps = configProviderProps;
//# sourceMappingURL=config-provider.js.map
