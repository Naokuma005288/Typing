const WORDS = [
  {
    "word": "rainforest",
    "meaning": "熱帯雨林",
    "type": "名詞"
  },
  {
    "word": "aquarium",
    "meaning": "水族館",
    "type": "名詞"
  },
  {
    "word": "real",
    "meaning": "本物の／現実の",
    "type": "形容詞"
  }
];

const $ = (id) => document.getElementById(id);

const els = {
  score: $("score"),
  combo: $("combo"),
  miss: $("miss"),
  left: $("left"),
  questionCount: $("questionCount"),
  mode: $("mode"),
  hideEnglishMode: $("hideEnglishMode"),
  startBtn: $("startBtn"),
  gameCard: $("gameCard"),
  targetBox: $("targetBox"),
  typeBadge: $("typeBadge"),
  judge: $("judge"),
  promptLabel: $("promptLabel"),
  prompt: $("prompt"),
  typedPreview: $("typedPreview"),
  currentPreview: $("currentPreview"),
  remainingPreview: $("remainingPreview"),
  answer: $("answer"),
  inputHint: $("inputHint"),
  skipBtn: $("skipBtn"),
  hintBtn: $("hintBtn"),
  restartBtn: $("restartBtn"),
  wordList: $("wordList")
};

let deck = [];
let current = null;
let currentMode = "jpToEn";
let score = 0;
let combo = 0;
let mistakes = 0;
let lockedValue = "";
let missTimer = null;

function normalize(text) {
  return text.trim().replace(/\s+/g, " ").toLowerCase();
}

function sameChar(a, b) {
  return String(a).toLowerCase() === String(b).toLowerCase();
}

