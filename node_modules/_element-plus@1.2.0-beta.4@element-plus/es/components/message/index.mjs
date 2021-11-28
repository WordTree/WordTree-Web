import { withInstallFunction } from '../../utils/with-install.mjs';
import message from './src/message-method.mjs';
export { messageEmits, messageProps, messageTypes } from './src/message.mjs';

const ElMessage = withInstallFunction(message, "$message");

export { ElMessage, ElMessage as default };
//# sourceMappingURL=index.mjs.map
