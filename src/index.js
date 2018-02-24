class Sorter {

  constructor() {
    // your implementation
    this.arr = [];
    this.defaultComparator = (a, b) => a-b;
    this.comparator = this.defaultComparator;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices.sort(this.defaultComparator);
    var arrToSort = indices.map( i => this.arr[i]);
    arrToSort.sort(this.comparator);
    for(let i=0; i<indices.length; i++) {
      this.arr[indices[i]] = arrToSort[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;