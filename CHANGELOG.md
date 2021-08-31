# 1.0.0

- Fix ES module usage
- Update TodoMVC example

# 0.3.7

- Fix `create` function. Return an object with named functions instead of an array.
- Fix deprecated `reload` function. Return value.

# 0.3.6

- Use `@postinumero/use-async` for handling suspense
- Update dependencies
- Remove axios from peer dependencies (axios still needs to be installed manually)

# 0.3.5

- Add named export `useAxios` (same as the default export)
- Update dependencies
- Minor internal changes
- Update readme

# 0.3.4

- Update readme

# 0.3.3

- Optimize refetch

# 0.3.2

- Add `create` function to use custom axios instance
- Bring back removed `reload` function with a deprecation warning

# 0.3.1

- Update readme

# 0.3.0

- **Breaking change:** rename `reload` → `refetch`
- Add `useAxiosSafe`
- Add `axios` to `peerDependencies`
- Update dependencies

# 0.2.1

- Fix error when calling `reload` with unknown request parameters
- Use recommended `forceUpdate`

# 0.2.0

- Update dependencies

# 0.1.3

- Update readme and example
- Update dependencies

# 0.1.2

- Fix create key from all arguments

# 0.1.1

- Update dependencies

# 0.1.0

- First release
