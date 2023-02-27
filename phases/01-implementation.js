class KeyValuePair {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    const index = this.hashMod(key);

    let KeyValuePair1 = this.data[index];

    while (KeyValuePair1 && KeyValuePair1.key !== key) {
      KeyValuePair1 = KeyValuePair1.next;
    }
    if (KeyValuePair1) {
      KeyValuePair1.value = value;
    } else {
      this.data[index] = new KeyValuePair(key, value, this.data[index]);
      this.count++;
    }
  }

  read(key) {
    // Your code here
    let next = this.data[this.hashMod(key)];

    while (next) {
      if (next.key === key) {
        return next.value;
      }
      next = next.next;
    }

    return undefined;
  }


  resize() {
    // Your code here
    let data = [...this.data];
    let count = this.count;

    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);

    for (let i = 0; i < data.length; i++) {
      let next = data[i];
      while (next) {
        this.insert(next.key, next.value);
        next = next.next;
      }
      this.count = count;
    }
  }


  delete(key) {
    // Your code here
    let index = this.hashMod(key);
    let node = this.data[index];
    let prev;

    // bail if the key doesn't exist
    if (!this.read(key)) {
      return 'Key not found';
    }

    // loop through the node till we find the key
    while (node !== null && !(key === node.key)) {
      prev = node;
      node = node.next
    }

    if (prev) {
      prev.next = node.next;
    } else {
      this.data[index] = node.next
    }
    this.count--;
  }
}


module.exports = HashTable;
