import { esbuild } from './deps.ts';

const getTimeString = () => {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

const buildResultPlugin = (): esbuild.Plugin => {
  let startTime = 0;
  let endTime = 0;
  return {
    name: 'build-result-plugin',
    setup(build) {
      build.onStart(() => {
        startTime = Date.now();
      });
      build.onEnd((result) => {
        endTime = Date.now();

        if (result.errors.length > 0) {
          // deno-fmt-ignore
          console.log(`\x1b[1m${getTimeString()}\x1b[0m Build failed with ${result.errors.length} errors.`);
        } else {
          // deno-fmt-ignore
          console.log(`\x1b[1m${getTimeString()}\x1b[0m Build succeeded in ${endTime - startTime}ms`);
        }
      });
    },
  };
};

export default buildResultPlugin;
