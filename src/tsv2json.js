export default function csv2json(str) {
  var arr = str.split("\n");
  //console.log(arr[0]);
  var header = arr[0].split("\t");
  //console.log(header);
  var names = [];
  for (var i = 1; i < arr.length; i++) {
    var values = arr[i].split("\t");
    arr[i] = {};
    for (var j = 0; j < header.length; j++) {
      if (j <= values.length) {
        arr[i][header[j]] = values[j];
      }
      if (arr[i].hasOwnProperty("hierarchy")) {
        var h = arr[i].hierarchy.split(".");
        names[h.length - 1] = arr[i].name;
        //console.log(names);
        arr[i].names = names.slice(0, h.length);
      }
    }
  }
  arr.shift();
  //console.log(arr);
  return arr;
}
