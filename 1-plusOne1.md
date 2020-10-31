# 思路

题目要求数组每个元素只能存单个数字，如果最后一个是9，则加1后会进位，所以要分为最后一位是9和不是9的情况。



 从后往前遍历，如果当前位

1. `不是9`:  当前位直接加1后返回
2.  `是9`:  则当前位是0，继续向前循环，再次判断执行1、2

3. 如果是类似99、999...之类数组，循环结束后还需要在首位加入一个进位的1



# 代码

```javascript
/**
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    // 99、999... 等特殊情况，在开头添加1
    digits.unshift(1);
    return digits;
};
```


# 复杂度

* 时间复杂度O(n) , n为数组长度

  > 最好时数组最后一位不是9，只需要执行一次，即最好时间复杂度O(1)
  >
  > 最坏时数组都是9，需要循环n次，即最坏时间复杂度O(n)
  >
  > 平均时间复杂度O(n)

* 空间复杂度O(1)


```javascript
/**
 * 解法2: 利用bigint大数相加，直接转成数字后加1，再转成数组
 *
 * 时间复杂度O(1)
 * 空间复杂度O(1)
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const num = BigInt(digits.join(''));    
    return (num + BigInt(1)).toString().split('');
};

```