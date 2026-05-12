const STORAGE_KEY = "quiet-portrait.answers.v2";
const POSITION_KEY = "quiet-portrait.position.v2";
const STARTED_KEY = "quiet-portrait.started.v2";

const sections = {
  hello: {
    title: "На ощупь",
    microcopy: "Начнем без парадного входа: коротко, честно, как в переписке.",
  },
  energy: {
    title: "Ритм",
    microcopy: "Теперь про твой обычный темп: где ты оживаешь, где устаешь, где становишься собой.",
  },
  taste: {
    title: "Вкус и картинка",
    microcopy: "Про цвета, запахи, вещи и картинки, которые почему-то попадают прямо в тебя.",
  },
  music: {
    title: "Что звучит",
    microcopy: "Не плейлист «любимое», а звуки, которые правда к тебе липнут.",
  },
  places: {
    title: "Дороги",
    microcopy: "Про места, куда тянет телом, глазами или просто внутренним компасом.",
  },
  memories: {
    title: "Кадры и истории",
    microcopy: "Пара кадров из памяти. Можно отвечать коротко, как будто описываешь фото.",
  },
  depth: {
    title: "Глубже",
    microcopy: "Чуть ниже поверхности: без великих формулировок, просто честно.",
  },
  language: {
    title: "Без пластика",
    microcopy: "Фразы, знаки и слова, которые не хочется стереть сразу после прочтения.",
  },
};

