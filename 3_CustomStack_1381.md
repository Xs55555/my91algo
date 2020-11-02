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

### 其他解法
```javascript
/**
 * 
 * 在解法1的基础上把increment的时间复杂度降为O(1)
 * 
 * 思路：增加哈希表存储空间(数组也行)，key是数组下标，value是当前索引的增量
 * 在pop时才去增加增量，类似按需加载，而不是在increment时为栈的元素都添加增量
 * 
 */
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
    this.hashMap = {}; // key是数组下标，value是当前应该加的增量
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    let top = this.stack.length - 1;
    if (top < 0) {
        return -1;
    }
    
    let result = this.stack.pop();
    const incValue = this.hashMap[top] || 0;
    result += incValue; // 加上增量

    // top-1 也需要加上top的增量，因为在increment时，下标大的包含下标小的
    const newTop = top - 1;
    this.setIncValue(newTop, incValue);

    this.hashMap[top] = 0;
    return result;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let index = Math.min(k, this.stack.length) - 1;
    if (index < 0) {
        return;
    }

    this.setIncValue(index, val);
};

CustomStack.prototype.setIncValue = function (key, value) {
    if (!(key in this.hashMap)) {
        this.hashMap[key] = 0;
    }
    this.hashMap[key] += value;
};
/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```
