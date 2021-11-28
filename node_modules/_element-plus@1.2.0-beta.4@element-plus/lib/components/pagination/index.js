'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var pagination = require('./src/pagination.js');

const ElPagination = withInstall.withInstall(pagination["default"]);

exports.paginationEmits = pagination.paginationEmits;
exports.paginationProps = pagination.paginationProps;
exports.ElPagination = ElPagination;
exports["default"] = ElPagination;
//# sourceMappingURL=index.js.map
