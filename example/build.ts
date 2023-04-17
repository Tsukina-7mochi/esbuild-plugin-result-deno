import { esbuild } from '../deps.ts';
import buildResultPlugin from '../mod.ts';

const config: esbuild.BuildOptions = {
  entryPoints: ['./example/main.ts'],
  bundle: true,
  outdir: './example/dist',
  platform: 'browser',
  plugins: [buildResultPlugin()],
};

await esbuild.build(config);

esbuild.stop();
