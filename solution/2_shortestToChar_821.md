### 题目
**821. 字符的最短距离**
>简单

给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:
```
输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
```
说明:

1. 字符串 S 的长度范围为 [1, 10000]。
2. C 是一个单字符，且保证是字符串 S 里的字符。
3. S 和 C 中的所有字母均为小写字母。

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 思路

其实是要计算字符串S中每个字符向左或向右距离目标字符的最近距离;

比如示例1: t字符向左距离e最近的距离是1，向右距离e最近的距离是4，所以t距离e最近的距离是min(1, 4)=1



1. `从前往后`遍历，当前索引为i，得出从0到i时，即i向左当前字符s[i]距离目标字符最近的距离
2. `从后往前`遍历，得出从i-1到i时，即i向右当前字符s[i]距离目标字符最近的距离
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
        // 取向左和向右中的最小值
        res[i] = Math.min(res[i], prev - i);
    }

    return res;
};
```
### 复杂度
* 时间复杂度O(n), n为S的长度
* 空间复杂度O(n)