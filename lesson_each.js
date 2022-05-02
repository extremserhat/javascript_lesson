const _ = {};

_.map = function (list, callback) {
  // create an empty array to store
  var storage = [];
  // looping
  for (var i = 0; i < list.length; i++) {
    // push it to our array & callback(element)
    storage.push(callback(list[i], i, list));
  }
  return storage;
};

_.map([1, 2, 3], function (val) {
  return val + 1;
});
// =>[1,2,3]

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    // loop through array
    for (var i = 0; i < list.length; i++) {
      // call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    //object
    // loop through object
    for (var key in list) {
      // call the callback with a list item
      callback(list[key], key, list);
    }
  }
  // celebrate
};

_.each(["sally", "georie", "porgie"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});

// OUTPUT:
/*
sally is younger than georie;
georie is younger than porgie
porgie is the oldest
*/
