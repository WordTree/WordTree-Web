import { withInstallFunction } from '../../utils/with-install.mjs';
import notify from './src/notify.mjs';
export { notificationEmits, notificationProps, notificationTypes } from './src/notification.mjs';

const ElNotification = withInstallFunction(notify, "$notify");

export { ElNotification, ElNotification as default };
//# sourceMappingURL=index.mjs.map
