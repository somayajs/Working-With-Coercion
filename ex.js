function isValidName(name) {
  // name must be a string
  // name must contain at least 3 non - whitespace charactersat
  if (
      typeof name === "string" &&
      name.trim().length >= 3
    ) {
    return true;
  }
  return false;
}

function hoursAttended(attended, length) {
  // either parameter may only be a string or number
  // both parameters should be treated as numbers
  if (
      typeof attended === 'string' &&
      attended.trim() !==''
    ) {
    attended = Number(attended);
  }
  if (
    typeof length === 'string' &&
    length.trim() !== ''
    ) {
    length = Number(length);
  }
  // now we convert the two parameters to numbers
  // or they are a number in the first place so we need to check that they aren't anything else
  if (
    typeof attended === 'number' &&
    typeof length === 'number' &&
    // both numbers must be 0 or higher
    attended >= 0 &&
    length >= 0 &&
    // both numbers must be whole numbers
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    // `attended` must be less than or equal to`length`
    attended <= length
    ) {
    return true;
    }
  // in case of the two numbers are not strings nor numbers
  return false;
}


// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
