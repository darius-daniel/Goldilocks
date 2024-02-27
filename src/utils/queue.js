class Queue {
  constructor() {
    this.queueItems = [];
  }

  enqueue(value) {
    this.queueItems.push(value);
  }

  dequeue() {
    return this.queueItems.shift();
  }

  peek() {
    return this.queueItems[0];
  }

  size() {
    return this.queueItems.length;
  }

  isEmpty() {
    return this.queueItems.length === 0;
  }

  clear() {
    this.queueItems = [];
  }
}

export default Queue;
