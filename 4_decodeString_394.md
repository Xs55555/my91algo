### 题目
https://leetcode-cn.com/problems/decode-string/

### 思路
利用栈，遇到 "数字" 、"["、"字母" 入栈，遇到"["出栈，计算出"[ ]"之间要的字符串符合重复的次数后的字符串A，然后A再入栈，最后把栈的元素拼接起来即可

### 代码
```javascript
function decodeString(S) {
    if (!S) {
        return '';
    }

    let stack = [];
    // 数字，可能有多位
    let numstr = '';

    for (let s of S) {
        if (Number.isInteger(+s)) {
            numstr += s;
            continue;
        }

        if (numstr) {
            stack.push(+numstr);
            numstr = '';
        }

        // 不是右括号直接入栈
        if (s != ']') {
            stack.push(s);
            continue;
        }

        // 遇到右括号，需要出栈，直到不等于左括号
        let str = '';
        while (stack.length && stack.slice(-1) != '[') {
            let top = stack.pop();
            top += str;
            str = top;
        }

        // 删掉左括号
        stack.pop();

        // 取得数字
        let count = +stack.pop();

        // 字符拼接对应的次数
        let pushStr = '';
        while (count) {
            pushStr += str;
            count--;
        }
        
        stack.push(pushStr);
    }

    return stack.join('');
}
```
### 复杂度
* 时间复杂度O(N)，N为S的长度
* 空间复杂度O(N)