import type { Message } from './message';
import type { VNode } from 'vue';
export declare function close(id: string, userOnClose?: (vm: VNode) => void): void;
export declare function closeAll(): void;
declare const _default: Message;
export default _default;
