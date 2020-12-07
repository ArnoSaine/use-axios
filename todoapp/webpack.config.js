export default _env => config => {
  config.resolve.alias.react = require.resolve('react');
  return config;
};
