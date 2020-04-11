let CountiesEn = [
"Spain",
"Italy",
"Germany",
"France",
"US",
"United Kingdom",
"Iran",
"China",
"Turkey",
"Belgium",
"Switzerland",
"Netherlands",
"Brazil",
"Portugal",
"Austria",
"Russia",
"Canada",
"Korea, South",
"Israel",
"Sweden",
"India",
"Ecuador",
"Ireland",
"Chile",
"Norway",
"Poland",
"Denmark",
"Czechia",
"Japan",
"Romania",
"Peru",
"Pakistan",
"Malaysia",
"Philippines",
"Saudi Arabia",
"Indonesia",
"Mexico",
"Luxembourg",
"Serbia",
"United Arab Emirates",
"Australia",
"Finland",
"Panama",
"Qatar",
"Thailand",
"Dominican Republic",
"Colombia",
"Ukraine",
"Singapore",
"Greece",
"South Africa",
"Belarus",
"Argentina",
"Algeria",
"Egypt",
"Iceland",
"Croatia",
"Moldova",
"Morocco",
"New Zealand",
"Iraq",
"Estonia",
"Hungary",
"Slovenia",
"Lithuania",
"Kuwait",
"Azerbaijan",
"Armenia",
"Bahrain",
"Bosnia and Herzegovina",
"Kazakhstan",
"Cameroon",
"Slovakia",
"Diamond Princess",
"North Macedonia",
"Tunisia",
"Bulgaria",
"Uzbekistan",
"Latvia",
"Lebanon",
"Andorra",
"Cyprus",
"Cuba",
"Costa Rica",
"Afghanistan",
"Oman",
"Uruguay",
"Cote d'Ivoire",
"Burkina Faso",
"Bangladesh",
"Albania",
"Niger",
"Honduras",
"Taiwan*",
"Ghana",
"Jordan",
"Malta",
"San Marino",
"Mauritius",
"Kyrgyzstan",
"Nigeria",
"Bolivia",
"West Bank and Gaza",
"Senegal",
"Vietnam",
"Montenegro",
"Georgia",
"Congo (Kinshasa)",
"Guinea",
"Sri Lanka",
"Kenya",
"Kosovo",
"Venezuela",
"Djibouti",
"Brunei",
"Paraguay",
"Guatemala",
"Cambodia",
"El Salvador",
"Rwanda",
"Trinidad and Tobago",
"Madagascar",
"Mali",
"Monaco",
"Liechtenstein",
"Togo",
"Barbados",
"Ethiopia",
"Jamaica",
"Congo (Brazzaville)",
"Uganda",
"Gabon",
"Bahamas",
"Zambia",
"Guyana",
"Liberia",
"Guinea-Bissau",
"Benin",
"Eritrea",
"Tanzania",
"Haiti",
"Burma",
"Libya",
"Angola",
"Antigua and Barbuda",
"Maldives",
"Syria",
"Equatorial Guinea",
"Mozambique",
"Dominica",
"Fiji",
"Laos",
"Mongolia",
"Namibia",
"Sudan",
"Saint Lucia",
"Botswana",
"Eswatini",
"Grenada",
"Saint Vincent and the Grenadines",
"Somalia",
"Chad",
"Saint Kitts and Nevis",
"Seychelles",
"Zimbabwe",
"Belize",
"Suriname",
"Malawi",
"MS Zaandam",
"Nepal",
"Central African Republic",
"Holy See",
"Sierra Leone",
"Cabo Verde",
"Mauritania",
"Nicaragua",
"Bhutan",
"Gambia",
"Sao Tome and Principe",
"South Sudan",
"Western Sahara",
"Burundi",
"Papua New Guinea",
"Timor-Leste",
"Yemen"]

let countriesRu = [
"Испания",
"Италия",
"Германия",
"Франция",
"США",
"Объединенное Королевство",
"Иран",
"Китай",
"Турция",
"Бельгия",
"Швейцария",
"Нидерланды",
"Бразилия",
"Португалия",
"Австрия",
"Россия",
"Канада",
"Южная Корея",
"Израиль",
"Швеция",
"Индия",
"Эквадор",
"Ирландия",
"Чили",
"Норвегия",
"Польша",
"Дания",
"Чехия",
"Япония",
"Румыния",
"Перу",
"Пакистан",
"Малайзия",
"Филиппины",
"Саудовская Аравия",
"Индонезия",
"Мексика",
"Люксембург",
"Сербия",
"Объединенные Арабские Эмираты",
"Австралия",
"Финляндия",
"Панама",
"Катар",
"Таиланд",
"Доминиканская Республика",
"Колумбия",
"Украина",
"Сингапур",
"Греция",
"Южная Африка",
"Беларусь",
"Аргентина",
"Алжир",
"Египет",
"Исландия",
"Хорватия",
"Молдова",
"Марокко",
"Новая Зеландия",
"Ирак",
"Эстония",
"Венгрия",
"Словения",
"Литва",
"Кувейт",
"Азербайджан",
"Армения",
"Бахрейн",
"Босния и Герцеговина",
"Казахстан",
"Камерун",
"Словакия",
"Алмазная принцесса (Diamond Princess)",
"Северная Македония",
"Тунис",
"Болгария",
"Узбекистан",
"Латвия",
"Ливан",
"Андорра",
"Кипр",
"Куба",
"Коста Рика",
"Афганистан",
"Оман",
"Уругвай",
"Берег Слоновой Кости",
"Буркина-Фасо",
"Бангладеш",
"Албания",
"Нигер",
"Гондурас",
"Тайвань*",
"Гана",
"Иордания",
"Мальта",
"Сан-Марино",
"Маврикий",
"Киргизия",
"Нигерия",
"Боливия",
"Западный берег и сектор Газа",
"Сенегал",
"Вьетнам",
"Черногория",
"Грузия",
"Конго (Киншаса)",
"Гвинея",
"Шри-Ланка",
"Кения",
"Косово",
"Венесуэла",
"Джибути",
"Бруней",
"Парагвай",
"Гватемала",
"Камбоджа",
"Сальвадор",
"Руанда",
"Тринидад и Тобаго",
"Мадагаскар",
"Мали",
"Монако",
"Лихтенштейн",
"Идти",
"Барбадос",
"Эфиопия",
"Ямайка",
"Конго (Браззавиль)",
"Уганда",
"Габон",
"Багамские о-ва",
"Замбия",
"Гайана",
"Либерия",
"Гвинея-Бисау",
"Бенин",
"Эритрея",
"Танзания",
"Гаити",
"Бирма",
"Ливия",
"Ангола",
"Антигуа и Барбуда",
"Мальдивы",
"Сирия",
"Экваториальная Гвинея",
"Мозамбик",
"Доминика",
"Фиджи",
"Лаос",
"Монголия",
"Намибия",
"Судан",
"Сент-Люсия",
"Ботсвана",
"Эсватини",
"Гренада",
"Сент-Винсент и Гренадины",
"Сомали",
"Чад",
"Сент-Китс и Невис",
"Сейшельские острова",
"Зимбабве",
"Белиз",
"Суринам",
"Малави",
"М.С. Зандам",
"Непал",
"Центрально-Африканская Республика",
"Папский престол",
"Сьерра-Леоне",
"Кабо Верде",
"Мавритания",
"Никарагуа",
"Бутан",
"Гамбия",
"Сан-Томе и Принсипи",
"Южный Судан",
"Западная Сахара",
"Бурунди",
"Папуа - Новая Гвинея",
"Восточный Тимор",
"Йемен"]