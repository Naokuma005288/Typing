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
  },
  {
    "word": "South America",
    "meaning": "南アメリカ",
    "type": "固有名詞"
  },
  {
    "word": "colorful",
    "meaning": "色鮮やかな",
    "type": "形容詞"
  },
  {
    "word": "butterfly",
    "meaning": "チョウ",
    "type": "名詞"
  },
  {
    "word": "butterflies",
    "meaning": "チョウ（複数形）",
    "type": "名詞"
  },
  {
    "word": "each",
    "meaning": "それぞれの／各〜",
    "type": "形容詞・代名詞"
  },
  {
    "word": "alligator",
    "meaning": "ワニ／アリゲーター",
    "type": "名詞"
  },
  {
    "word": "carefully",
    "meaning": "注意深く／ていねいに",
    "type": "副詞"
  },
  {
    "word": "better",
    "meaning": "よりよい／より上手に",
    "type": "比較級"
  },
  {
    "word": "score",
    "meaning": "得点／点数",
    "type": "名詞・動詞"
  },
  {
    "word": "worst",
    "meaning": "最も悪い／最悪の",
    "type": "最上級"
  },
  {
    "word": "ill",
    "meaning": "病気の",
    "type": "形容詞"
  },
  {
    "word": "badly",
    "meaning": "ひどく／悪く",
    "type": "副詞"
  },
  {
    "word": "worse",
    "meaning": "より悪い",
    "type": "比較級"
  },
  {
    "word": "less",
    "meaning": "より少ない",
    "type": "比較級"
  },
  {
    "word": "least",
    "meaning": "最も少ない",
    "type": "最上級"
  },
  {
    "word": "Golden Gate Park",
    "meaning": "ゴールデンゲートパーク",
    "type": "固有名詞"
  },
  {
    "word": "the California Academy of Sciences",
    "meaning": "カリフォルニア科学アカデミー",
    "type": "固有名詞"
  },
  {
    "word": "exhibit",
    "meaning": "展示する／展示物",
    "type": "動詞・名詞"
  },
  {
    "word": "exhibits",
    "meaning": "展示物（複数）／展示する",
    "type": "名詞・動詞"
  },
  {
    "word": "planetarium",
    "meaning": "プラネタリウム",
    "type": "名詞"
  },
  {
    "word": "large",
    "meaning": "大きい",
    "type": "形容詞"
  },
  {
    "word": "useful",
    "meaning": "役に立つ",
    "type": "形容詞"
  },
  {
    "word": "snake",
    "meaning": "ヘビ",
    "type": "名詞"
  },
  {
    "word": "snakes",
    "meaning": "ヘビ（複数形）",
    "type": "名詞"
  },
  {
    "word": "frog",
    "meaning": "カエル",
    "type": "名詞"
  },
  {
    "word": "frogs",
    "meaning": "カエル（複数形）",
    "type": "名詞"
  },
  {
    "word": "more",
    "meaning": "より多くの／もっと",
    "type": "比較級"
  },
  {
    "word": "than",
    "meaning": "〜よりも",
    "type": "接続詞・前置詞"
  },
  {
    "word": "strong",
    "meaning": "強い",
    "type": "形容詞"
  },
  {
    "word": "poison",
    "meaning": "毒",
    "type": "名詞"
  },
  {
    "word": "section",
    "meaning": "区画／部分",
    "type": "名詞"
  },
  {
    "word": "dangerous",
    "meaning": "危険な",
    "type": "形容詞"
  },
  {
    "word": "afraid",
    "meaning": "怖がっている",
    "type": "形容詞"
  },
  {
    "word": "be afraid of",
    "meaning": "〜を怖がる",
    "type": "熟語"
  },
  {
    "word": "bicycle",
    "meaning": "自転車",
    "type": "名詞"
  },
  {
    "word": "Brazil",
    "meaning": "ブラジル",
    "type": "固有名詞"
  },
  {
    "word": "good",
    "meaning": "よい",
    "type": "形容詞"
  },
  {
    "word": "well",
    "meaning": "上手に／よく",
    "type": "副詞"
  },
  {
    "word": "bad",
    "meaning": "悪い",
    "type": "形容詞"
  },
  {
    "word": "many",
    "meaning": "多数の／たくさんの（数えられる名詞）",
    "type": "形容詞"
  },
  {
    "word": "much",
    "meaning": "多量の／たくさんの（数えられない名詞）",
    "type": "形容詞・副詞"
  },
  {
    "word": "little",
    "meaning": "少量の／ほとんどない",
    "type": "形容詞"
  },
  {
    "word": "best",
    "meaning": "最もよい／一番上手な",
    "type": "最上級"
  },
  {
    "word": "most",
    "meaning": "最も多い／最も",
    "type": "最上級"
  },
  {
    "word": "long",
    "meaning": "長い",
    "type": "形容詞"
  },
  {
    "word": "longer",
    "meaning": "より長い",
    "type": "比較級"
  },
  {
    "word": "longest",
    "meaning": "最も長い",
    "type": "最上級"
  },
  {
    "word": "larger",
    "meaning": "より大きい",
    "type": "比較級"
  },
  {
    "word": "largest",
    "meaning": "最も大きい",
    "type": "最上級"
  },
  {
    "word": "busy",
    "meaning": "忙しい",
    "type": "形容詞"
  },
  {
    "word": "busier",
    "meaning": "より忙しい",
    "type": "比較級"
  },
  {
    "word": "busiest",
    "meaning": "最も忙しい",
    "type": "最上級"
  },
  {
    "word": "easy",
    "meaning": "簡単な",
    "type": "形容詞"
  },
  {
    "word": "easier",
    "meaning": "より簡単な",
    "type": "比較級"
  },
  {
    "word": "easiest",
    "meaning": "最も簡単な",
    "type": "最上級"
  },
  {
    "word": "big",
    "meaning": "大きい",
    "type": "形容詞"
  },
  {
    "word": "bigger",
    "meaning": "より大きい",
    "type": "比較級"
  },
  {
    "word": "biggest",
    "meaning": "最も大きい",
    "type": "最上級"
  },
  {
    "word": "hot",
    "meaning": "暑い／熱い",
    "type": "形容詞"
  },
  {
    "word": "hotter",
    "meaning": "より暑い／より熱い",
    "type": "比較級"
  },
  {
    "word": "hottest",
    "meaning": "最も暑い／最も熱い",
    "type": "最上級"
  }
];

const $ = (id) => document.getElementById(id);

const els = {
  score: $("score"),
  combo: $("combo"),
  miss: $("miss"),
  left: $("left"),
  wordCount: $("wordCount"),
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
  els.wordCount.textContent = `（${list.length}語）`;
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
