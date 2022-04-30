const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._node = null;
  }

  root() {
    return this._node;
  }

  add(data) {
    if (!this._node) {
      this._node = new Node(data);
      return this._node;
    }

    let curNode = this._node;
    while (curNode) {
      if (data < curNode.data) {
        if (curNode.left) {
          curNode = curNode.left;
        } else {
          curNode.left = new Node(data);
          return curNode.left;
        }
      } else if (data > curNode.data) {
        if (curNode.right) {
          curNode = curNode.right;
        } else {
          curNode.right = new Node(data);
          return curNode.left;
        }
      } else {
        return;
      }
    }
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let curNode = this._node;
    while (curNode) {
      if (data < curNode.data) {
        if (curNode.left) {
          curNode = curNode.left;
        } else {
          return null;
        }
      } else if (data > curNode.data) {
        if (curNode.right) {
          curNode = curNode.right;
        } else {
          return null;
        }
      } else if (data == curNode.data) {
        return curNode;
      } else {
        return null
      };
    }
  }

  remove(data) {
    const getChildValues = (node) => {
      let res = [];
      if (!node) {
        return res;
      }

      if (node.left) {
        res.push(node.left.data);
        res = [...res, ...getChildValues(node.left)];
      }

      if (node.right) {
        res.push(node.right.data);
        res = [...res, ...getChildValues(node.right)];
      }

      return res;
    }

    let curNode = this._node;
    let prev;

    if (this._node.data == data) {
      let childsData = getChildValues(curNode);
      this._node = null;
      for (const child of childsData) {
        this.add(child)
      }
    }

    while (curNode) {
      if (data < curNode.data) {
        if (curNode.left) {
          prev = curNode;
          curNode = curNode.left;
          if (curNode && curNode.data == data) {
            let childsData = getChildValues(curNode);
            console.log('remove-');
            console.log(curNode);
            prev.left = null;
            for (const child of childsData) {
              this.add(child)
            }
            console.log(data, childsData)
            console.log('remove!');

            return;
          }
        } else {
          return;
        }
      } else if (data > curNode.data) {
        if (curNode.right) {
          prev = curNode;
          curNode = curNode.right;
          if (curNode && curNode.data == data) {
            let childsData = getChildValues(curNode);
            console.log('remove-');
            console.log(curNode);
            prev.right = null;
            for (const child of childsData) {
              this.add(child)
            }
            console.log(data, childsData)
            console.log('remove!');
            return;
          }
        } else {
          return;
        }
      } else {
        return;
      };
    }
  }

  min() {
    let curNode = this._node;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    let curNode = this._node;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree
};