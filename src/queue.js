const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  getUnderlyingList() {
    return this._node;
  }

  enqueue(value) {
    if (!this._node) {
      this._node = new ListNode(value);
    } else {
      let node = this._node;
      while (node.next) {
        node = node.next;
      }
      node.next = new ListNode(value);
    }
  }

  dequeue() {
    if (!this._node) { return; }

    const val = this._node.value;
    this._node = this._node.next;

    return val;
  }
}

module.exports = {
  Queue
};
