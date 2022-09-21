class MyHashSet {
  items: Object;
  constructor() {
    this.items = {};
  }

  add(key: number): void {
    if (!this.contains(key)) this.items[key] = key;
  }

  remove(key: number): void {
    if (this.contains(key)) delete this.items[key];
  }

  contains(key: number): boolean {
    return Object.prototype.hasOwnProperty.call(this.items, key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