const questions = [
  {
    id: "basic_name",
    section: "hello",
    type: "text",
    question: "Как подписать тебя здесь, чтобы ты не закатила глаза?",
    note: "Имя, ник, прозвище — как тебе самой приятнее.",
    placeholder: "Например: Ира, Ириш, ник или что-то свое",
  },
  {
    id: "basic_warm_name",
    section: "hello",
    type: "text",
    question: "Как тебя можно назвать ласково, чтобы это не звучало как сахарная вата?",
    note: "Можно сразу написать и то, как лучше не называть.",
    placeholder: "Например: можно Ира, но не Ируся",
  },
  {
    id: "basic_three_words",
    section: "hello",
    type: "chips",
    question: "Какие три слова не стыдно было бы приклеить к тебе сегодня?",
    note: "Не обязательно самые красивые. Самые точные интереснее.",
    options: ["тихая сила", "смешная", "упрямая", "нежная", "внимательная", "резкая иногда", "мечтательная", "свой человек"],
    addOwn: true,
    customPlaceholder: "Добавить свое слово",
  },
  {
    id: "basic_first_notice",
    section: "hello",
    type: "cards",
    question: "Что в тебе видно сразу, а что открывается только своим?",
    note: "Выбери первое впечатление. Если «потом» важнее — добавь свое ниже.",
    options: [
      { value: "улыбку", title: "Улыбку", detail: "Тепло, открытость, легкость." },
      { value: "взгляд", title: "Взгляд", detail: "Внимание, глубина, настроение." },
      { value: "энергию", title: "Энергию", detail: "Темп, харизма, присутствие." },
      { value: "стиль", title: "Стиль", detail: "Одежда, детали, визуальный вкус." },
      { value: "спокойствие", title: "Спокойствие", detail: "Уверенность без лишнего шума." },
      { value: "манеру говорить", title: "Манеру говорить", detail: "Интонация, слова, паузы." },
    ],
  },
  {
    id: "basic_common_mood",
    section: "hello",
    type: "choice",
    question: "Если ты сегодня была бы погодой, что за прогноз?",
    note: "То самое состояние по умолчанию, но человеческим языком.",
    options: ["тихое", "солнечное", "собранное", "хаотичное", "ироничное", "мечтательное", "боевое", "как погода"],
    addOwn: true,
    customPlaceholder: "Свое настроение",
  },
  {
    id: "basic_surprising_fact",
    section: "hello",
    type: "textarea",
    question: "Какая твоя странность слишком маленькая для биографии, но очень твоя?",
    note: "Привычка, навык, история, вкус — что угодно.",
    placeholder: "Например: я..., хотя по мне не скажешь",
  },
  {
    id: "character_observer_actor",
    section: "energy",
    type: "scale",
    question: "Когда всё новое: ты сначала сканируешь комнату или уже что-то делаешь?",
    note: "Не про «хорошо/плохо», а про первый импульс.",
    minLabel: "сначала смотрю",
    maxLabel: "сразу делаю",
  },
  {
    id: "character_best_situations",
    section: "energy",
    type: "multi",
    question: "В какой обстановке тебя будто включают в розетку?",
    note: "Такие ситуации многое выдают.",
    options: ["в спокойном разговоре", "когда смешно", "в дороге", "когда надо спасать ситуацию", "в творчестве", "один на один", "когда о ком-то заботишься", "в новом месте"],
    addOwn: true,
    customPlaceholder: "Своя ситуация",
  },
  {
    id: "character_energy_givers",
    section: "energy",
    type: "chips",
    question: "Что может вернуть тебя к жизни быстрее кофе?",
    note: "Даже если это максимально бытовая вещь.",
    options: ["музыка", "дорога", "смешной разговор", "тишина", "движение", "красивое место", "новая идея", "объятия", "вкусная еда", "ночной разговор"],
    addOwn: true,
    customPlaceholder: "Что еще заряжает?",
  },
  {
    id: "character_energy_drainers",
    section: "energy",
    type: "chips",
    question: "А что вынимает батарейку, даже если внешне всё нормально?",
    note: "Можно выбрать несколько или написать свое.",
    options: ["шум", "конфликты", "спешка", "подвешенность", "одно и то же", "контроль", "одиночество", "слишком много сообщений", "когда давят"],
    addOwn: true,
    customPlaceholder: "Добавить свое",
  },
  {
    id: "character_comfort_self",
    section: "energy",
    type: "textarea",
    question: "Как ты ведешь себя рядом с человеком, с которым можно выдохнуть?",
    note: "Что меняется в тебе: голос, шутки, молчание, движения?",
    placeholder: "Например: я начинаю..., могу..., перестаю...",
  },
  {
    id: "aesthetic_colors",
    section: "taste",
    type: "chips",
    question: "Какие цвета ты бы пустила жить рядом с собой надолго?",
    note: "Не «любимый цвет с детства», а тот, который не надоедает.",
    options: ["молочный", "графитовый", "изумрудный", "бордовый", "небесный", "черный", "серебристый", "оливковый", "пыльно-розовый", "тепло-желтый"],
    addOwn: true,
    customPlaceholder: "Добавить цвет",
  },
  {
    id: "aesthetic_flowers",
    section: "taste",
    type: "multi",
    question: "Какие цветы тебе было бы приятно получить без внутреннего «ну ладно»?",
    note: "Или наоборот: какие вообще не твое.",
    options: ["подсолнухи", "пионы", "ромашки", "тюльпаны", "полевые", "сирень", "розы", "лаванда", "не знаю"],
    addOwn: true,
    customPlaceholder: "Добавить цветок",
  },
  {
    id: "aesthetic_sunflowers",
    section: "taste",
    type: "textarea",
    question: "Подсолнухи для тебя — это про что?",
    note: "Про тепло, деревню, лето, странность, ничего особенного? Можно честно.",
    placeholder: "Например: они для меня про...",
  },
  {
    id: "aesthetic_personal_atmosphere",
    section: "taste",
    type: "textarea",
    question: "Где можно потерять пару часов и не жалеть ни одной минуты?",
    note: "Не обязательно реальное. Важны свет, воздух, запахи, материалы.",
    placeholder: "Там свет..., пахнет..., за окном..., звучит...",
  },
  {
    id: "aesthetic_inspirations",
    section: "taste",
    type: "textarea",
    question: "Какой кадр недавно прицепился к голове и никак не отлипает?",
    note: "Фильм, фото, клип, обложка, аккаунт, вид из окна — что угодно.",
    placeholder: "Например: кадр, где..., фото с..., сцена из...",
  },
  {
    id: "aesthetic_texture",
    section: "taste",
    type: "cards",
    question: "Если выбирать руками, а не глазами, что ближе?",
    note: "Не думай долго, просто выбери то, к чему тянет.",
    options: [
      { value: "воздух", title: "Воздух", detail: "Светло, чисто, свободно." },
      { value: "бумага", title: "Бумага", detail: "Письма, заметки, дневниковость." },
      { value: "стекло", title: "Стекло", detail: "Прозрачность, блики, холодок." },
      { value: "ткань", title: "Ткань", detail: "Мягкость, тепло, уют." },
      { value: "дорога", title: "Дорога", detail: "Пыль, солнце, движение." },
      { value: "ночь", title: "Ночь", detail: "Глубина, музыка, тишина." },
    ],
    addOwn: true,
    customPlaceholder: "Своя фактура",
  },
  {
    id: "taste_summer",
    section: "taste",
    type: "textarea",
    question: "Какой вкус сразу делает в голове июль?",
    note: "Фрукт, ягода, напиток, мороженое, запах — всё подходит.",
    placeholder: "Например: черешня из холодильника, персик, холодный чай...",
  },
  {
    id: "music_current_mood",
    section: "music",
    type: "text",
    question: "Какой трек сейчас поставил бы твоей жизни фон?",
    note: "Можно название, исполнителя или просто строчку.",
    placeholder: "Трек, исполнитель или строчка",
  },
  {
    id: "music_road_track",
    section: "music",
    type: "text",
    question: "Дверь закрылась, дорога началась. Что включаешь первым?",
    note: "Тот самый трек «поехали».",
    placeholder: "Название, исполнитель или вайб",
  },
  {
    id: "music_calm_track",
    section: "music",
    type: "text",
    question: "Какой звук умеет сказать тебе «тише, всё нормально»?",
    note: "Песня, жанр, дождь, чужой голос, тишина — всё считается.",
    placeholder: "Например: пианино, дождь, конкретный трек...",
  },
  {
    id: "music_personal_sound",
    section: "music",
    type: "textarea",
    question: "Как звучит день, в котором тебе хорошо?",
    note: "Темп, настроение, голос, инструменты, паузы — как угодно.",
    placeholder: "Например: теплый, медленный, с дорогой, немного грустный, но светлый...",
  },
  {
    id: "places_trailer_first",
    section: "places",
    type: "text",
    question: "Трейлер, свободная неделя, никто не дергает. Куда рванешь?",
    note: "Можно конкретное место или просто направление.",
    placeholder: "Море, горы, Алтай, маленький город, куда глаза глядят...",
  },
  {
    id: "places_travel_morning",
    section: "places",
    type: "textarea",
    question: "Какое утро в дороге осталось бы у тебя под кожей?",
    note: "Окно, воздух, еда, звук, люди, тишина — любые детали.",
    placeholder: "Проснулась..., за окном..., рядом..., пахнет...",
  },
  {
    id: "places_trip_priority",
    section: "places",
    type: "multi",
    question: "Из-за чего поездка потом светится в памяти?",
    note: "Можно выбрать несколько.",
    options: ["сама дорога", "место", "люди рядом", "еда", "тишина", "новое ощущение", "виды", "спонтанность", "чтобы было удобно"],
    addOwn: true,
    customPlaceholder: "Добавить свое",
  },
  {
    id: "places_dream_place",
    section: "places",
    type: "text",
    question: "Куда тебя тянет без нормального объяснения, просто тянет и всё?",
    note: "Можно не рационально. Просто куда тянет.",
    placeholder: "Страна, город, берег, горы, домик, дорога...",
  },
  {
    id: "places_take_with",
    section: "places",
    type: "chips",
    question: "Что ты тащишь с собой «на всякий случай», хотя кто-то бы посмеялся?",
    note: "Практичное, смешное, личное — всё подходит.",
    options: ["наушники", "книгу", "плед", "камеру", "вкусняшки", "удобную обувь", "блокнот", "термос", "вещь на удачу"],
    addOwn: true,
    customPlaceholder: "Добавить вещь",
  },
  {
    id: "places_parachute",
    section: "places",
    type: "choice",
    question: "Тебе завтра предлагают парашют. Что первое происходит в голове?",
    note: "Выбери ближайшее по ощущениям.",
    options: ["страшно", "интересно", "надо попробовать", "точно нет", "только с кем-то рядом", "лучше параплан"],
    addOwn: true,
    customPlaceholder: "Свой вариант",
  },
  {
    id: "places_height_pull",
    section: "places",
    type: "multi",
    question: "Где у тебя внутри становится просторнее?",
    note: "Не обязательно экстрим. Можно про спокойное ощущение.",
    options: ["параплан", "парашют", "горы", "вода", "скорость", "длинная дорога", "рассвет", "тишина"],
    addOwn: true,
    customPlaceholder: "Что-то другое",
  },
  {
    id: "memories_recurring_memory",
    section: "memories",
    type: "textarea",
    question: "Какой момент из прошлого иногда включается сам, как случайный трек?",
    note: "Можно описать один кадр, без длинной истории.",
    placeholder: "Где это было, какой был свет, кто был рядом, что ты чувствовала?",
  },
  {
    id: "memories_special_place",
    section: "memories",
    type: "text",
    question: "Есть место, у которого для тебя есть второй слой?",
    note: "Город, двор, комната, дорога, берег, крыша, кухня — любое.",
    placeholder: "Название места или короткое описание",
  },
  {
    id: "memories_photo_frame",
    section: "memories",
    type: "textarea",
    question: "Какой кадр ты бы хотела найти через десять лет и зависнуть?",
    note: "Он может уже существовать или быть будущим.",
    placeholder: "Кадр, где...",
  },
  {
    id: "memories_phrase",
    section: "memories",
    type: "text",
    question: "Какая фраза живет в голове без прописки?",
    note: "Совет, строчка из песни, чей-то голос, твоя собственная мысль.",
    placeholder: "Фраза, совет, строчка...",
  },
  {
    id: "memories_beautiful_story",
    section: "memories",
    type: "textarea",
    question: "Про какой свой период ты можешь сказать: «там я, конечно, вывезла»?",
    note: "Можно про учебу, работу, семью, себя, любой личный поворот.",
    placeholder: "Это было время, когда...",
  },
  {
    id: "depth_hidden_dream",
    section: "depth",
    type: "textarea",
    question: "Какое «когда-нибудь» ты обычно держишь при себе?",
    note: "Можно без объяснений. Можно одним предложением.",
    placeholder: "Мне бы хотелось...",
  },
  {
    id: "depth_true_life",
    section: "depth",
    type: "textarea",
    question: "Какой день заканчивается мыслью: «вот это было мое»?",
    note: "Не про статус, а про ощущение: утро, люди, дело, место, ритм.",
    placeholder: "День начинается..., вокруг..., я чувствую...",
  },
  {
    id: "depth_future_feeling",
    section: "depth",
    type: "chips",
    question: "Какого ощущения тебе сейчас не хватает, как воздуха?",
    note: "Иногда хочется не события, а состояния.",
    options: ["свободы", "спокойствия", "восторга", "гордости", "безопасности", "любви", "ясности", "силы", "легкости"],
    addOwn: true,
    customPlaceholder: "Добавить чувство",
  },
  {
    id: "depth_success_meaning",
    section: "depth",
    type: "multi",
    question: "По чему ты понимаешь: «я не просто бегаю по кругу»?",
    note: "Можно выбрать близкое или добавить свою формулировку.",
    options: ["есть выбор", "есть деньги", "меня ценят", "внутри спокойно", "рядом свои", "я стала лучше в деле", "от меня есть польза", "мне красиво жить", "я не предаю себя"],
    addOwn: true,
    customPlaceholder: "Свое определение",
  },
  {
    id: "depth_people",
    section: "depth",
    type: "chips",
    question: "По каким людям ты понимаешь: «рядом можно быть нормальной собой»?",
    note: "Что должно быть в человеке, чтобы рядом стало проще дышать?",
    options: ["честность", "юмор", "верность", "смелость", "бережность", "ум", "легкость", "ответственность", "глубина", "самоирония"],
    addOwn: true,
    customPlaceholder: "Добавить качество",
  },
  {
    id: "depth_never_lose",
    section: "depth",
    type: "textarea",
    question: "Что в себе ты бы спрятала в карман и не отдала ни при каких обстоятельствах?",
    note: "Можно ответить одним предложением.",
    placeholder: "Я хочу сохранить в себе...",
  },
  {
    id: "depth_inner_support",
    section: "depth",
    type: "textarea",
    question: "Что тебя держит, когда день рассыпается на мелкие куски?",
    note: "Люди, вера, принципы, опыт, упрямство, юмор — всё подходит.",
    placeholder: "Меня держит...",
  },
  {
    id: "depth_pride",
    section: "depth",
    type: "textarea",
    question: "За что ты можешь себе тихо, без свидетелей сказать: «я молодец»?",
    note: "Можно про учебу, характер, дело, отношения с собой — что угодно.",
    placeholder: "Я могу гордиться тем, что...",
  },
  {
    id: "language_frequent_words",
    section: "language",
    type: "textarea",
    question: "Какие твои фразы можно украсть и всё равно будет понятно, что они твои?",
    note: "Словечки, реакции, присказки, смешные формулировки.",
    placeholder: "Например: я часто говорю...",
  },
  {
    id: "language_emotions",
    section: "language",
    type: "cards",
    question: "Когда внутри слишком много, куда это девается?",
    note: "Выбери ближайший вариант.",
    options: [
      { value: "говорю прямо", title: "Говорю прямо", detail: "Без долгого обхода вокруг смысла." },
      { value: "шучу", title: "Шучу", detail: "Юмор как способ прожить и объяснить." },
      { value: "молчу", title: "Молчу", detail: "Сначала перевариваю внутри." },
      { value: "пишу", title: "Пишу", detail: "Текстом выходит точнее." },
      { value: "действую", title: "Действую", detail: "Показываю заботу поступками." },
      { value: "очень ярко", title: "Очень ярко", detail: "Если чувствую, это видно." },
    ],
  },
  {
    id: "language_tone",
    section: "language",
    type: "chips",
    question: "Каким голосом про тебя можно говорить, чтобы не соврать?",
    note: "Можно выбрать несколько: человек редко звучит одной нотой.",
    options: ["нежный", "уверенный", "ироничный", "глубокий", "дерзкий", "спокойный", "лаконичный", "теплый", "кинематографичный"],
    addOwn: true,
    customPlaceholder: "Добавить тон",
  },
  {
    id: "language_no_go",
    section: "language",
    type: "textarea",
    question: "Какие слова про тебя хочется смахнуть со стола?",
    note: "Пафос, клише, слишком сладко, слишком официально — что угодно.",
    placeholder: "Например: пафос, клише, слишком мило, слишком официально...",
  },
  {
    id: "language_self_line",
    section: "language",
    type: "text",
    question: "Одна строчка про тебя, без объяснений. Какая?",
    note: "Не обязательно идеально. Можно сырую мысль.",
    placeholder: "Например: «я собираю свет из маленьких деталей»",
  },
  {
    id: "language_unique_details",
    section: "language",
    type: "textarea",
    question: "Какие мелочи палят тебя сильнее паспорта?",
    note: "Привычки, жесты, предметы, странности, маленькие ритуалы.",
    placeholder: "Например: я всегда..., у меня есть привычка..., я люблю...",
  },
  {
    id: "language_symbols",
    section: "language",
    type: "chips",
    question: "Какие образы будто уже лежат у тебя внутри?",
    note: "Просто выбери то, что отзывается.",
    options: ["окно", "дорога", "вода", "город", "ночь", "солнце", "письма", "зеркало", "карта", "сад", "огонь", "подсолнух"],
    addOwn: true,
    customPlaceholder: "Добавить образ",
  },
];

