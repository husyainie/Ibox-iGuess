// 🔁 Fungsi untuk merandom dan memilih 10 soal dari total 30
function getRandomQuestions(allQuestions, count = 5) {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
const allQuestions = [
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/1 - Cokelat - Luka Lama.mp3",
    question: "Apa judul cuplikan lagu ini?",
    options: ["Lagu Rindu", "Luka Lama", "Terbuang", "Sendiri"],
    answer: "Luka Lama"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/2 - Kerispatih - Lagu Rindu.mp3",
    question: "Apa judul cuplikan lagu ini?",
    options: ["Terbuang", "Aku harus jujur", "Demi Cinta", "Lagu Rindu"],
    answer: "Lagu Rindu"
  },
  {
     image: "picture/IBOX_Picture-01.png",
    audio: "song/3 - Sammy Simorangkir - Kau Harus Bahagia.mp3",
    question: "Siapa penyanyi lagu ini?",
    options: ["Barasuara", "Kunto Aji", "Sammy Simorangkir", "Bruno Mars"],
    answer: "Sammy Simorangkir"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/4 - Barasuara - Terbuang Dalam Waktu.mp3",
    question: "Apa judul cuplikan lagu ini?",
    options: ["Luka yang luas", "Terbuang dalam waktu", "Pancarona", "Nyala Suara"],
    answer: "Terbuang dalam waktu"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/5 - Kerispatih - Demi Cinta.mp3",
    question: "Apa nama band lagu ini?",
    options: ["Noah", "Cokelat", "Wali", "Kerispatih"],
    answer: "Kerispatih"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/6 - Sammy Simorangkir - Luka Yang Luas.mp3",
    question: "Apa judul cuplikan lagu ini?",
    options: ["Luka yang luas", "Lukaku", "Terluka", "Terlarut"],
    answer: "Luka yang luas"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/7 - Cokelat - Kuasa-Nya.mp3",
    question: "Apa judul lagu ini?",
    options: ["Tak tahan", "Air dan api", "Kuasanya", "Karma"],
    answer: "Kuasanya"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/8 - Barasuara - Pancarona.mp3",
    question: "Siapa penyanyi dalam lagu ini?",
    options: ["Once", "Barasuara", "Permadi", "Sammy Simorangkir"],
    answer: "Barasuara"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/9 - Sammy Simorangkir - Beri Waktu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Dia", "Kupilih dia", "Kau harud bahagia", "Beri waktu"],
    answer: "Beri waktu"
  },
  {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/10 - Cokelat - Yang Terindah.mp3",
    question: "Apa judul lagu ini?",
    options: ["Yang terdalam", "Yang terindah", "Yang tercantik", "Yang kucinta"],
    answer: "Yang terindah"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/11 - Kerispatih - Menjemput Impian.mp3",
    question: "Apa judul lagu ini?",
    options: ["Guna Manusia", "Kesedihanku", "Menjemput impian", "Bidadariku"],
    answer: "Menjemput impian"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/12 - Cokelat - Sendiri.mp3",
    question: "Siapa penyanyi dalam lagu ini?",
    options: ["Cokelat", "Kangen band", "Ratu", "Wali band"],
    answer: "Cokelat"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/13 - Kerispatih - Kejujuran Hati.mp3",
    question: "Apa judul lagu ini?",
    options: ["Kupilih dia", "Kau harus bahagia", "Kesedihanku", "Kejujuran hati"],
    answer: "Kejujuran hati"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/14 - Sammy Simorangkir - Tak Mampu Pergi.mp3",
    question: "Apa judul lagu ini?",
    options: ["Karma", "Nyala suara", "Tak mampu pergi", "Demi cinta"],
    answer: "Tak mampu pergi"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/15 - Cokelat - Karma.mp3",
    question: "Apa judul lagu ini?",
    options: ["Karma", "Pergi", "Jauh", "Mengunci ingatan"],
    answer: "Karma"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/16 - Kerispatih - Aku Harus Jujur.mp3",
    question: "Apa judul lagu ini?",
    options: ["Bukan hari ini", "Roman Picisan", "Aku harus jujur", "Lihat hatiku"],
    answer: "Aku harus jujur"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/17 - Sammy Simorangkir - Tak Bisa Mencintaimu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Sedang apa dan dimana", "Tak bisa mencintaimu", "Kita Yang Beda", "Tentang Rindu"],
    answer: "Tak bisa mencintaimu"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/18 - Barasuara - Pikiran dan Perjalanan.mp3",
    question: "Apa judul lagu ini?",
    options: ["Pikiran dan perjalanan", "Roman Picisan", "Kita Yang Beda", "Nyanyian sahabat"],
    answer: "Pikiran dan perjalanan"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/19 - Barasuara - Guna Manusia.mp3",
    question: "Siapa penyanyi dalam lagu ini?",
    options: ["Bondan Prakoso", "Tompi", "Barasuara", "Tulus"],
    answer: "Barasuara"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/20 - Barasuara - Nyala Suara",
    question: "Apa judul cuplikan lagu ini?",
    options: ["Nyatakan cinta", "Tak mampu pergi", "Semua tentang kita", "Nyala suara"],
    answer: "Nyala suara"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/21 - Barasuara -  Api dan Lentera.mp3",
    question: "Apa judul lagu ini?",
    options: ["Api dan lentera", "Air dan api", "Nyanyian sahabat", "Kau dan aku"],
    answer: "Air dan api"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/22 - Sammy Simorangkir - Kesedihanku.mp3",
    question: "Apa judul lagu ini?",
    options: ["Kesenanganku", "Kesedihanku", "Kekuranganku", "Keberhasilanku"],
    answer: "Kesedihanku"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/Virzha - Tentang Rindu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Kangen", "Roman Picisan", "Kita Yang Beda", "Tentang Rindu"],
    answer: "Tentang Rindu"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/23 - Sammy Simorangkir - Sedang Apa Dan Dimana.mp3",
    question: "Apa judul lagu ini?",
    options: ["Sedang apa dan dimana", "Sedang dimana", "Aku dan kamu jadi satu", "Sedang ingin bercinta"],
    answer: "Sedang apa dan dimana"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/24 - Sammy Simorangkir - DIA.mp3",
    question: "Apa judul lagu ini?",
    options: ["Aku", "Kamu", "Kita", "Dia"],
    answer: "Dia"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/25 - Cokelat - Kupilih Dia.mp3",
    question: "Apa judul lagu ini?",
    options: ["Kupilih kamu", "Kau kupilih", "Dia yang kupilih", "Kupilih dia"],
    answer: "Kupilih dia"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/26 - Sammy Simorangkir - Kau Harus Bahagia.mp3",
    question: "Apa judul lagu dalam cuplikan ini?",
    options: ["Kau harus sempuran", "Kau harus bahagia", "Kau bersama dia", "Kau yang kurindu"],
    answer: "Kau harus bahagia"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/27 - Cokelat - Nyanyian Sahabat.mp3",
    question: "Apa judul lagu ini?",
    options: ["Nyanyian sahabat", "Alunan kasih", "Nyanyian rindu", "Aku bernyanyi"],
    answer: "Nyanyian sahabat"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/28 - Cokelat - Pergi.mp3",
    question: "Siapa penyanyi pada lagu ini?",
    options: ["Garasi band", "Kotak band", "Cokelat", "Ada band"],
    answer: "Cokelat"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/29 - Cokelat - Dendam.mp3",
    question: "Apa judul lagu ini?",
    options: ["Dendam", "Benci", "Duka yang terlarang", "Amarahku"],
    answer: "Dendam"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/30 - Cokelat - Jauh.mp3",
    question: "Apa judul lagu ini?",
    options: ["Jauh dekat dihati", "Jauh", "Jarak antara kita", "Seberapa pantas"],
    answer: "Jauh"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/31 - Cokelat - Luka Lama.mp3",
    question: "Apa judul lagu ini?",
    options: ["Luka baru", "Luka lama", "Lukaku", "Luka dihati"],
    answer: "Luka lama"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/32 - Cokelat - Segitiga.mp3",
    question: "Apa nama album judul lagu ini?",
    options: ["Segitiga", "Orang ketiga", "Kita bertiga", "Sudut kota"],
    answer: "Segitiga"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/33 - Barasuara - Bahas Bahasa.mp3",
    question: "Apa judul lagu ini?",
    options: ["Bahasa kalbu", "Bahas bahasa", "Bahasa hati", "Bahasa diri"],
    answer: "Bahas bahasa"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/34 - Barasuara - Mengunci Ingatan.mp3",
    question: "Apa judul lagu ini?",
    options: ["Terkunci ingatan", "Mengunci ingatan", "Merayakan fana", "Didalam hatiku"],
    answer: "Mengunci ingatan"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/35 - Barasuara - Fatalis.mp3",
    question: "Apa judul lagu ini?",
    options: ["Bahas bahasa", "Segitiga", "Fatalis", "Mengunci ingatan"],
    answer: "Fatalis"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/36 - Barasuara - Merayakan Fana.mp3",
    question: "Apa judul lagu ini?",
    options: ["Merayakan fana", "Merayakan rasa", "Merayakan hati", "Merayakan sedih"],
    answer: "Merayakan fana"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/37 - Sammy Simorangkir - Tak Bisa Mencintaimu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Tak mungkin bisa", "Mencintaimu", "Tak bisa mencintaimu", "Aku bisa mencintaimu"],
    answer: "Tak bisa mencintaimu"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/38 - Barasuara - Hitam Dan Biru.mp3",
    question: "Apa judul lagu ini?",
    options: ["Hitam dan putih", "Merah putih", "Hitam kelabu", "Hitam dan biru"],
    answer: "Hitam dan biru"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/39 - Kerispatih - Mengenangmu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Mengenangmu", "Mengenalmu", "Mengagumimu", "Bersamamu"],
    answer: "Mengenangmu"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/40 - Kerispatih - Tak Lekang Oleh Waktu.mp3",
    question: "Apa judul lagu ini?",
    options: ["Waktu yang berputar", "Lorong waktu", "Tak lekang oleh waktu", "Bukan hari ini"],
    answer: "Tak lekang oleh waktu"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/41 - Sammy Simorangkir - Dibalas Dengan Dusta.mp3",
    question: "Apa judul lagu ini?",
    options: ["Dibalas dengan dusta", "Lihat hatiku", "Kau harus bahagia", "Pergi tak kembali"],
    answer: "Dibalas dengan dusta"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/42 - Sammy Simorangkir - Daripada Menyiksa Diri.mp3",
    question: "Apa judul lagu ini?",
    options: ["Lihat hatiku", "Kau harus bahagia", "Kita Yang Beda", "Daripada menyiksa diri"],
    answer: "Daripada menyiksa diri"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/43 - Sammy Simorangkir - Pergi Tak Kembali.mp3",
    question: "Apa judul lagu ini?",
    options: ["Pergi tak kembali", "Pergi dan kembali", "Pergi tuk kembali", "Kembali untuk pergi"],
    answer: "Pergi tuk kembali"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/44 - Sammy Simorangkir - Berikan Yang Terbaik.mp3",
    question: "Apa judul lagu ini?",
    options: ["Berikan untukku", "Berikan yang terbaik", "Kita Yang Beda", "Tentang Rindu"],
    answer: "Berikan yang terbaik"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/45 - Barasuara - Etalase.mp3",
    question: "Apa judul lagu ini?",
    options: ["Etalase", "Antea", "Manusia", "Bukan hari ini"],
    answer: "Etalase"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/46 - Barasuara - Antea.mp3",
    question: "Apa judul lagu ini?",
    options: ["Etalase", "Antea", "Manusia", "Bukan hari ini"],
    answer: "Antea"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/47 - Barasuara - Manusia (Sumarah).mp3",
    question: "Apa judul lagu ini?",
    options: ["Manusia", "Insan biasa", "Yang selalu salah", "Tentang Rindu"],
    answer: "Manusia"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/48 - Cokelat - Salah.mp3",
    question: "Apa judul lagu ini?",
    options: ["Salah", "Jauh", "Kupilih dia", "Bukan hari ini"],
    answer: "Salah"
  },
    {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/49 - Cokelat - Bukan Hari Ini.mp3",
    question: "Apa judul lagu ini?",
    options: ["Pada hari ini", "Bukan hari ini", "Pada lain hari", "Hari ini"],
    answer: "Bukan hari ini"
  },
      {
    image: "picture/IBOX_Picture-01.png",
    audio: "song/50 - Kerispatih - Lihat Hatiku.mp3",
    question: "Apa judul lagu ini?",
    options: ["Lihat hatiku", "Tak lekang oleh waktu", "Pergi tak kembali", "Dibalas dengan dusta"],
    answer: "Lihat hatiku"
  },
 
 
  // ... hingga song10
];

