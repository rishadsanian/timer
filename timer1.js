// an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const input = process.argv.slice(2);

if (input === undefined) process.exit(); //No numbers provided

const alarms = input.map(Number); //Numbers only

console.log("Starting timer(s)");
for (const alarm of alarms) {
  if (alarm > 0) {
    setTimeout(() => {
      console.log(alarm + " second alarm");
      process.stdout.write("\x07");
    }, alarm * 1000);
  }
}
