
// 1) create customMap
Array.prototype.customMap = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  };
 
//2) customReduce
//3) customFilter
Array.prototype.customFilter = function (callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
//4) customSome
Array.prototype.customeSome = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
//5) customEvery
Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
// 6) customForEach
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }};
   