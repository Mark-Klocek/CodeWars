//Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return this.length === 1 && this >= '0' && this <= '9';
};