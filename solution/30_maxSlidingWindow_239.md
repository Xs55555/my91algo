
## 题目
**239. 滑动窗口最大值**
>困难

给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

进阶：

你能在线性时间复杂度内解决此题吗？

 

示例:
```
输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
```

提示：
* 1 <= nums.length <= 10^5
* -10^4 <= nums[i] <= 10^4
* 1 <= k <= nums.length

>来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sliding-window-maximum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解法：滑动窗口
### 思路
维护一个窗口window数组，里面存数组的下标，数组元素单调递减
1. 每次窗口扩大时，判断是否不包含最大元素，是的话需要把window最左边的元素去掉
2. 每进入一个值num，从数组右边开始比较，num大于等于数组最后一个值，就把该值删掉，维护单调递减
3. num的下标加入数组中，最后如果下标大于等于窗口大小，则取数组第一个值对应的元素存入结果，即当前窗口中nums的最大值加入结果

   
### 代码
```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let res = [];
    // 窗口存放nums的下标，最左边下标对应的nums的值最大，window的元素对应的nums的元素是单调递减的
    let window = []; 
 
    for (let i = 0; i < nums.length; i++) {
        // 窗口扩大后，原先窗口不包含原先最大的那个数，需要把window最左边的元素去掉，即缩小窗口
        if (window.length && window[0] <= i - k) {
            window.shift();
        }

        const num = nums[i];
        // 新加入的元素比窗口(从右往左)元素的对应的nums值大，则删除窗口的元素
        while(window.length && nums[window[window.length - 1]] < num) {
            window.pop();
        }

        // 加入新元素的下标
        window.push(i);

        // 是否等于或超过第一个窗口，是的话加入最大元素nums[window[0]]
        if (i >= k - 1) {
            res.push(nums[window[0]]);
        }
    }

    return res;
};

```
### 复杂度
* 时间复杂度O(n)， n为nums的长度
* 空间复杂度O(n)

