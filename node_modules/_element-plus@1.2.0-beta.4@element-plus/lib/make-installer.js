'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var config = require('./utils/config.js');
require('./hooks/index.js');
var version = require('./version.js');
var index = require('./hooks/use-locale/index.js');

const makeInstaller = (components = []) => {
  const apps = [];
  const install = (app, opts) => {
    const defaultInstallOpt = {
      size: "",
      zIndex: 2e3
    };
    const option = Object.assign(defaultInstallOpt, opts);
    if (apps.includes(app))
      return;
    apps.push(app);
    components.forEach((c) => {
      app.use(c);
    });
    if (option.locale) {
      const localeProvides = index.localeProviderMaker(opts.locale);
      app.provide(index.LocaleInjectionKey, localeProvides);
    }
    app.config.globalProperties.$ELEMENT = option;
    config.setConfig(option);
  };
  return {
    version: version.version,
    install
  };
};

exports["default"] = makeInstaller;
//# sourceMappingURL=make-installer.js.map