const bridgeTexts = [
  "О, это хорошая деталь.",
  "Записал этот оттенок.",
  "Не зависаем, идем дальше.",
  "Появился еще один кусочек.",
  "Можно одним словом — тоже считается.",
  "Сейчас будет вопрос чуть глубже.",
];

const saveMessages = [
  "Есть.",
  "Запомнил.",
  "Эта деталь пригодится.",
  "Еще один кусочек на месте.",
];

const startView = document.querySelector("#startView");
const surveyView = document.querySelector("#surveyView");
const finalView = document.querySelector("#finalView");
const startButton = document.querySelector("#startButton");
const startFreshButton = document.querySelector("#startFreshButton");
const sectionLabel = document.querySelector("#sectionLabel");
const sectionTitle = document.querySelector("#sectionTitle");
const questionCounter = document.querySelector("#questionCounter");
const progressFill = document.querySelector("#progressFill");
const questionPanel = document.querySelector("#questionPanel");
const bridgeText = document.querySelector("#bridgeText");
const questionText = document.querySelector("#questionText");
const questionNote = document.querySelector("#questionNote");
const answerSlot = document.querySelector("#answerSlot");
const saveState = document.querySelector("#saveState");
const backButton = document.querySelector("#backButton");
const skipButton = document.querySelector("#skipButton");
const resetButton = document.querySelector("#resetButton");
const nextButton = document.querySelector("#nextButton");
const downloadButton = document.querySelector("#downloadButton");
const copyButton = document.querySelector("#copyButton");
const finalResetButton = document.querySelector("#finalResetButton");
const copyState = document.querySelector("#copyState");
const summaryGrid = document.querySelector("#summaryGrid");

