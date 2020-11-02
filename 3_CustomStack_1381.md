### 题目
https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

### 思路
直接用数组模拟栈，push和pop时只需要操作数组原生的方法即可

### 代码
```javascript
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length >= this.maxSize) {
        return;
    }
    this.stack.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    return this.stack.length ? this.stack.pop() : -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let length = Math.min(k, this.stack.length);
    for (let i = 0; i < length; i++) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```

### 复杂度
* 时间复杂度 push:O(1)、pop：O(1)、increment：O(N) N为min(K, 栈中元素的个数)
* 空间复杂度 O(N), N为maxSize


