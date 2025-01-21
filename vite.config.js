// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     jsxInject: 'import React from "react"',
//     jsxFactory: "React.createElement",
//     jsxFragment: "React.Fragment",
//   },
//   build: {
//     target: "esnext", // or a lower target like 'es2015'
//     // Alternatively, enable polyfills
//     polyfillDynamicImport: true,
//   },
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Root-level deployment
  plugins: [react()],
});
