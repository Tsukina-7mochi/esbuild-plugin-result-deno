# esbuild result plugin for Deno

## Overview

A plugin for esbuild on Deno that shows build result.

## Example

```typescript
const config: Partial<esbuild.BuildOptions> = {
  entryPoints: [
    posix.join(srcPath, 'main.ts'),
  ],
  bundle: true,
  outdir: destPath,
  platform: 'browser',
  plugins: [
    buildResultPlugin(),
  ],
};
```
