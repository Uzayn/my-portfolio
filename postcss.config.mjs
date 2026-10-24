import path from "node:path";

// Turbopack occasionally runs PostCSS with no file path (an empty or
// directory-only `from`). @tailwindcss/postcss then resolves imports from the
// parent of the project and logs "Can't resolve 'tailwindcss'". Pinning
// the entry stylesheet as the fallback path keeps every run inside the project.
const entryStylesheet = path.join(process.cwd(), "src/app/globals.css");

const ensureFromPath = {
  postcssPlugin: "ensure-from-path",
  Once(_root, { result }) {
    const from = result.opts.from;
    if (!from || !path.extname(from)) {
      result.opts.from = entryStylesheet;
    }
  },
};

const config = {
  plugins: [ensureFromPath, "@tailwindcss/postcss"],
};

export default config;
