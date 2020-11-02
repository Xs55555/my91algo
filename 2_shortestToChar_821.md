### 题目
https://leetcode-cn.com/problems/shortest-distance-to-a-character/

### 思路

1. 从前往后遍历，得出从0到i时，与当前字符s[i]等于C的最近距离
2. 从后往前遍历，得出从i-1到i时，与当前字符s[i]等于C的最近距离
3. 求1和2的最小值即可

### 代码
```javascript
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let res = [];
    // 因为S是[0, 10000]，所以直接初始化为-10000表示相对小即可
    let prev = -10001;
    
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) == C) {
            prev = i;
        }
        res[i] = i - prev;
    }

    // 初始化为相对大值
    prev = 10001;
    for (let i = S.length - 1; i >= 0; i--) {
        if (S.charAt(i) == C) {
            prev = i;
        }
        res[i] = Math.min(res[i], prev - i);
    }

    return res;
};
```
### 复杂度
* 时间复杂度O(n), n为S的长度
* 空间复杂度O(n)