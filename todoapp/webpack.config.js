import path from 'path';

export default env => config => {
  config.resolve.alias.react = path.resolve('./node_modules/react');
  return config;
};
