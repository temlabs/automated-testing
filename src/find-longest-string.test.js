// import function from local file
const findLongestString = require("./find-longest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findLongestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString doesn't return a shorter string in an array", () => {
  expect(findLongestString(["this", "is", "a", "test"])).toBe("this");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["two", "one", "yes"])).toBe("two");
  expect(findLongestString(["temi", "emma", "tedo", "lily"])).toBe("temi");
});
