const args = process.argv.slice(2);

args.sort(function(a, b) { 

  return a - b;
});

args.forEach(element => {
  if (element > 0) {

    setTimeout(() => {

      process.stdout.write('\x07');

    }, element * 1000);
  }

});
