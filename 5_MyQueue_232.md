### 思路
解法1:用一个数组(栈)来维护一个队列(数组的头部是队列尾部，数组尾部是队列头部，队头出队，队尾入队)
* 出队直接取数组队最后一个元素
* 入队需要插入数组队的头部，利用辅助栈，先把数据搬移到辅助栈，push入数据，然后再把辅助栈队数据放入原始栈

解法2:用两个数组(栈)实现队列
* 入列时直接插入数据栈stack
* 出列时，因为先入列的元素在stack栈底，需要先他们弹出依次压入辅助栈helperStack
* 栈底元素弹出pop出队列
* 第2布中辅助栈heplerStack的元素一次弹出，重新压入数据栈stack

### 代码
```javascript
/**
 * 解法2
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.dataStack = []; // 数组第一个元素是队尾，最后一个是队头
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let helpStack = [];
    while(this.dataStack.length !== 0) {
        helpStack.push(this.dataStack.pop());
    }
    this.dataStack.push(x);
    while(helpStack.length) {
        this.dataStack.push(helpStack.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.dataStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.dataStack[this.dataStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.dataStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 复杂度
* 时间复杂度 `push:O(n)` `pop:O(1)` `peek:O(1)` `empty:O(1)`
* 空间复杂度  都是O(1)
