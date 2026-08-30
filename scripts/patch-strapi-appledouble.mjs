import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const patches = [
  {
    file: "node_modules/@strapi/core/dist/configuration/config-loader.js",
    marker: "if (file.name.startsWith('._'))",
    needle: `        if (!file.isFile()) {
            return acc;
        }`,
    patch: `        if (!file.isFile()) {
            return acc;
        }
        if (file.name.startsWith('._')) {
            return acc;
        }`,
  },
  {
    file: "node_modules/@strapi/core/dist/loaders/apis.js",
    marker: "fd.name.startsWith('._')",
    needle: `        if (!fd.isFile() || path.extname(fd.name) === '.map') {
            continue;
        }`,
    patch: `        if (!fd.isFile() || path.extname(fd.name) === '.map' || fd.name.startsWith('._')) {
            continue;
        }`,
  },
  {
    file: "node_modules/@strapi/core/dist/loaders/policies.js",
    marker: "!name.startsWith('._')",
    needle: `        if (fd.isFile() && path.extname(name) === '.js') {`,
    patch: `        if (fd.isFile() && path.extname(name) === '.js' && !name.startsWith('._')) {`,
  },
  {
    file: "node_modules/@strapi/core/dist/loaders/middlewares.js",
    marker: "!name.startsWith('._')",
    needle: `        if (fd.isFile() && path.extname(name) === '.js') {`,
    patch: `        if (fd.isFile() && path.extname(name) === '.js' && !name.startsWith('._')) {`,
  },
];

let applied = 0;

for (const { file, marker, needle, patch } of patches) {
  const target = join(process.cwd(), file);
  let source = readFileSync(target, "utf8");

  if (source.includes(marker)) {
    continue;
  }

  if (!source.includes(needle)) {
    throw new Error(`Could not patch ${file}: expected anchor not found`);
  }

  writeFileSync(target, source.replace(needle, patch));
  applied += 1;
}

if (applied > 0) {
  console.log(
    `Patched Strapi loaders to ignore macOS ._ files (${applied} file(s))`,
  );
}
