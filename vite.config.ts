// Hono
import devServer from "@hono/vite-dev-server";

// Cloudflare Pages
import { pages as cfPages } from "vike-cloudflare";

// Vike
import vikeSolid from "vike-solid/vite";
import vike from "vike/plugin";

// Vite
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, ".");

export default defineConfig({
  plugins: [
    cfPages(),
    devServer({
      entry: "server.ts",

      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],

      injectClientScript: false,
    }),
    vike({}),
    vikeSolid(),
  ],
  resolve: {
    alias: {
      "@": resolve(root, "src"),
    },
  },
});
