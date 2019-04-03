import Dotenv from 'dotenv-webpack';
import addIntl from '@visma/create-react-app-template/cjs/webpack/config/addIntl';
import path from 'path';

export default _env => config => {
  addIntl(config, ['fi', 'en']);

  const {
    plugins,
    resolve: { alias, modules }
  } = config;

  plugins.push(new Dotenv());

  alias.react = path.resolve('./node_modules/react');

  modules.push('shared');

  return config;
};
