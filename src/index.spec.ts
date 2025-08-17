import { describe, expect, it } from "vitest";

import { main } from "./index";

describe("Main Function", () => {
	it("should return a string", () => {
		expect(main()).toBe("Welcome to Aether!");
	});
});
