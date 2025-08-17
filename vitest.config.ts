import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		include: ["src/**/*.spec.ts", "src/**/*.test.ts"],
		exclude: ["node_modules", "dist"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			include: ["src/**/*.ts"],
			exclude: ["src/**/*.spec.ts", "src/**/*.test.ts", "src/**/*.d.ts"],
			reportsDirectory: "./coverage",
			// Global thresholds - tests will fail if coverage is below these
			thresholds: {
				statements: 90, // 80% statement coverage required
				branches: 90, // 70% branch coverage required
				functions: 90, // 80% function coverage required
				lines: 90, // 80% line coverage required
			},
			// Skip coverage check for files with low impact
			skipFull: false, // Don't skip files with 100% coverage
			all: true, // Include all files in coverage, even untested ones
		},
		clearMocks: true,
	},
	resolve: {
		alias: {
			"@": "./src",
		},
	},
});
