import { setConfig } from './utils/config.mjs';
import './hooks/index.mjs';
import { version } from './version.mjs';
import { localeProviderMaker, LocaleInjectionKey } from './hooks/use-locale/index.mjs';

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
      const localeProvides = localeProviderMaker(opts.locale);
      app.provide(LocaleInjectionKey, localeProvides);
    }
    app.config.globalProperties.$ELEMENT = option;
    setConfig(option);
  };
  return {
    version,
    install
  };
};

export { makeInstaller as default };
//# sourceMappingURL=make-installer.mjs.map
