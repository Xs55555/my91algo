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
    let prev = Number.MIN_SAFE_INTEGER / 2;
    
    for (let i = 0; i < S.length; i++) {
        if (S.charAt(i) == C) {
            prev = i;
        }
        res[i] = i - prev;
    }

    prev = Number.MAX_SAFE_INTEGER;
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