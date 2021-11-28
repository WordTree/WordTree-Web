import Tooltip from './src/index.mjs';

Tooltip.install = (app) => {
  app.component(Tooltip.name, Tooltip);
};
const _Tooltip = Tooltip;
const ElTooltip = _Tooltip;

export { ElTooltip, _Tooltip as default };
//# sourceMappingURL=index.mjs.map
