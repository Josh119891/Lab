let findKthLargest = function(nums, k) {
  // 从 nums 中取出前 k 个数，构建一个小顶堆
  let heap = [,], i = 0
  while(i < k) {
     heap.push(nums[i++]) 
  }
  console.log(heap);
  buildHeap(heap, k)
  console.log(heap);

  // 从 k 位开始遍历数组
  for(let i = k; i < nums.length; i++) {
      if(heap[1] < nums[i]) {
          // 替换并堆化
          heap[1] = nums[i]
          heapify(heap, k, 1)
      }
  }
  
  // 返回堆顶元素
  return heap[1]
};
// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
  if(k === 1) return
  // 从最后一个非叶子节点开始，自上而下式堆化
  for(let i = Math.floor(k/2); i>=1 ; i--) {
      heapify(arr, k, i)
  }
}

// 堆化
let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while(true) {
      let minIndex = i
      if(2*i <= k && arr[2*i] < arr[i]) {
          minIndex = 2*i
      }
      if(2*i+1 <= k && arr[2*i+1] < arr[minIndex]) {
          minIndex = 2*i+1
      }
      if(minIndex !== i) {
          [arr[i],arr[minIndex]]= [arr[minIndex],arr[i]]
          i = minIndex
      } else {
          break
      }
  }
}

console.log(findKthLargest([1,2,3,4,5,6],2));
