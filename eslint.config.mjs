import path from "node:path";

import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

import importPlugin from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

const eslintConfig = [
	{
		ignores: [
			"**/node_modules",
			"**/.DS_Store",
			"**/dist",
			"**/dist-ssr",
			"**/*.local",
			"**/.eslintcache",
			"**/*.mjs",
			"**/*.md",
		],
	},
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
		"prettier"
	),

	{
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			sourceType: "module",
			parserOptions: {
				project: "./tsconfig.eslint.json",
			},
		},

		plugins: {
			import: importPlugin,
		},
		settings: {
			"import/resolver": {
				typescript: {
					// Use <root>/tsconfig.json by default
					project: "./tsconfig.json",
				},
				node: true,
			},
		},

		rules: {
			eqeqeq: "error",
			"no-unused-vars": "off",
			"no-implicit-coercion": "error",
			"consistent-return": "error",
			semi: "error",
			quotes: ["error", "double"],

			"import/order": [
				"error",
				{
					groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
					"newlines-between": "always",
				},
			],

			// ? Disabled as Prettier handles these
			indent: "off",

			"@typescript-eslint/explicit-function-return-type": "error",
			"@typescript-eslint/no-implicit-any": "off",
		},
	},
	{
		files: ["**/*.ts"],

		rules: {
			"@typescript-eslint/indent": "off",
		},
	},
];

export default eslintConfig;
