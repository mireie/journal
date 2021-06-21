//Biz Logic for Journal
export function Journal() {
  this.journal = {};
  this.currentId = 0;
}

Journal.prototype.addEntry = function (journalOb) {
  journalOb.id = this.assignId();
  this.journal[journalOb.id] = journalOb;
};

Journal.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.findJournal = function (id) {
  if (this.journalOb[id] != undefined) {
    return this.journalOb[id];
  }
  return false;
};

//Biz Logic for Entry

export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function () {
  let wordArray = this.body.split(" ");
  if (wordArray.length === 1 && wordArray[0]==="") {
    return 0;
  }
  return wordArray.length;
};
Entry.prototype.countVowels = function () {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let letterArray = this.body.split("");
  let vowelCount = 0;
  let yCount = 0;
  letterArray.forEach(function (i) {
    if (vowelArray.includes(i)) {
      vowelCount++;
    }
  });
  letterArray.forEach(function (j) {
    if (j==="y") {
      yCount++;
    }
  });
  let pluarlY = " Ys";
  if (yCount === 1) {
    pluarlY = " Y";
  }
  return vowelCount+" (and "+yCount+pluarlY+")";
};

Entry.prototype.countCons = function () {
  let vowelArray = ["a", "e", "i", "o", "u"];
  let letterArray = this.body.split("");
  let consCount = 0;
  letterArray.forEach(function (i) {
    if (!vowelArray.includes(i)) {
      consCount++;
    }
  });
  return consCount;
};

Entry.prototype.getTeaser = function () {
  let teaserArray = [];
  const bodyArray = this.body.split(" ");
  for (let i=0; i < 8; i++) {
    teaserArray.push(bodyArray[i]);
    if (bodyArray[i].includes(".")) {
      return teaserArray.join(" ");
    }
  }
  if (bodyArray.length <= 8) {
    return teaserArray.join(" ");
  } else {
  return teaserArray.join(" ") + "...";
    
  }
};