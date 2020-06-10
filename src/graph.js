//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const createGraphList = function (data) {
  let list = {};
  for (const [source, destination] of data) {
    if (!list[source]) {
      list[source] = [];
    }
    if (!list[source].includes(destination)) {
      list[source].push(destination);
    }
  }
  return list;
};
let visitedNodes = [];
const bfs = function (pairs, source, target) {
  let links = createGraphList(pairs);
  if (!(source in links)) {
    return false;
  }
  if (links[source].includes(target)) {
    visitedNodes = [];
    return true;
  }
  visitedNodes.push(source);
  for (const newSource of links[source]) {
    if (!visitedNodes.includes(newSource)) {
      return bfs(newSource, target);
    }
  }
  return false;
};

module.exports = { bfs, createGraphList };
