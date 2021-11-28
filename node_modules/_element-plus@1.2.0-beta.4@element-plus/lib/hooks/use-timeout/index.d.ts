export default function (): {
    registerTimeout: (fn: (...args: any[]) => unknown, delay: number) => void;
    cancelTimeout: () => void;
};
