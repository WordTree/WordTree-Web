import './src/index.mjs';
import PopoverDirective, { VPopover } from './src/directive.mjs';
import script from './src/index.vue_vue_type_script_lang.mjs';

script.install = (app) => {
  app.component(script.name, script);
};
PopoverDirective.install = (app) => {
  app.directive(VPopover, PopoverDirective);
};
const _PopoverDirective = PopoverDirective;
script.directive = _PopoverDirective;
const _Popover = script;
const ElPopover = _Popover;
const ElPopoverDirective = _PopoverDirective;

export { ElPopover, ElPopoverDirective, _Popover as default };
//# sourceMappingURL=index.mjs.map
