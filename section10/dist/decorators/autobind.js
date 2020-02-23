export function Autobind(_target, _methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjustedDescriptor;
}
//# sourceMappingURL=autobind.js.map