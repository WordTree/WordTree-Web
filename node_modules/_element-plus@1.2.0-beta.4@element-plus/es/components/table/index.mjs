import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/table.mjs';
import './src/tableColumn.mjs';
import script from './src/table.vue_vue_type_script_lang.mjs';
import ElTableColumn$1 from './src/table-column/index.mjs';

const ElTable = withInstall(script, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);

export { ElTable, ElTableColumn, ElTable as default };
//# sourceMappingURL=index.mjs.map
