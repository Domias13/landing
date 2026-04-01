const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

const QUESTIONS = [
    { text: "👤 Ваш пол?", options: [["Мужчина", "male"], ["Женщина", "female"]] },
    { text: "1️⃣ Сколько вам лет?", options: [["Младше 16", "age_under_16"], ["16–19", "age_16_19"], ["20–25", "age_20_25"], ["26–34", "age_26_34"], ["35–45", "age_35_45"], ["46–55", "age_46_55"], ["Старше 55", "age_over_55"]] },
    { text: "2️⃣ Сколько лет вашему бывшему?", options: [["Младше 16", "ex_under_16"], ["16–19", "ex_16_19"], ["20–25", "ex_20_25"], ["26–34", "ex_26_34"], ["35–45", "ex_35_45"], ["46–55", "ex_46_55"], ["Старше 55", "ex_over_55"]] },
    { text: "3️⃣ Вы были женаты или помолвлены?", options: [["Да, женаты, есть дети", "married_kids"], ["Да, женаты, без детей", "married_no_kids"], ["Да, помолвлены", "engaged"], ["Нет, никогда", "not_married"]] },
    { text: "4️⃣ Как долго вы были вместе?", options: [["Меньше 1 месяца", "rel_under_1m"], ["2–5 месяцев", "rel_2_5m"], ["6–12 месяцев", "rel_6_12m"], ["1–2 года", "rel_1_2y"], ["3–5 лет", "rel_3_5y"], ["Более 5 лет", "rel_over_5y"]] },
    { text: "5️⃣ Жили ли вы вместе?", options: [["Да, более 6 месяцев", "cohab_6plus"], ["Да, менее 6 месяцев", "cohab_under_6"], ["Нет, никогда", "no_cohab"]] },
    { text: "6️⃣ Когда произошёл разрыв?", options: [["Менее 24 часов", "break_under_24h"], ["Менее недели", "break_under_1w"], ["1–2 недели", "break_1_2w"], ["2–4 недели", "break_2_4w"], ["1–3 месяца", "break_1_3m"], ["4–6 месяцев", "break_4_6m"], ["6–12 месяцев", "break_6_12m"], ["Более года", "break_over_1y"]] },
    { text: "7️⃣ Кто инициировал расставание?", options: [["Меня бросили", "dumped"], ["Я бросил(а), но жалею", "dumper_regret"], ["Взаимное решение", "mutual"]] },
    { text: "8️⃣ Была ли измена?", options: [["Да, я изменил(а)", "cheated_self"], ["Да, изменили мне", "cheated_partner"], ["Нет, измен не было", "no_cheating"]] },
    { text: "9️⃣ Как вёл себя бывший при расставании?", options: [["Очень зол", "angry_very"], ["Немного зол", "angry_slight"], ["Очень грустил", "sad_very"], ["Немного грустил", "sad_slight"], ["Спокоен", "neutral"]] },
    { text: "🔟 Общались ли вы после расставания?", options: [["Да, ежедневно", "contact_daily"], ["Да, несколько раз", "contact_few"], ["Да, 1–2 раза", "contact_once"], ["Нет, не общались", "no_contact"]] },
    { text: "1️⃣1️⃣ Был ли интимный контакт после разрыва?", options: [["Да, секс", "intimate_sex"], ["Да, поцелуй", "intimate_kiss"], ["Нет, но виделись", "seen_no_intimate"], ["Нет, не виделись", "no_contact_no_seen"]] },
    { text: "1️⃣2️⃣ Встречается ли бывший с кем-то?", options: [["Да, точно", "new_partner_yes"], ["Думаю, да", "new_partner_probably"], ["Вряд ли", "new_partner_maybe"], ["Нет", "new_partner_no"]] },
    { text: "1️⃣3️⃣ Вы сейчас друзья?", options: [["Да, друзья", "friends_yes"], ["Нет, но хочу", "friends_want"], ["Нет, и ок", "friends_ok_no"], ["Не уверен(а)", "friends_unsure"]] },
    { text: "📋 Когда мы были вместе, мой бывший казался счастливым", options: [["5 — Полностью согласен", 5], ["4 — Скорее согласен", 4], ["3 — Затрудняюсь", 3], ["2 — Скорее не согласен", 2], ["1 — Полностью не согласен", 1]] },
    { text: "📋 Друзья и семья бывшего одобряли меня", options: [["5 — Полностью согласен", 5], ["4 — Скорее согласен", 4], ["3 — Затрудняюсь", 3], ["2 — Скорее не согласен", 2], ["1 — Полностью не согласен", 1]] },
    { text: "📋 После расставания бывший ведёт себя «то тепло, то холодно»", options: [["5 — Полностью согласен", 5], ["4 — Скорее согласен", 4], ["3 — Затрудняюсь", 3], ["2 — Скорее не согласен", 2], ["1 — Полностью не согласен", 1]] },
    { text: "📋 Я переживаю, что, возможно, бывший мне не подходил", options: [["5 — Полностью согласен", 5], ["4 — Скорее согласен", 4], ["3 — Затрудняюсь", 3], ["2 — Скорее не согласен", 2], ["1 — Полностью не согласен", 1]] },
    { text: "📋 Я чувствую необходимость извиниться перед бывшим", options: [["5 — Полностью согласен", 5], ["4 — Скорее согласен", 4], ["3 — Затрудняюсь", 3], ["2 — Скорее не согласен", 2], ["1 — Полностью не согласен", 1]] }
];

