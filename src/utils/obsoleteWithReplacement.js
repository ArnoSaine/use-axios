export default function obsoleteWithReplacement(
  replacementFunction,
  oldFnName
) {
  let warned;
  function wrapper(...args) {
    if (!warned && console && console.warn) {
      warned = true;
      console.warn(
        `WARNING! Obsolete function called. Function '${oldFnName}' has been deprecated and will be removed in the next major release, please use the new '${replacementFunction.name}' function instead!`
      );
    }
    this::replacementFunction(...args);
  }
  wrapper.prototype = replacementFunction.prototype;

  return wrapper;
}
