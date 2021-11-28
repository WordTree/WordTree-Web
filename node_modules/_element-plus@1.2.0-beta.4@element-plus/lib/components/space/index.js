'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var space = require('./src/space.js');
var useSpace = require('./src/use-space.js');

const ElSpace = withInstall.withInstall(space["default"]);

exports.spaceProps = space.spaceProps;
exports.useSpace = useSpace.useSpace;
exports.ElSpace = ElSpace;
exports["default"] = ElSpace;
//# sourceMappingURL=index.js.map
