var convert = function(jsonInput) {
// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.

    var arr = [];
    var first = true;
    var traverseEntries = (entry) => {
        var dummyArr = [];
        if (first) {
            for (var key in entry) {
              if (typeof(entry[key]) !== 'object'){
                dummyArr.push(key);
              }
            }
            arr.push(dummyArr);
            dummyArr = [];
            first = false;
        }
        for (var key in entry) {
          if(typeof(entry[key]) !== 'object'){
            dummyArr.push(entry[key]);
          }
        }
        arr.push(dummyArr);
        if (entry.children.length > 0) {
            entry.children.forEach(child => {
                traverseEntries(child);
            });
        }
    }
    traverseEntries(jsonInput);
    // console.log(arr);
    return arr.map(line => line.join(',')).join('\n');
}

module.exports = convert;