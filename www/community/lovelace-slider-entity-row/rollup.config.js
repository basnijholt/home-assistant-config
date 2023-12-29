import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";

const dev = process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    file: "slider-entity-row.js",
    format: "es",
  },
  plugins: [
    nodeResolve(),
    json(),
    typescript(),
    getBabelOutputPlugin({ presets: ["@babel/preset-env"] }),
    !dev && terser({ format: { comments: false } }),
  ],
};
