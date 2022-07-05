process.stdout.write('hello from spinner2.js... \rheyyy\n')
let i = 1;
const chars = ["|", "/", "-", "\\", "|", "\n"];
for (let k of chars) {
  setTimeout(() => {
    process.stdout.write('\r' + k);
  }, i+= 300)
};