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

const search = function (links, source, target, visitedNodes) {
  if (!(source in links)) {
    return false;
  }
  if (source == target && !links[source].includes(target)) {
    return false;
  }
  if (links[source].includes(target)) {
    visitedNodes = [];
    return true;
  }
  visitedNodes.push(source);
  for (const newSource of links[source]) {
    if (!visitedNodes.includes(newSource)) {
      return search(links, newSource, target, visitedNodes);
    }
  }
  return false;
};
const bfs = function (pairs, source, target) {
  let visitedNodes = [];
  let links = createGraphList(pairs);
  return search(links, source, target, visitedNodes);
};

module.exports = { bfs, createGraphList };
