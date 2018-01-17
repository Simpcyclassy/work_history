let raceNumber = Math.floor(Math.random()*1000);
let regEarly = false;
let runAge = 22;
if (regEarly === false) {
  raceNumber += 1000;
}
console.log(raceNumber);
if (runAge > 18  && regEarly === true) {
  console.log(`${raceNumber} will race at 9:30am.`);
}
if (runAge > 18 || regEarly === true) {
  console.log(`${raceNumber} will race at 11:00am.`);
}
if (runAge < 18 && regEarly === false) {
  console.log(`${raceNumber} will race at 12:30pm`);
}
else {
  (`Please see the registeration desk.`);
}