let answers = readJSON(STORAGE_KEY, {});
let currentIndex = readNumber(POSITION_KEY, 0);
let saveStateTimer;
let copyStateTimer;

function saveAnswers(nextAnswers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAnswers));
  } catch (error) {
    console.warn("Не удалось сохранить ответы в localStorage", error);
  }

}

function init() {
  bindEvents();
  initCanvasBackdrop();

  const started = localStorage.getItem(STARTED_KEY) === "true";
  updateStartActions();

  if (started) {
    showSurvey();
    return;
  }

  showStart();
}

function bindEvents() {
  startButton.addEventListener("click", () => {
    localStorage.setItem(STARTED_KEY, "true");
    showSurvey();
  });

  startFreshButton.addEventListener("click", resetWithConfirm);
  resetButton.addEventListener("click", resetWithConfirm);
  finalResetButton.addEventListener("click", resetWithConfirm);

  backButton.addEventListener("click", () => {
    if (currentIndex <= 0) {
      showStart();
      return;
    }

    currentIndex -= 1;
    savePosition();
    renderQuestion(true);
  });

  skipButton.addEventListener("click", () => {
    goNext();
  });

  nextButton.addEventListener("click", () => {
    if (nextButton.disabled) {
      return;
    }

    goNext();
  });

  answerSlot.addEventListener("input", (event) => {
    const field = event.target.closest("[data-text-answer]");
    if (!field) {
      return;
    }

    const question = getCurrentQuestion();
    setAnswer(question.id, field.value);
  });

  answerSlot.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-answer-option]");
    const addButton = event.target.closest("[data-add-custom]");

    if (optionButton) {
      handleOptionClick(optionButton.dataset.value);
      return;
    }

    if (addButton) {
      addCustomValue();
    }
  });

  answerSlot.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || !event.target.matches("[data-custom-input]")) {
      return;
    }

    event.preventDefault();
    addCustomValue();
  });

  downloadButton.addEventListener("click", downloadAnswers);
  copyButton.addEventListener("click", copyAnswers);

  document.addEventListener("keydown", (event) => {
    if (surveyView.classList.contains("hidden") || event.key !== "Enter") {
      return;
    }

    const isTextarea = event.target && event.target.tagName === "TEXTAREA";
    const isCustomInput = event.target && event.target.matches("[data-custom-input]");
    if (isTextarea || isCustomInput || nextButton.disabled) {
      return;
    }

    goNext();
  });
}

