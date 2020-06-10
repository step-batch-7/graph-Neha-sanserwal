const assert = require("chai").assert;
const { createGraphList, bfs } = require("../src/graph");
describe("createGraphList", function () {
  it("should create json of possible paths array of array", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    let expected = { a: ["a", "b", "c"], b: ["a", "c"], c: ["a", "d"] };
    assert.deepStrictEqual(createGraphList(data), expected);
  });
  it("should not add  the destination if already added", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["a", "a"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    let expected = { a: ["a", "b", "c"], b: ["a", "c"], c: ["a", "d"] };
    assert.deepStrictEqual(createGraphList(data), expected);
  });
});

describe("BFS", function () {
  it("should return false if the source is not in the list", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    assert.isFalse(bfs(data, "d", "a"));
  });
});
