const PangramFinder = function (phrase) {
  this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  // lower case, remove space, turn to array
  this.phrase = phrase
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
};

PangramFinder.prototype.isPangram = function () {
  let uniq_letters = [...new Set(this.phrase)];
  const pangrams = uniq_letters.sort().toString();
  const alpha = this.alphabet.sort().toString();
  if (pangrams === alpha) {
    return true;
  } else {
    return false;
  }
};

module.exports = PangramFinder;