function showStart() {
  updateStartActions();
  startView.classList.remove("hidden");
  surveyView.classList.add("hidden");
  finalView.classList.add("hidden");
}

function showSurvey() {
  startView.classList.add("hidden");
  surveyView.classList.remove("hidden");
  finalView.classList.add("hidden");

  if (currentIndex >= questions.length) {
    showFinal();
    return;
  }

  renderQuestion(false);
}

function showFinal() {
  currentIndex = questions.length;
  savePosition();
  startView.classList.add("hidden");
  surveyView.classList.add("hidden");
  finalView.classList.remove("hidden");
  progressFill.style.width = "100%";
  progressFill.parentElement.setAttribute("aria-valuenow", "100");
  renderSummary();
}

function renderQuestion(animate) {
  const question = getCurrentQuestion();
  const section = sections[question.section];
  const sectionStep = questions.slice(0, currentIndex + 1).filter((item) => item.section === question.section).length;
  const bridge = sectionStep === 1 ? section.microcopy : bridgeTexts[currentIndex % bridgeTexts.length];

  if (animate) {
    questionPanel.classList.add("is-entering");
  }

  sectionLabel.textContent = `Шаг ${getSectionNumber(question.section)} из ${Object.keys(sections).length}`;
  sectionTitle.textContent = section.title;
  questionCounter.textContent = `${currentIndex + 1} / ${questions.length}`;
  bridgeText.textContent = bridge;
  questionText.textContent = question.question;
  questionNote.textContent = question.note || "";
  renderCurrentAnswer();
  updateProgress();
  updateNavigation();

  if (animate) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => questionPanel.classList.remove("is-entering"));
    });
  }
}

