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
  it("should return true if the destination is present in source list", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    assert.isTrue(bfs(data, "a", "c"));
  });
  it("should return true if the destination is  source when source is circularly linked to self", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    assert.isTrue(bfs(data, "a", "a"));
  });

  it("should not validate if the destination is source when source is not circularly linked to self", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    assert.isFalse(bfs(data, "c", "c"));
  });
  it("should validate if the destination is linked to source via one node", function () {
    let data = [
      ["a", "a"],
      ["a", "b"],
      ["a", "c"],
      ["b", "a"],
      ["b", "c"],
      ["c", "a"],
      ["c", "d"],
    ];
    assert.isFalse(bfs(data, "c", "b"));
  });
});
