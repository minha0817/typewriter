const sentence = "hello there from lighthouse labs \n";

let millisec = 0;
for (const char of sentence) {
  setTimeout(() => {
    // console.log(millisec);
    process.stdout.write(char);
  }, millisec);
  millisec += 50;
}
