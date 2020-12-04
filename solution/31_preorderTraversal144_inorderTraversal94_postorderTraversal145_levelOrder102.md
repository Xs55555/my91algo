### 144.二叉树的前序遍历
#### 思路
递归前序遍历即可
#### 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];
   
    this.preOrder = function(root) {
        if (root) {
            result.push(root.val);
            preOrder(root.left);
            preOrder(root.right);
        }   
    }

    preOrder(root);
    return result;
};
```
#### 复杂度
* 时间复杂度：O(n)，n 是二叉树的节点数
* 空间复杂度：O(n)，为递归栈的深度，平均情况下为 O(logn)，最坏情况下树退化成链表，为 O(n)

### 94. 二叉树的中序遍历
#### 思路
递归
#### 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    this.inOrder = function(root) {
        if (root == null) {
            return;
        }
        inOrder(root.left);
        result.push(root.val);
        inOrder(root.right);
    }
    inOrder(root);
    return result;
};
```
#### 复杂度
* 时间复杂度：O(n)，n 是二叉树的节点数
* 空间复杂度：O(n)，递归栈的深度，最坏时树退化成链表是O(n)

### 145. 二叉树的后序遍历
#### 思路
递归
#### 代码
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];

    this.postOrder = function(root) {
        if (root == null) {
            return;
        }
        postOrder(root.left);
        postOrder(root.right);
        result.push(root.val);
    } 
    
    postOrder(root);
    return result;
};
```
#### 复杂度
* 时间复杂度：O(n)，n 是二叉树的节点数
* 空间复杂度：O(n)，递归栈的深度，最坏时树退化成链表是O(n)

###  102. 二叉树的层序遍历 
#### 思路
一层层遍历
#### 代码
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root == null) {
        return [];
    }

    let result = [];
    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;

        // 当前层级的结果
        let curLevelResult = [];

        // 遍历当前层级的结果
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            curLevelResult.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(curLevelResult);
    }

    return result;
};

```
#### 复杂度
* 时间复杂度：O(n)，n为树的节点数
* 空间复杂度：O(n)
  