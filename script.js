let regexp = /^([1-9]|1[0])$/gm;

let json = `[
    {
        "name": "Бэтмен",
        "univers": "DC Comics",
        "alter_ego": "Брюс Уэйн",
        "career": ["борец с преступностью", "филантроп", "миллиардер"],
        "friends": ["Робин", "Бэтгерл"],
        "superpower": ["интеллект", "обширные познания", "знания боевых искусств", "ловкость"],
        "img": "./assets/images/batman.jpg"
    },
    {
        "name": "Супермен",
        "univers": "DC Comics",
        "alter_ego": "Кларк Кент",
        "career": "борец за справедливость",
        "friends": "собака Крипто",
        "superpower": ["непробиваемость", "суперсила", "полет", "самоисцеление", "суперзрение и суперслух"],
        "img": "./assets/images/superman.jpg"   
    },
    {
        "name": "Железный человек",
        "univers": "Marvel Comics",
        "alter_ego": "Тони Старк",
        "career": ["гений", "миллиардер", "плейбой", "филантроп"],
        "friends": "Мстители",
        "superpower": ["высокий уровень интеллекта", "широкие познания науки и техники", "связь со всемирной паутиной", "бронекостюмы"],
        "img": "assets/images/ironman.jpg"
    },
    {
        "name": "Спайдер-мен",
        "univers": "Marvel Comics",
        "alter_ego": "Питер Паркер",
        "career": ["борец за справедливость", "студент", "фотограф"],
        "friends": ["Мстители", "Фантастическая четверка", "Люди Икс"],
        "superpower": ["сверхчеловеческие рефлексы", "паучье чутье", "способность прилепляться к твердым поверхностям", "производство паутины"],
        "img": "./assets/images/spiderman.jpg"
    },
    {
        "name": "Капитан Америка",
        "univers": "Marvel Comics",
        "alter_ego": "Стивен Роджерс",
        "career": "супер-солдат",
        "friends": "Мстители",
        "superpower": ["сила", "выносливость", "бессмертие", "быстрая регенерация", "мастерство скрытности и боя"],
        "img": "./assets/images/captainamerica.jpg"
    },
    {
        "name": "Тор",
        "univers": "Marvel Comics",
        "alter_ego": "нет; полное имя — Тор Одинсон",
        "career": ["борец за справедливость", "скандинавский бог"],
        "friends": "Мстители",
        "superpower": ["молот Мьелнир", "все, что может бог"],
        "img": "./assets/images/tor.jpg"
    },
    {
        "name": "Халк",
        "univers": "Marvel Comics",
        "alter_ego": "Брюс Беннер",
        "career": ["супергерой", "борец за справедливость", "ученый-биохимик"],
        "friends": "Мстители",
        "superpower": ["сверхчеловеческая сила и скорость", "выносливость", "полет"],
        "img": "./assets/images/hulk.jpg"
    },
    {
        "name": "Чудо-женщина",
        "univers": "DC Comics",
        "alter_ego": "Диана Принс",
        "career": ["супергероиня", "секретарь-референт"],
        "friends": ["Лига Справедливости", "Бэтмен", "Супермен"],
        "superpower": ["сверхчеловеческая сила и скорость", "выносливость", "полет"],
        "img": "./assets/images/wonderwoman.jpg"
    },
    {
        "name": "Черная вдова",
        "univers": "Marvel Comics",
        "alter_ego": "Наташа Романофф",
        "career": ["супергероиня", "шпионка"],
        "friends": "Мстители",
        "superpower": ["пик человеческого физического потенциала", "замедленное старение", "знание многих языков"],
        "img": "./assets/images/blackwidow.jpg"
    },
    {
        "name": "Дэдпул",
        "univers": "Marvel Comics",
        "alter_ego": "Уэйд Уинстон Уилсон",
        "career": ["антигерой", "наемник"],
        "friends": ["частично Мстители", "Человек-паук", "Росомаха"],
        "superpower": ["высокий болевой порог", "регенерация и бессмертие", "сверхчеловеческая иммунная система"],
        "img": "./assets/images/deadpool.jpg"
    }
]`

document.addEventListener("DOMContentLoaded", function(){
    let super_heroes = JSON.parse(json);

    let content = "";
    super_heroes.forEach(function(element, index) {
        content += `
        <div class="card">
            <div class="title">
                <h4>${element.name}</h4>
            </div>
            <img class="image" src="${element.img}">
            <div class="container">
                <div><span class="el_name">Вселенная:</span> ${element.univers}</div>
                <div><span class="el_name">Альтер эго:</span> ${element.alter_ego}</div>
                <div><span class="el_name">Род деятельности:</span> ${element.career}</div>
                <div><span class="el_name">Друзья:</span> ${element.friends}</div>
                <div><span class="el_name">Суперсилы:</span> ${element.superpower}</div>
                <div><span class="el_name">Личная оценка:</span><input type="text" id="id_${index}" placeholder="от 1 до 10"></div>
                <a class="btn" href="#" id="${index}" onclick="handleRating(this.id)">Оценить</a>
            </div>
        </div>`
    });

    document.querySelector(".wrapper").innerHTML = content.replace(/,([^\s])/g, ", $1");
})

function handleRating(index){
    let input = document.querySelector(`#id_${index}`);
    if (input.value.match(regexp)) {
        localStorage.setItem(index, input.value);
    } else {
        alert("Значение рейтинга дожно быть цифрой в диапазоне от 1 до 10");
    }
    input.value = "";
}