function renderCurrentAnswer() {
  const question = getCurrentQuestion();

  if (question.type === "text") {
    answerSlot.innerHTML = `
      <label class="field-label" for="${question.id}">Ответ</label>
      <input class="text-input" id="${question.id}" data-text-answer type="text" value="${escapeAttribute(answers[question.id] || "")}" placeholder="${escapeAttribute(question.placeholder || "")}" autocomplete="off" />
    `;
    focusField();
    updateNavigation();
    return;
  }

  if (question.type === "textarea") {
    answerSlot.innerHTML = `
      <label class="field-label" for="${question.id}">Ответ</label>
      <textarea class="text-area" id="${question.id}" data-text-answer placeholder="${escapeAttribute(question.placeholder || "")}">${escapeHtml(answers[question.id] || "")}</textarea>
    `;
    focusField();
    updateNavigation();
    return;
  }

  if (question.type === "scale") {
    answerSlot.innerHTML = renderScale(question);
    updateNavigation();
    return;
  }

  answerSlot.innerHTML = renderOptions(question);
  updateNavigation();
}

function renderScale(question) {
  const current = Number(answers[question.id]);
  const buttons = Array.from({ length: 10 }, (_, index) => {
    const value = index + 1;
    const selected = current === value;
    return `
      <button class="scale-button ${selected ? "is-selected" : ""}" type="button" data-answer-option data-value="${value}" aria-pressed="${selected}">
        ${value}
      </button>
    `;
  }).join("");

  return `
    <div class="scale-grid" role="group" aria-label="${escapeAttribute(question.question)}">
      ${buttons}
    </div>
    <div class="scale-labels">
      <span>${escapeHtml(question.minLabel || "1")}</span>
      <span>${escapeHtml(question.maxLabel || "10")}</span>
    </div>
  `;
}

function renderOptions(question) {
  const isMulti = question.type === "multi" || question.type === "chips";
  const selectedValues = normalizeSelected(question);
  const selectedList = isMulti ? selectedValues : selectedValues ? [selectedValues] : [];
  const tileClass = question.type === "chips" || question.type === "multi" ? "chip" : "option-tile";
  const gridClass = question.type === "chips" || question.type === "multi" ? "chip-grid" : "choice-grid";
  const optionsFromAnswers = selectedList.filter((value) => !question.options.some((option) => normalizeOption(option).value === value));
  const allOptions = [...question.options, ...optionsFromAnswers];

  const optionsHtml = allOptions.map((option) => {
    const normalized = normalizeOption(option);
    const selected = isMulti ? selectedList.includes(normalized.value) : selectedValues === normalized.value;
    const detail = normalized.detail ? `<span class="option-detail">${escapeHtml(normalized.detail)}</span>` : "";
    const title = tileClass === "chip"
      ? escapeHtml(normalized.title)
      : `<span class="option-title">${escapeHtml(normalized.title)}</span>${detail}`;

    return `
      <button class="${tileClass} ${selected ? "is-selected" : ""}" type="button" data-answer-option data-value="${escapeAttribute(normalized.value)}" aria-pressed="${selected}">
        ${title}
      </button>
    `;
  }).join("");

  const custom = question.addOwn ? `
    <div class="custom-row">
      <input class="custom-input" data-custom-input type="text" placeholder="${escapeAttribute(question.customPlaceholder || "Добавить свое")}" />
      <button class="ghost-button" data-add-custom type="button">Добавить</button>
    </div>
  ` : "";

  return `
    <div class="${gridClass}" role="group" aria-label="${escapeAttribute(question.question)}">
      ${optionsHtml}
    </div>
    ${custom}
  `;
}

