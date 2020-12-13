import fs from 'fs-extra';

const isScoped = process.env.npm_package_name.startsWith('@');

['loading-state'].forEach((target) => {
  fs.ensureDirSync(target);
  fs.writeJsonSync(
    `${target}/package.json`,
    {
      name: `${isScoped ? '' : '@'}${process.env.npm_package_name}${
        isScoped ? '-' : '/'
      }${target}`,
      version: process.env.npm_package_version,
      main: '../cjs/loading-state/main.js',
      module: '../mjs/loading-state/main.js',
    },
    { spaces: 2 }
  );
});
