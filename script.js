
// ==================================
// CORALINE – THE SECRET ARCHIVE
// ==================================

// Charakterinformationen
const characters = {
    coraline: {
        name: "Coraline Jones",
        symbol: "🧥",
        text: "Coraline ist die Hauptfigur der Geschichte. Sie ist neugierig, unabhängig und liebt es, neue Dinge zu entdecken. Als sie die kleine Tür findet, beginnt ein Abenteuer, das sie vor grosse Herausforderungen stellt.",
        extra: "GEHEIMNIS: Coraline unterschätzt die Andere Welt zunächst. Ihre Neugier wird zu ihrer grössten Stärke."
    },

    othermother: {
        name: "Die Andere Mutter",
        symbol: "🪡",
        text: "Die Andere Mutter erscheint zuerst als perfekte Version von Coralines Mutter. Sie bietet Coraline ein scheinbar wunderbares Leben an. Doch sie möchte Coraline nicht einfach nur bei sich haben: Sie will Kontrolle über sie gewinnen.",
        extra: "GEHEIMNIS: Ihre Gestalt verändert sich im Laufe der Geschichte immer stärker."
    },

    wybie: {
        name: "Wybie",
        symbol: "🚲",
        text: "Wybie Lovat wohnt in der Nähe des Pink Palace. Er ist etwas schüchtern, redet aber gerne und kennt viele Geschichten über das Haus. Er wird zu einem wichtigen Verbündeten von Coraline.",
        extra: "GEHEIMNIS: Sein Name ist eine Kurzform von Whyborn."
    },

    cat: {
        name: "Die Katze",
        symbol: "🐈‍⬛",
        text: "Die schwarze Katze ist geheimnisvoll und unabhängig. In der echten Welt spricht sie nicht, in der Anderen Welt kann sie jedoch mit Coraline kommunizieren. Sie kennt die Gefahren der Anderen Welt.",
        extra: "GEHEIMNIS: Die Katze hat keinen eigenen Namen – zumindest keinen, den sie Coraline verrät."
    },

    otherwybie: {
        name: "Der Andere Wybie",
        symbol: "🎭",
        text: "Der Andere Wybie ist eine künstliche Version von Wybie in der Anderen Welt. Er ist stumm und wird von der Anderen Mutter kontrolliert.",
        extra: "GEHEIMNIS: Er zeigt, dass die Andere Mutter sogar Menschen nach ihren Vorstellungen erschaffen kann."
    },

    ghosts: {
        name: "Die Geisterkinder",
        symbol: "👻",
        text: "Die Geisterkinder wurden früher von der Anderen Mutter angelockt. Sie verloren ihre Freiheit und warten darauf, dass jemand ihre Seelen findet.",
        extra: "GEHEIMNIS: Coraline muss ihre verlorenen Augen finden, um ihnen zu helfen."
    },

    neighbors: {
        name: "Miss Spink & Miss Forcible",
        symbol: "🎪",
        text: "Die beiden Nachbarinnen sind ehemalige Schauspielerinnen. Sie leben voller Erinnerungen an ihre Theaterkarriere und haben viele Hunde.",
        extra: "GEHEIMNIS: Ihre Andere-Version zeigt eine spektakuläre, übertriebene Bühnenwelt."
    },

    bobinsky: {
        name: "Mr. Bobinsky",
        symbol: "🐭",
        text: "Mr. Bobinsky ist ein ungewöhnlicher Nachbar, der behauptet, Mäuse zu trainieren. Er trägt eine auffällige blaue Kleidung und ist eine der eigenwilligsten Figuren im Film.",
        extra: "GEHEIMNIS: Seine Mäuse geben Coraline Hinweise auf das, was in der Anderen Welt passiert."
    }
};

// Charakterkarten anklickbar machen
const cards = document.querySelectorAll(".character-card");
const modal = document.getElementById("character-modal");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const character = characters[card.dataset.character];

        if (!character) return;

        document.getElementById("modal-title").textContent = character.name;
        document.getElementById("modal-symbol").textContent = character.symbol;
        document.getElementById("modal-text").textContent = character.text;
        document.getElementById("modal-extra").textContent = character.extra;

        modal.classList.add("show");
    });
});

// Pop-up schliessen
document.getElementById("close-modal").addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.classList.remove("show");
    }
});

// ==================================
// STERNE IM HINTERGRUND
// ==================================

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "·";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 12 + 5) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}

// ==================================
// GEHEIME TÜR
// ==================================

const secretButton = document.getElementById("secret-door");
const secretMessage = document.getElementById("secret-message");

