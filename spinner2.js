const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\-   ', '\r\/   ', '\r\-  '];
let timer = 100;
for (let move of spinner) {
  setTimeout(() => {
  process.stdout.write(move);
  }, timer)
  timer +=200;
}

