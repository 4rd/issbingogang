const cards = [
  "NTS is broke",
  "cherry b",
  "asking how long he can talk for",
  "matching USB rant",
  "chair squeak",
  "getting cut off",
  ".wav beef",
  "weekend warmzing is huge",
  "rinse fm mentioned",
  "5 man jam",
  "tiktok plug",
  "freestyle",
  "story about being late",
  "risky accent",
  "random audio issue",
  "ask Fab a question",
  "NTS slander",
  "butchered pronounciation",
  "encourages a morning drink/smoke",
  "chat acting up",
  "\"gooners\"",
  "pre-recorded allegations",
  "breaking embargo",
  "partner dva in chat",
  "rinsing a listener submission",
  "chat turn on a guest",
  "bandcamp friday"
];

let shuffledCards = cards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

cells = [
  "cell00",
  "cell01",
  "cell02",
  "cell03",
  "cell04",
  "cell10",
  "cell11",
  "cell12",
  "cell13",
  "cell14",
  "cell20",
  "cell21",
  "cell22",
  "cell23",
  "cell24",
  "cell30",
  "cell31",
  "cell32",
  "cell33",
  "cell34",
  "cell40",
  "cell41",
  "cell42",
  "cell43",
  "cell44",
];

for (const [i, cellId] of cells.entries()) {
  if (cellId == "cell22") {
    document.getElementById(cellId).innerText = "free space";
  } else {
    document.getElementById(cellId).innerText = shuffledCards[i];
  }
}

function onClickCard(elem) {
  if (!elem.classList.contains('card-selected')) {
    document.getElementById("air-horn").play();
  }
  elem.classList.toggle('card-selected');
}
