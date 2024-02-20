import Queue from '../utils/queue.js';
import Sinon from 'sinon';
import { expect } from 'chai';

describe('Queue', function () {
  before(function () {
    const queueStub = Sinon.stub(Queue);
  });

  it('New queue', () => {
    const queue = new Queue();

    expect(queue.size()).to.equal(0);
    expect(queue.queueItems).deep.equal([]);
  });

  it('Enqueue', () => {
    const queue = new Queue();

    queue.enqueue('Darius');
    queue.enqueue(4);
    queue.enqueue({ 'name': 'Goldilocks', 'age': 1 });
    queue.enqueue(true);
    queue.enqueue(null);
    expect(queue.size()).to.equal(5);
    expect(queue.queueItems).deep.equal(['Darius', 4, { 'name': 'Goldilocks', 'age': 1 }, true, null]);
  });

  it('Dequeue', () => {
    const queue = new Queue();

    queue.enqueue('Darius');
    queue.enqueue(4);
    queue.enqueue({ 'name': 'Goldilocks', 'age': 1 });
    queue.enqueue(true);
    queue.enqueue(null);

    expect(queue.size()).to.equal(5);

    expect(queue.dequeue()).to.equal('Darius');
    expect(queue.size()).to.equal(4);

    expect(queue.dequeue()).to.equal(4);
    expect(queue.size()).to.equal(3);

    expect(queue.dequeue()).deep.equal({ 'name': 'Goldilocks', 'age': 1 });
    expect(queue.size()).to.equal(2);

    expect(queue.dequeue()).to.be.true;
    expect(queue.size()).to.equal(1);

    expect(queue.dequeue()).to.be.null;
    expect(queue.size()).to.equal(0);

    expect(queue.dequeue()).to.be.undefined;
    expect(queue.size()).to.equal(0);
  });


  it('Peek', () => {
    const queue = new Queue();

    queue.enqueue('Darius');
    queue.enqueue(4);
    queue.enqueue({ 'name': 'Goldilocks', 'age': 1 });
    queue.enqueue(true);
    queue.enqueue(null);

    expect(queue.size()).to.equal(5);

    queue.dequeue();
    expect(queue.peek()).to.equal(4);
    expect(queue.size()).to.equal(4);

    queue.dequeue();
    expect(queue.peek()).deep.equal({ 'name': 'Goldilocks', 'age': 1 });
    expect(queue.size()).to.equal(3);

    queue.dequeue();
    expect(queue.peek()).to.be.true;
    expect(queue.size()).to.equal(2);

    queue.dequeue();
    expect(queue.peek()).to.be.null;
    expect(queue.size()).to.equal(1);

    queue.dequeue();
    expect(queue.peek()).to.be.undefined;
    expect(queue.size()).to.equal(0);
  });

  it("Is Empty", () => {
    const queue = new Queue();

    expect(queue.isEmpty()).to.be.true;

    queue.enqueue(0);
    expect(queue.isEmpty()).to.be.false;
  });

  it ('Clear', () => {
    const queue = new Queue();
    
    expect(queue.size()).to.equal(0);

    queue.enqueue(1);
    expect(queue.size()).to.equal(1);

    queue.clear();
    expect(queue.size()).to.equal(0);
    expect(queue.dequeue()).to.be.undefined;
    expect(queue.peek()).to.be.undefined;
  });
});