const LOADING_PHRASES = [
    "Анализ стадии проживания разрыва по модели Кюблер-Росс...",
    "Оценка паттернов созависимости в ответах...",
    "Расчет индекса готовности партнера к восстановлению контакта...",
    "Проверка ваших ответов на соответствие 12 признакам токсичных отношений...",
    "Анализ эмоциональной привязанности по шкале Боулби...",
    "Оценка совместимости по типам любви (Штернберг)...",
    "Расчет вероятности восстановления отношений...",
    "Генерация персонального отчёта...",
    "Подготовка рекомендаций..."
];

let currentQuestion = 0;
let answers = {};

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startQuiz() {
    currentQuestion = 0;
    answers = {};
    showScreen('quiz-screen');
    showQuestion();
}

function showQuestion() {
    const q = QUESTIONS[currentQuestion];
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = QUESTIONS.length;
    document.getElementById('question-text').textContent = q.text;
    const progress = ((currentQuestion) / QUESTIONS.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach(([text, value]) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = text;
        btn.onclick = () => selectOption(value);
        container.appendChild(btn);
    });
}

function selectOption(value) {
    answers[`q${currentQuestion + 1}`] = value;
    currentQuestion++;
    if (currentQuestion < QUESTIONS.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    showScreen('loading-screen');
    let progress = 0;
    let phraseIndex = 0;
    const loadingBar = document.getElementById('loading-bar');
    const loadingText = document.getElementById('loading-text');
    const loadingSteps = document.getElementById('loading-steps');
    LOADING_PHRASES.forEach((phrase, i) => {
        const step = document.createElement('div');
        step.className = 'step';
        step.id = `step-${i}`;
        step.textContent = phrase;
        loadingSteps.appendChild(step);
    });
    const interval = setInterval(() => {
        progress += 2;
        loadingBar.style.width = progress + '%';
        if (progress % 10 === 0 && phraseIndex < LOADING_PHRASES.length) {
            loadingText.textContent = LOADING_PHRASES[phraseIndex];
            document.getElementById(`step-${phraseIndex}`).classList.add('completed');
            if (phraseIndex + 1 < LOADING_PHRASES.length) {
                document.getElementById(`step-${phraseIndex + 1}`).classList.add('active');
            }
            phraseIndex++;
        }
        if (progress >= 100) {
            clearInterval(interval);
            calculateResults();
        }
    }, 150);
}

function calculateResults() {
    // ✅ НОВАЯ ЛОГИКА: МИНИМУМ 60 БАЛЛОВ
    let score = 60;  // Базовый балл теперь 60, а не 50
    
    // Положительные факторы
    if (answers['q7'] === 'dumped') score += 5;
    if (answers['q8'] === 'no_cheating') score += 15;
    if (answers['q9'] === 'sad_very' || answers['q9'] === 'sad_slight') score += 8;
    if (answers['q10'] === 'no_contact') score += 10;
    if (answers['q11'] === 'no_contact_no_seen') score += 5;
    if (answers['q12'] === 'new_partner_no') score += 12;
    if (answers['q13'] !== 'friends_yes') score += 7;
    if (answers['q14'] >= 4) score += 3;
    if (answers['q15'] >= 4) score += 3;
    if (answers['q17'] <= 2) score += 2;
    if (answers['q19'] >= 4) score += 2;
    
    // Отрицательные факторы (но не опускаем ниже 60)
    if (answers['q8'] === 'cheated_self' || answers['q8'] === 'cheated_partner') score -= 10;
    if (answers['q9'] === 'angry_very') score -= 5;
    if (answers['q10'] === 'contact_daily') score -= 8;
    if (answers['q12'] === 'new_partner_yes') score -= 10;
    if (answers['q13'] === 'friends_yes') score -= 5;
    
    // ✅ ГАРАНТИРУЕМ ДИАПАЗОН 60-100
    score = Math.min(100, Math.max(60, score));
    
    let category = 'warning';  // По умолчанию Fading Fast (60-74)
    if (score >= 90) category = 'excellent';
    else if (score >= 75) category = 'good';
    else if (score >= 60) category = 'warning';  // Fading Fast - минимальная категория
    
    showResult(score, category);
}

function showResult(score, category) {
    const titles = {'excellent': '✅ Отличные шансы', 'good': '👍 Хорошие шансы', 'warning': '⚠️ Шансы тают', 'low': '❌ Маловероятно'};
    const descriptions = {
        'excellent': 'Всё выглядит перспективно! Высока вероятность воссоединения.',
        'good': 'Ситуация не идеальна, но вернуть отношения реально.',
        'warning': 'У вас ещё есть возможность, но нужно действовать быстро.',
        'low': 'Шансы низки. Возможно, стоит сосредоточиться на себе.'
    };
    
    document.getElementById('score-value').textContent = score;
    document.getElementById('result-title').textContent = titles[category];
    document.getElementById('result-description').textContent = descriptions[category];
    
    const analysisList = document.getElementById('analysis-list');
    analysisList.innerHTML = `<li>Стадия проживания разрыва (Кюблер-Росс)</li><li>Паттерны созависимости</li><li>Индекс готовности партнёра</li><li>12 признаков токсичных отношений</li><li>Эмоциональная привязанность (Боулби)</li>`;
    
    showScreen('result-screen');
    window.quizResult = { score, category, answers };
}

function sendResults() {
    const data = { score: window.quizResult.score, category: window.quizResult.category, answers: window.quizResult.answers };
    tg.sendData(JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
    tg.MainButton.textColor = '#FFFFFF';
    tg.MainButton.color = '#667eea';
});