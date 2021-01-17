/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [];
    /**
     * 
     * @param {*} root 
     * @param {*} path 当前路径
     * @param {*} treeSum 当前路径和
     */
    var dfs = function(root, path, treeSum) {
        // 终止条件
        if (!root) {
            return;
        }
        
        path.push(root.val);
        treeSum += root.val;

        // 叶子节点，判断是否等于目标结果
        if (!root.left && !root.right) {
            if (treeSum == sum) {
                res.push(path.slice());
            }
        } else {
            // 递归左右子树
            dfs(root.left, path, treeSum);
            dfs(root.right, path, treeSum);
        }
        
        // 撤销
        path.pop();
    }
    
    dfs(root, [], 0);
    return res;
};