let questions = getRandomQuestions(allQuestions); // 🔁 pakai let biar bisa diubah

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
const countdownEl = document.getElementById("countdown-timer");

const audioPlayer = document.getElementById("audio-player");
const questionImage = document.getElementById("question-image");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreBox = document.getElementById("score-box");
const feedbackEl = document.getElementById("feedback");
const questionNumberEl = document.getElementById("question-number");
const quizContainer = document.querySelector(".quiz-container");

function showQuestion() {
  const q = questions[currentQuestion];
  questionImage.style.display = "none";

  audioPlayer.src = q.audio;
  audioPlayer.load();
  audioPlayer.play();

  document.querySelectorAll(".equalizer span").forEach(span => {
    span.style.animationPlayState = "running";
  });

  questionEl.textContent = q.question;
  questionNumberEl.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });

  startCountdown();
}

function startCountdown() {
  clearInterval(timer);
  timeLeft = 10;
  countdownEl.textContent = `${timeLeft}`;

  timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = `${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      feedbackEl.textContent = "Times Out!";
      feedbackEl.style.color = "orange";
      disableOptions();
      audioPlayer.pause();
      nextBtn.style.display = "block";
    }
  }, 1000);
}

function disableOptions() {
  const allButtons = Array.from(optionsEl.querySelectorAll("button"));
  allButtons.forEach(btn => (btn.disabled = true));
}

function selectAnswer(button, correct) {
  clearInterval(timer);
  const allButtons = Array.from(optionsEl.querySelectorAll("button"));

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#db8600";
    } else {
      btn.style.opacity = "0.6";
    }
  });

  quizContainer.classList.remove("blur-active");

  if (button.textContent === correct) {
    score++;
    feedbackEl.innerHTML = '<span class="check">✔</span> Benar!';
    feedbackEl.style.color = "#db8600";
  } else {
    feedbackEl.textContent = "❌ Salah!";
    feedbackEl.style.color = "red";
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
  document.querySelector(".equalizer").style.display = "none";

  questionImage.style.display = "block";
  questionImage.src = "picture/winner.png";

  questionEl.textContent = "Quiz Selesai!";
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";
  questionNumberEl.textContent = "";
  scoreBox.textContent = `Skor Akhir Kamu: ${score} dari ${questions.length}`;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.id = "play-again";
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.onclick = () => {
   window.location.href = "index.html";
    // currentQuestion = 0;
    // score = 0;
    // scoreBox.textContent = "";

    // 🔁 Acak ulang pertanyaan baru setiap klik Play Again
    questions = getRandomQuestions(allQuestions);

    document.querySelector(".equalizer").style.display = "flex"; // balikin equalizer
    showQuestion();
  };
  scoreBox.appendChild(playAgainBtn);
}

window.onload = showQuestion;
