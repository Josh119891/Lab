const testCase = [3, 2, 1, 6, 5, 4, 8, 9, 7];

const swapInArr = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]]
};

// 冒泡排序 BubbleSort

// Bubble 是 每次用当前索引的数字和下一个索引的数组进行对比
const BubbleOnce = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swapInArr(arr, i, i + 1);
    }
  }
  return arr;
};
const BubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // 因为每次都把最大数字排到最后了，理应每次冒泡次数少一次
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapInArr(arr, j, j + 1);
      }
    }
  }
  return arr;
};


// Selection 在未确定的数组中，选择最大的数字与最后的数字进行交换
const selectionOnce = (arr) => {
  let maxPos = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxPos]) {
      maxPos = i
    }
  }
  return swapInArr(arr, maxPos, arr.length - 1)
}

const selectionSort = (arr) => {
  let maxPos = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[maxPos]) {
        maxPos = j
      }
    }
    swapInArr(arr, maxPos, arr.length - i - 1);
    maxPos = 0
  }
  return arr;
}


const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let tmp = nums[i]
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = tmp
  }
  return nums
}
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr.pop();
  const leftArr = [];
  const rightArr = [];

  for (let num of arr) {
    if (num < pivot) {
      leftArr.push(num)
    } else {
      rightArr.push(num)
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

}


// 基于quick sort 开发出来的想法，
//https://leetcode.cn/problems/zui-xiao-de-kge-shu-lcof/
const partition = (arr, l, r) => {
  let pivot = arr[l];
  let index = l;
  for (let i = l; i <= r; i++) {
    if (arr[i] < pivot) {
      index++;
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
  }
  [arr[l], arr[index]] = [arr[index], arr[l]];
  return index;
}