function handleOptionClick(rawValue) {
  const question = getCurrentQuestion();

  if (question.type === "scale") {
    setAnswer(question.id, Number(rawValue));
    renderCurrentAnswer();
    return;
  }

  if (question.type === "multi" || question.type === "chips") {
    const selected = normalizeSelected(question);
    const exists = selected.includes(rawValue);
    const next = exists ? selected.filter((value) => value !== rawValue) : [...selected, rawValue];
    setAnswer(question.id, next);
    renderCurrentAnswer();
    return;
  }

  setAnswer(question.id, rawValue);
  renderCurrentAnswer();
}

function addCustomValue() {
  const input = answerSlot.querySelector("[data-custom-input]");
  const question = getCurrentQuestion();
  const value = input ? input.value.trim() : "";

  if (!value) {
    return;
  }

  if (question.type === "multi" || question.type === "chips") {
    const selected = normalizeSelected(question);
    if (!selected.includes(value)) {
      setAnswer(question.id, [...selected, value]);
    }
  } else {
    setAnswer(question.id, value);
  }

  renderCurrentAnswer();
}

function setAnswer(id, value) {
  if (isEmptyValue(value)) {
    delete answers[id];
  } else {
    answers[id] = value;
  }

  saveAnswers(answers);
  savePosition();
  showSaved(saveMessages[currentIndex % saveMessages.length]);
  updateProgress();
  updateNavigation();
}

function goNext() {
  if (currentIndex >= questions.length - 1) {
    showFinal();
    return;
  }

  currentIndex += 1;
  savePosition();
  renderQuestion(true);
}

function updateNavigation() {
  const question = getCurrentQuestion();
  const hasAnswer = question ? isAnswerFilled(answers[question.id]) : false;

  backButton.textContent = currentIndex === 0 ? "К началу" : "Назад";
  nextButton.textContent = currentIndex === questions.length - 1 ? "Завершить" : "Дальше";
  nextButton.disabled = !hasAnswer;
  skipButton.textContent = currentIndex === questions.length - 1 ? "Завершить без ответа" : "Пропустить";
}

function updateProgress() {
  const question = getCurrentQuestion();
  const answeredHere = question && isAnswerFilled(answers[question.id]) ? 1 : 0;
  const value = ((currentIndex + answeredHere) / questions.length) * 100;
  const normalizedValue = Math.min(100, Math.max(0, value));
  progressFill.style.width = `${normalizedValue}%`;
  progressFill.parentElement.setAttribute("aria-valuenow", String(Math.round(normalizedValue)));
}

function renderSummary() {
  const sectionEntries = Object.entries(sections);
  const answeredCount = questions.filter((question) => isAnswerFilled(answers[question.id])).length;
  const summaryHeader = document.querySelector(".final-view .lead");
  summaryHeader.textContent = `Сохранено ${answeredCount} из ${questions.length} ответов. Полный набор можно скачать файлом или скопировать в буфер обмена.`;

  summaryGrid.innerHTML = sectionEntries.map(([sectionId, section]) => {
    const answeredQuestions = questions
      .filter((question) => question.section === sectionId && isAnswerFilled(answers[question.id]))
      .slice(0, 3);

    const body = answeredQuestions.length
      ? answeredQuestions.map((question) => `<p><strong>${escapeHtml(shortQuestion(question.question))}</strong>: ${escapeHtml(formatAnswer(answers[question.id]))}</p>`).join("")
      : "<p>В этом блоке пока нет ответа.</p>";

    return `
      <article class="summary-item">
        <h3>${escapeHtml(section.title)}</h3>
        ${body}
      </article>
    `;
  }).join("");
}

function buildExportPayload() {
  return {
    meta: {
      title: "Маленькое интервью про вкусы, музыку и детали",
      exportedAt: new Date().toISOString(),
      answeredCount: questions.filter((question) => isAnswerFilled(answers[question.id])).length,
      totalQuestions: questions.length,
    },
    answers,
    responses: questions.map((question) => ({
      key: question.id,
      section: sections[question.section].title,
      question: question.question,
      answer: answers[question.id] ?? null,
    })),
  };
}

