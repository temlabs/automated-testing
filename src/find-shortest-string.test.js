// import function from local file
const findShortestString = require("./find-shortest-string");

test("findLongestString finds the longest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("nice");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("hello");
});

test("findLongestString doesn't return a shorter string in an array", () => {
  expect(findShortestString(["this", "is", "a", "test"])).toBe("this");
});

test("findLongestString returns the earlier string in cases of joint longest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["two", "one", "yes"])).toBe("two");
  expect(findShortestString(["temi", "emma", "tedo", "lily"])).toBe("temi");
});
