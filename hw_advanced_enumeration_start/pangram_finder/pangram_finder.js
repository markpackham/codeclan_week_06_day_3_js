const PangramFinder = function (phrase) {
  this.alphabet = "qwertyuiopasdfghjklzxcvbnm".split("");
  // lower case, remove space, turn to array
  this.phrase = phrase.toLowerCase().replace(/\s/g, "").split("");
};

PangramFinder.prototype.isPangram = function () {
  let uniq_letters = [...new Set(this.phrase)];
  console.log(uniq_letters.sort().toString());
  console.log(this.alphabet.sort().toString());
  const pangrams = uniq_letters.sort().toString();
  const alpha = this.alphabet.sort().toString();
  if (pangrams === alpha) {
    return true;
  } else {
    return false;
  }
};

module.exports = PangramFinder;
