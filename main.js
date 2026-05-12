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
    "meaning": "ワニ（アリゲーター）",
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
    "meaning": "たくさんの（数えられる名詞）",
    "type": "形容詞"
  },
  {
    "word": "much",
    "meaning": "たくさんの（数えられない名詞）／とても",
    "type": "形容詞・副詞"
  },
  {
    "word": "little",
    "meaning": "少しの／ほとんどない",
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
  left: $("left"),
  questionCount: $("questionCount"),
  mode: $("mode"),
  startBtn: $("startBtn"),
  typeBadge: $("typeBadge"),
  judge: $("judge"),
  promptLabel: $("promptLabel"),
  prompt: $("prompt"),
  typedPreview: $("typedPreview"),
  remainingPreview: $("remainingPreview"),
  answer: $("answer"),
  skipBtn: $("skipBtn"),
  hintBtn: $("hintBtn"),
  restartBtn: $("restartBtn"),
  wordList: $("wordList")
};

let deck = [];
let current = null;
let currentMode = "meaning";
let score = 0;
let combo = 0;
let mistakes = 0;

function normalize(text) {
  return text.trim().replace(/\s+/g, " ").toLowerCase();
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
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
  els.left.textContent = deck.length + (current ? 1 : 0);
}

function startGame() {
  const count = Number(els.questionCount.value);
  deck = shuffle(WORDS).slice(0, count >= 999 ? WORDS.length : count);
  score = 0;
  combo = 0;
  mistakes = 0;
  els.answer.disabled = false;
  els.skipBtn.disabled = false;
  els.hintBtn.disabled = false;
  els.judge.textContent = "";
  els.judge.className = "judge";
  nextQuestion();
}

function chooseMode() {
  const mode = els.mode.value;
  if (mode === "mixed") return Math.random() < 0.5 ? "meaning" : "word";
  return mode;
}

function nextQuestion() {
  current = deck.shift() || null;
  els.answer.value = "";
  els.typedPreview.textContent = "";
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
  els.promptLabel.textContent = currentMode === "meaning" ? "この意味の英語を入力" : "この英語をそのまま入力";
  els.prompt.textContent = currentMode === "meaning" ? current.meaning : current.word;
  updatePreview();
  setStats();
  els.answer.focus();
}

function updatePreview() {
  if (!current) return;
  const target = current.word;
  const typed = els.answer.value;
  let okLen = 0;

  for (let i = 0; i < typed.length && i < target.length; i++) {
    if (typed[i].toLowerCase() === target[i].toLowerCase()) okLen++;
    else break;
  }

  els.typedPreview.textContent = target.slice(0, okLen);
  els.remainingPreview.textContent = target.slice(okLen);
}

function checkAnswer() {
  if (!current) return;
  updatePreview();

  const typed = normalize(els.answer.value);
  const target = normalize(current.word);

  if (typed === target) {
    combo++;
    score += 100 + combo * 10;
    els.judge.textContent = "OK!";
    els.judge.className = "judge good";
    setTimeout(nextQuestion, 260);
  } else if (typed.length >= target.length && !target.startsWith(typed)) {
    mistakes++;
    combo = 0;
    els.judge.textContent = "ちょい違う！";
    els.judge.className = "judge bad";
    setStats();
  } else {
    els.judge.textContent = "";
    els.judge.className = "judge";
  }
}

function skipQuestion() {
  if (!current) return;
  mistakes++;
  combo = 0;
  els.judge.textContent = `答え: ${current.word}`;
  els.judge.className = "judge bad";
  setStats();
  setTimeout(nextQuestion, 750);
}

function showHint() {
  if (!current) return;
  const answer = els.answer.value;
  const nextChar = current.word[answer.length] ?? "";
  els.answer.value = answer + nextChar;
  combo = 0;
  updatePreview();
  els.answer.focus();
}

els.startBtn.addEventListener("click", startGame);
els.restartBtn.addEventListener("click", startGame);
els.skipBtn.addEventListener("click", skipQuestion);
els.hintBtn.addEventListener("click", showHint);
els.answer.addEventListener("input", checkAnswer);
els.answer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

renderWordList();
setStats();
