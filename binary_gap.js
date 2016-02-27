function binaryGap(N) {
  var binary = (N >>> 0).toString(2);
  var groups = /(1(0+)(?=1))/g;
  var matches = binary.match(groups);

  if (matches === null) {
    return 0;
  }

  var largestGap = Math.max.apply(Math, matches.map(function(v) {
    return v.replace(/1/g, '').length;
  }));

  return largestGap;
}
