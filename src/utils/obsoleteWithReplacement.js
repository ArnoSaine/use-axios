export default function obsoleteWithReplacement(
  replacementFunction,
  oldFn,
  newFn
) {
  let warned;
  function wrapper(...args) {
    if (!warned) {
      warned = true;
      console?.warn?.(
        `WARNING! Obsolete function called. ${oldFn} has been deprecated and will be removed in the next major release. Please use the new ${newFn} instead.`
      );
    }
    return this::replacementFunction(...args);
  }
  wrapper.prototype = replacementFunction.prototype;

  return wrapper;
}
