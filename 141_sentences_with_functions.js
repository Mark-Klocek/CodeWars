// Implement all required functions in order to create the following sentences by calling those functions:

// Adam(has(a(dog()))); // must return "Adam has a dog."
// The(name(of(the(dog(is(also(Adam()))))))); // must return "The name of the dog is also Adam."
function Adam(str = "") {
  return "Adam" + (str ? " " + str : "") + ".";
}
function has(str) {
  return "has " + str;
}
function a(str) {
  return "a " + str;
}
function dog(str) {
  return "dog" + (str ? " " + str : "");
}
function The(str = "") {
  return "The" + (str ? " " + str : "");
}
function name(str) {
  return "name " + str;
}
function of(str) {
  return "of " + str;
}
function the(str) {
  return "the " + str;
}
function is(str) {
  return "is " + str;
}
function also(str) {
  return "also " + str;
}