function downloadAnswers() {
  const payload = buildExportPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `quiet-portrait-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showCopyState("Файл с ответами подготовлен.");
}

async function copyAnswers() {
  const text = JSON.stringify(buildExportPayload(), null, 2);

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      copyWithFallback(text);
    }

    showCopyState("Ответы скопированы.");
  } catch (error) {
    copyWithFallback(text);
    showCopyState("Ответы скопированы резервным способом.");
  }
}

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function resetWithConfirm() {
  const confirmed = window.confirm("Очистить все ответы и начать заново?");
  if (!confirmed) {
    return;
  }

  answers = {};
  currentIndex = 0;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(POSITION_KEY);
  localStorage.removeItem(STARTED_KEY);
  startButton.textContent = "Начать";
  startFreshButton.classList.add("hidden");
  showStart();
}

function updateStartActions() {
  const hasProgress = Object.keys(answers).length > 0;
  startButton.textContent = hasProgress ? "Продолжить" : "Начать";
  startFreshButton.classList.toggle("hidden", !hasProgress);
}

function getCurrentQuestion() {
  return questions[Math.min(currentIndex, questions.length - 1)];
}

function getSectionNumber(sectionId) {
  return Object.keys(sections).indexOf(sectionId) + 1;
}

function normalizeOption(option) {
  if (typeof option === "string") {
    return {
      value: option,
      title: option,
      detail: "",
    };
  }

  return {
    value: option.value,
    title: option.title || option.value,
    detail: option.detail || "",
  };
}

function normalizeSelected(question) {
  const value = answers[question.id];

  if (question.type === "multi" || question.type === "chips") {
    return Array.isArray(value) ? value : [];
  }

  return typeof value === "string" ? value : "";
}

function isAnswerFilled(value) {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  return typeof value === "string" && value.trim().length > 0;
}

function isEmptyValue(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "number") {
    return !Number.isFinite(value);
  }

  return typeof value !== "string" || value.trim().length === 0;
}

function formatAnswer(value) {
  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return String(value);
}

function shortQuestion(text) {
  return text.replace(/[?]$/, "");
}

function focusField() {
  const field = answerSlot.querySelector("[data-text-answer]");
  if (!field || window.matchMedia("(max-width: 760px)").matches) {
    return;
  }

  field.focus({ preventScroll: true });
}

function showSaved(message) {
  clearTimeout(saveStateTimer);
  saveState.textContent = message;
  saveState.classList.add("is-visible");
  saveStateTimer = window.setTimeout(() => {
    saveState.classList.remove("is-visible");
  }, 1600);
}

function showCopyState(message) {
  clearTimeout(copyStateTimer);
  copyState.textContent = message;
  copyState.classList.add("is-visible");
  copyStateTimer = window.setTimeout(() => {
    copyState.classList.remove("is-visible");
  }, 2200);
}

function savePosition() {
  try {
    localStorage.setItem(POSITION_KEY, String(currentIndex));
  } catch (error) {
    console.warn("Не удалось сохранить позицию", error);
  }
}

function readJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function readNumber(key, fallback) {
  const value = Number(localStorage.getItem(key));
  return Number.isFinite(value) && value >= 0 ? value : fallback;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function initCanvasBackdrop() {
  const canvas = document.querySelector("#moodCanvas");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canvas || reducedMotion) {
    return;
  }

  const context = canvas.getContext("2d");
  const points = [];
  const colors = ["#167f78", "#d65f47", "#c69322", "#235f8a"];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;

  function resize() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    createPoints();
  }

  function createPoints() {
    points.length = 0;
    const amount = Math.max(24, Math.floor((width * height) / 42000));

    for (let index = 0; index < amount; index += 1) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.2 + Math.random() * 2.2,
        vx: -0.18 + Math.random() * 0.36,
        vy: -0.14 + Math.random() * 0.28,
        color: colors[index % colors.length],
      });
    }
  }

  function draw() {
    context.clearRect(0, 0, width, height);

    points.forEach((point, index) => {
      point.x += point.vx;
      point.y += point.vy;

      if (point.x < -20) point.x = width + 20;
      if (point.x > width + 20) point.x = -20;
      if (point.y < -20) point.y = height + 20;
      if (point.y > height + 20) point.y = -20;

      context.beginPath();
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
      context.fillStyle = point.color;
      context.globalAlpha = 0.22;
      context.fill();

      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const nextPoint = points[nextIndex];
        const distance = Math.hypot(point.x - nextPoint.x, point.y - nextPoint.y);

        if (distance < 150) {
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(nextPoint.x, nextPoint.y);
          context.strokeStyle = point.color;
          context.globalAlpha = 0.08 * (1 - distance / 150);
          context.lineWidth = 1;
          context.stroke();
        }
      }
    });

    context.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

init();
