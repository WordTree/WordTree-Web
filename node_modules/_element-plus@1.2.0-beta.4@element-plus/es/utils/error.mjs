class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(new ElementPlusError(`[${scope}] ${message}`));
  }
}

export { debugWarn, throwError };
//# sourceMappingURL=error.mjs.map
