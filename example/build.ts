import { build } from 'https://deno.land/x/esbuild@v0.17.15/mod.js';
import { esbuild } from '../deps.ts';
import buildResultPlugin from '../mod.ts';

const config: esbuild.BuildOptions = {
  entryPoints: ['./example/main.ts'],
  bundle: true,
  outdir: './example',
  platform: 'browser',
  plugins: [buildResultPlugin()],
};

await esbuild.build(config);

esbuild.stop();