let doorClicks = 0;

const secretMessages = [
    "Du hast etwas entdeckt ...",
    "Hörst du das? Irgendwo raschelt etwas.",
    "Die Katze scheint dich zu beobachten.",
    "Die Tür ist nicht immer das, was sie zu sein scheint.",
    "AKTE ENTSCHLÜSSELT: Du hast die geheime Ebene gefunden! 🗝️"
];

secretButton.addEventListener("click", () => {
    doorClicks++;

    const index = Math.min(doorClicks - 1, secretMessages.length - 1);
    secretMessage.textContent = secretMessages[index];

    if (doorClicks === 5) {
        secretButton.textContent = "✦ GEHEIMNIS GEFUNDEN ✦";
        document.getElementById("flash").classList.remove("active");

        void document.getElementById("flash").offsetWidth;

        document.getElementById("flash").classList.add("active");
    }

    if (doorClicks > 5) {
        secretMessage.textContent =
            "Du kennst nun das Geheimnis der kleinen Tür. Aber es gibt noch mehr zu entdecken ...";
    }
});

// ==================================
// QUIZ
// ==================================

const questions = [
    {
        question: "Wie heisst Coralines schwarze Begleiterin?",
        answers: ["Luna", "Die Katze", "Misty", "Shadow"],
        correct: 1
    },
    {
        question: "Wie heisst das Haus, in das Coraline zieht?",
        answers: ["Pink Palace", "Blue Castle", "Moon House", "Old Garden"],
        correct: 0
    },
    {
        question: "Welche Besonderheit haben die Bewohner der Anderen Welt?",
        answers: ["Sie haben Flügel", "Sie sind unsichtbar", "Sie haben Knopfaugen", "Sie tragen Masken"],
        correct: 2
    },
    {
        question: "Auf welchem Buch basiert der Film?",
        answers: ["Alice im Wunderland", "Coraline von Neil Gaiman", "Der kleine Hobbit", "Peter Pan"],
        correct: 1
    },
    {
        question: "Welche Animationstechnik wurde für den Film verwendet?",
        answers: ["Stop-Motion", "Zeichentrick", "Computerspielgrafik", "Puppentheater"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("quiz-result");
const numberElement = document.getElementById("question-number");
const nextButton = document.getElementById("next-question");

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;
    numberElement.textContent =
        `FRAGE ${currentQuestion + 1} VON ${questions.length}`;

    answersElement.innerHTML = "";
    resultElement.textContent = "";
    nextButton.hidden = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = answer;

        button.addEventListener("click", () => checkAnswer(index));

        answersElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const buttons = answersElement.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && index !== question.correct) {
            button.classList.add("wrong");
        }
    });

    if (selectedIndex === question.correct) {
        score++;
        resultElement.textContent = "Richtig! ✨";
    } else {
        resultElement.textContent =
            "Nicht ganz! Die richtige Antwort ist: " +
            question.answers[question.correct];
    }

    nextButton.hidden = false;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "ERGEBNIS ANZEIGEN";
    } else {
        nextButton.textContent = "NÄCHSTE FRAGE →";
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showFinalResult();
    }
});

function showFinalResult() {
    questionElement.textContent = "Dein Ergebnis";
    numberElement.textContent = "ARCHIV AUSGEWERTET";
    answersElement.innerHTML = "";

    let message = "";

    if (score === 5) {
        message = "Unglaublich! Du kennst Coraline perfekt! 🗝️";
    } else if (score >= 3) {
        message = "Sehr gut! Du kennst dich schon richtig gut aus.";
    } else {
        message = "Es gibt noch einiges zu entdecken. Schau dich im Archiv um!";
    }

    resultElement.textContent = `Du hast ${score} von 5 Punkten erreicht. ${message}`;

    nextButton.textContent = "NOCH EINMAL SPIELEN";
    nextButton.hidden = false;

    nextButton.onclick = () => {
        currentQuestion = 0;
        score = 0;
        nextButton.onclick = null;
        showQuestion();
    };
}

showQuestion();

// ==================================
// LOGO-EASTER-EGG
// ==================================

let logoClicks = 0;

document.getElementById("logo").addEventListener("click", event => {
    logoClicks++;

    if (logoClicks === 5) {
        event.preventDefault();

        alert("🧿 Du hast das Auge des Archivs entdeckt. Die Andere Welt beobachtet dich ...");

        logoClicks = 0;
    }
});

// ==================================
// NACH OBEN
// ==================================

document.getElementById("top-button").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
