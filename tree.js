const rootA = document.getElementById("rootA");
const rootB = document.getElementById("rootB");
const nodeA = document.getElementById("nodeA");

// []
function getPathFromNode(root, node) {
  let path = [];
  let currentNode = node;

  while (currentNode !== root) {
    let parent = currentNode.parentElement;

    // Because its an HTMLCollection
    let children = Array.from(parent.children);
    let index = children.indexOf(currentNode);
    path.push(index);
    currentNode = parent;
  }
  return path;
}

function getNodeFromPath(root, pathToNode) {
  let currentNode = root;
  while (pathToNode.length) {
    currentNode = currentNode.children[pathToNode.pop()];
  }
  return currentNode;
}

function getSymmetricNode(rootA, rootB, nodeA) {
  let pathToNode = getPathFromNode(rootA, nodeA);
  let nodeFromPath = getNodeFromPath(rootB, pathToNode);
  return nodeFromPath;
}

const nodeB = getSymmetricNode(rootA, rootB, nodeA);
