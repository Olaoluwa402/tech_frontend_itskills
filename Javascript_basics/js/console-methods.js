const { log, warn, info, error, time, clear, table, count, assert, timeEnd } =
  console;
const data = "This is javascript console methods ";
//1. log
log(data, "log");

//2. warn - for deprecatio and bad practice
warn(data, "warn");
//3.info
info(data);

//4.error
error(data);

//5. time - monitors operation excecution time

time("monitor-add");
function add(arr) {
  count("count-1");
  return arr.reduce((acc, curr) => acc + curr, 0);
}
add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
timeEnd("monitor-add");

//6.table
table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//7. assert
assert(3 > 2); //if true no log
assert(2 > 3); //if fasle no log
