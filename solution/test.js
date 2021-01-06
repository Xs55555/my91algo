/**
 * 时间复杂度：O(N^2log N))，深度优先搜索复杂度为 O(N^2)，最多需要搜索 O(logN) 次
 * 空间复杂度：O(N^2)
 * bfs
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    let n = grid.length;
    let low = grid[0][0];
    let high = n * n;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        // 不能游游到mid这个方格，
        if (!isCanSwim(mid, grid)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

/**
 * 在时间t内是否可以游到最后一个节点
 * @param {*} t 
 * @param {*} grid 
 */
var isCanSwim = function (t, grid) {
    let n = grid.length;

    // 方向数组，上 下 左 右
    let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];

    // 遍历过的位置(存二维数组节点的坐标字符串，用下划线连接)
    const visited = new Set();
    visited.add('0_0'); // 从第1个点(0, 0)开始访问

    // 存需要去遍历的位置(存二维数组节点的坐标)
    let needToInterable = [];
    needToInterable.push([0, 0]); // 默认从第1个点(0, 0)开始访问

    while (needToInterable.length) {
        let position = needToInterable.pop();
        let row = position[0];
        let col = position[1];

        // 是二维数组最后一个位置，则返回true
        if (row == n - 1 && col == n - 1) {
            return true;
        }

        // 沿着(row,col)该点的4个方向进行遍历
        for (let direction of directions) {
            // 沿着某个方向遍历后新的二维数组的索引
            let newRow = row + direction[0];
            let newCol = col + direction[1];

            // 不会越界，且还没遍历过，且该点的时间小于t(即是可达的)
            if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && !visited.has(`${newRow}_${newCol}`) && grid[newRow][newCol] <= t) {
                visited.add(`${newRow}_${newCol}`);
                needToInterable.push([newRow, newCol]);
            }
        }
    }

    return false;
}


var swimInWater = function (grid) {
    let n = grid.length;
    let low = grid[0][0];
    let high = n * n;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        // 不能游游到mid这个方格，
        if (!isCanSwim(mid, grid)) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};

/**
 * 
 * @param {*} t 
 * @param {*} grid 
 */
var isCanSwim = function (t, grid) {
    let n = grid.length;
    // n行n列的二维数组，都初始化为false;
    let visited = Array.from(Array(n), () => Array(n).fill(false));

    let dfs = function (row, col) {
        // 越界 或 已访问过 或 不可达
        if (row < 0 || col < 0 || row >= n || col >= n || visited[row][col] || grid[row][col] > t) {
            return false;
        }

        if (row == n - 1 && col == n - 1) {
            return true;
        }

        visited[row][col] = true;

        // 该位置的上 下 左 右 四个方向进行遍历
        return dfs(row + 1, col) || dfs(row - 1, col) || dfs(row, col + 1) || dfs(row, col - 1);
    }

    // 默认从第1个节点开始遍历
    return dfs(0, 0);
}
