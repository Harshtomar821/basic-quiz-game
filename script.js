const questions = [
    {
      question: "What does CPU stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
      answer: "Central Processing Unit"
    },
    {
      question: "Which of the following is an input device?",
      options: ["Monitor", "Printer", "Keyboard", "Speaker"],
      answer: "Keyboard"
    },
    {
      question: "Which storage is volatile?",
      options: ["Hard Disk", "ROM", "RAM", "SSD"],
      answer: "RAM"
    },
    {
      question: "Which language is used to design web pages?",
      options: ["Python", "HTML", "Java", "C++"],
      answer: "HTML"
    },
    {
      question: "What is the full form of URL?",
      options: ["Uniform Resource Locator", "Uniform Read Language", "Unified Resource Link", "Universal Record Locator"],
      answer: "Uniform Resource Locator"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  const nextBtn = document.getElementById('nextBtn');
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.classList.add('option-btn');
      btn.onclick = () => selectAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
    nextBtn.disabled = false;
    Array.from(optionsEl.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = 'lightgreen';
      } else {
        btn.style.backgroundColor = 'lightcoral';
      }
    });
  }
  
  nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      nextBtn.disabled = true;
      resultEl.textContent = "";
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    resultEl.textContent = `Your Score: ${score} out of ${questions.length}`;
  }
  
  showQuestion();
  nextBtn.disabled = true;
  