function isCorrectPrefix(value, target) {
  if (value.length > target.length) return false;
  for (let i = 0; i < value.length; i++) {
    if (!sameChar(value[i], target[i])) return false;
  }
  return true;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function visibleChar(ch) {
  return ch === " " ? "␣" : ch;
}

function renderWordList(list = WORDS) {
  els.wordList.innerHTML = list.map(item => `
    <div class="wordItem">
      <b>${item.word}</b>
      <span>${item.meaning}</span>
    </div>
  `).join("");
}

function setStats() {
  els.score.textContent = score;
  els.combo.textContent = combo;
  els.miss.textContent = mistakes;
  els.left.textContent = deck.length + (current ? 1 : 0);
}

function isEnglishHidden() {
  return currentMode === "jpToEn" && els.hideEnglishMode.checked;
}

function resetMissUI() {
  els.gameCard.classList.remove("missFlash");
  els.answer.classList.remove("missInput");
  els.inputHint.textContent = "ミスタイプは入力欄に入らず、赤いフラッシュで分かるようにしたで。";
  els.inputHint.className = "inputHint";
  if (els.judge.textContent === "MISS!") {
    els.judge.textContent = "";
    els.judge.className = "judge";
  }
}

function flashMiss(message = "ミスタイプ！入力は反映してへんで") {
  mistakes++;
  combo = 0;
  setStats();

  els.judge.textContent = "MISS!";
  els.judge.className = "judge bad";
  els.inputHint.textContent = message;
  els.inputHint.className = "inputHint missText";

  els.gameCard.classList.remove("missFlash");
  els.answer.classList.remove("missInput");
  void els.gameCard.offsetWidth;
  els.gameCard.classList.add("missFlash");
  els.answer.classList.add("missInput");

  clearTimeout(missTimer);
  missTimer = setTimeout(resetMissUI, 650);
}

function startGame() {
  const count = Number(els.questionCount.value);
  deck = shuffle(WORDS).slice(0, count >= 999 ? WORDS.length : count);
  score = 0;
  combo = 0;
  mistakes = 0;
  lockedValue = "";
  els.answer.disabled = false;
  els.skipBtn.disabled = false;
  els.hintBtn.disabled = false;
  els.judge.textContent = "";
  els.judge.className = "judge";
  resetMissUI();
  nextQuestion();
}

function chooseMode() {
  const mode = els.mode.value;
  if (mode === "mixed") return Math.random() < 0.5 ? "jpToEn" : "enTyping";
  return mode;
}

function nextQuestion() {
  current = deck.shift() || null;
  lockedValue = "";
  els.answer.value = "";
  els.typedPreview.textContent = "";
  els.currentPreview.textContent = "";
  els.remainingPreview.textContent = "";

  if (!current) {
    els.typeBadge.textContent = "終了";
    els.promptLabel.textContent = "結果";
    els.prompt.textContent = `完成！Score: ${score} / Miss: ${mistakes}`;
    els.answer.disabled = true;
    els.skipBtn.disabled = true;
    els.hintBtn.disabled = true;
    setStats();
    return;
  }

  currentMode = chooseMode();
  els.typeBadge.textContent = current.type;

  if (currentMode === "jpToEn") {
    els.promptLabel.textContent = "この日本語の意味に合う英単語を入力";
    els.prompt.textContent = current.meaning;
  } else {
    els.promptLabel.textContent = "この英単語をそのまま入力";
    els.prompt.textContent = current.word;
  }

  updatePreview();
  setStats();
  requestAnimationFrame(() => els.answer.focus());
}

function renderHiddenPreview() {
  els.targetBox.classList.add("hiddenMode");
  const lengthInfo = lockedValue.length > 0 ? `入力済み: ${lockedValue.length}文字` : "英単語は非表示";
  els.targetBox.innerHTML = `
    <div class="hiddenModeText">
      英単語非表示モード ON
      <span class="hiddenModeSub">${lengthInfo}</span>
    </div>
  `;
}

function renderNormalPreview() {
  els.targetBox.classList.remove("hiddenMode");
  els.targetBox.innerHTML = `
    <span id="typedPreview"></span><span id="currentPreview"></span><span id="remainingPreview"></span>
  `;
  els.typedPreview = $("typedPreview");
  els.currentPreview = $("currentPreview");
  els.remainingPreview = $("remainingPreview");
}

function updatePreview() {
  if (!current) return;

  if (isEnglishHidden()) {
    renderHiddenPreview();
    return;
  }

  // hidden mode 解除時にも span を復元
  if (!els.targetBox.querySelector("#typedPreview")) {
    renderNormalPreview();
  }

  const target = current.word;
  const typed = lockedValue;
  const next = target[typed.length] ?? "";
  const rest = target.slice(typed.length + 1);

  els.typedPreview.textContent = typed;
  els.currentPreview.textContent = next ? visibleChar(next) : "";
  els.remainingPreview.textContent = rest;
}

function completeQuestion() {
  combo++;
  score += 100 + combo * 10;
  els.judge.textContent = "OK!";
  els.judge.className = "judge good";
  setStats();
  setTimeout(nextQuestion, 220);
}

function acceptValue(value) {
  lockedValue = value;
  els.answer.value = lockedValue;
  updatePreview();

  if (current && normalize(lockedValue) === normalize(current.word)) {
    completeQuestion();
  } else {
    if (els.judge.textContent === "MISS!") return;
    els.judge.textContent = "";
    els.judge.className = "judge";
  }
}

function handleInput() {
  if (!current) return;

  const target = current.word;
  const nextValue = els.answer.value;

  if (isCorrectPrefix(nextValue, target)) {
    acceptValue(nextValue);
    return;
  }

  els.answer.value = lockedValue;
  updatePreview();
  flashMiss("ミスタイプ！今の文字は入れてへんで");
}

function skipQuestion() {
  if (!current) return;
  flashMiss(`スキップ：答えは「${current.word}」`);
  setTimeout(nextQuestion, 760);
}

function showHint() {
  if (!current) return;
  const target = current.word;
  if (lockedValue.length >= target.length) return;
  const nextValue = target.slice(0, lockedValue.length + 1);
  acceptValue(nextValue);
  combo = 0;
  setStats();
  els.inputHint.textContent = "ヒントを1文字入れたで。コンボはリセット！";
  els.inputHint.className = "inputHint";
  els.answer.focus();
}

function blockPaste(e) {
  if (els.answer.disabled) return;
  e.preventDefault();
  flashMiss("ペーストはなしで、タイピング練習しよ！");
}

function focusInput() {
  if (!els.answer.disabled) els.answer.focus();
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.skipBtn.addEventListener("click", skipQuestion);
els.hintBtn.addEventListener("click", showHint);
els.answer.addEventListener("input", handleInput);
els.answer.addEventListener("paste", blockPaste);
els.answer.addEventListener("drop", (e) => e.preventDefault());
els.answer.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && current && normalize(lockedValue) === normalize(current.word)) {
    completeQuestion();
  }
});
els.hideEnglishMode.addEventListener("change", updatePreview);
els.mode.addEventListener("change", updatePreview);
els.gameCard.addEventListener("click", focusInput);
document.addEventListener("keydown", (e) => {
  if (e.key.length === 1 || e.key === "Backspace") focusInput();
});

renderWordList();
setStats();
updatePreview();
