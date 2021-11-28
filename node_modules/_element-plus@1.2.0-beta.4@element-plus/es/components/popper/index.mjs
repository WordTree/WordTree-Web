import './src/index.mjs';
export { Effect, default as popperDefaultProps } from './src/use-popper/defaults.mjs';
import './src/renderers/index.mjs';
export { default as usePopper } from './src/use-popper/index.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';
export { default as renderPopper } from './src/renderers/popper.mjs';
export { default as renderTrigger } from './src/renderers/trigger.mjs';
export { default as renderArrow } from './src/renderers/arrow.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
const _Popper = script;
const ElPopper = _Popper;

export { ElPopper, _Popper as default };
//# sourceMappingURL=index.mjs.map
