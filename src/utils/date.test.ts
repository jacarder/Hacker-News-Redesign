import { createTimeLabel } from "./date";
describe("Date Utility", () => {
	const today = new Date("September 16, 2022 12:12:12");
	describe("createTimeLabel", () => {
		it.each([
			[1663344722, "10 seconds ago"],
			[1663344132, "10 minutes ago"],
			[1663337532, "2 hours ago"],
			[1663168332, "2 days ago"]
			//[1660752732, "1 months ago"],
			//[1610644332, "1 year ago"]
		])("%s compared to string returned %s", (unixTimestamp, expected) => {
			const generatedLabel = createTimeLabel(unixTimestamp, today);
			expect(generatedLabel).toBe(expected);
		});
	});
});
