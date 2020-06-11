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
const enqueue = function (pairs, node_to_search, queue, visitedNodes) {
  pairs[node_to_search] &&
    pairs[node_to_search].map((link) => {
      if (!queue.includes(link) && !visitedNodes.includes(link)) {
        queue.push(link);
      }
    });
};
const search = function (pairs, source, target, visitedNodes, queue) {
  if (!(source in pairs)) {
    return false;
  }
  if (source == target && !pairs[source].includes(target)) {
    return false;
  }
  queue.push(source);
  while (queue.length != 0) {
    let node_to_search = queue.shift();
    if (pairs[node_to_search] && pairs[node_to_search].includes(target)) {
      return true;
    }
    visitedNodes.push(node_to_search);
    enqueue(pairs, node_to_search, queue, visitedNodes);
  }
  return false;
};

const bfs = function (pairs, source, target) {
  let visitedNodes = [];
  let queue = [];
  let links = createGraphList(pairs);
  return search(links, source, target, visitedNodes, queue);
};

module.exports = { bfs, createGraphList };
