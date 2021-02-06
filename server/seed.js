const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Level = require("./models/level");
const Tag = require("./models/tag");
const Place = require("./models/place");
const Game = require("./models/game");
const User = require("./models/user");

const titles = ["Начинающие игроки", "Опытные игроки"];
const tags = [
  "Классика",
  "Подходит для детей",
  "Карточная",
  "ККИ",
  "Словесная",
  "На целый день",
  "Ролевая",
  "На скорость",
  "Детективная",
  "Мафия",
];
const tagDescr = [
  "Старые-добрые шашки, шахматы, нарды и иже с ними",
  "Семейные и детские настольные игры",
  "Uno, Свинтус, Манчкин и.т.д",
  "Коллекционные карточные игры типа Magic the gathering",
  "Игры на загадывание и объяснение слов: Alias, Codenames и.т.д",
  "Продолжительность партии от 2 часов и выше",
  "Live action role-playing game, LARP) — разновидность ролевой игры, в которой участники отыгрывают свою роль и вместе с другими игроками создают какую-то воображаемую ситуацию",
  "Доббль, Медвед и.т.д",
  "Кооперативные или индивидуальные игры в детективном жанре",
  "Город засыпает...",
];
const place = {
  name: "Антикафе 'Зеленая дверь'",
};

const games = [
  {
    title: "Взрывные котята",
    rules: "https://www.mosigra.ru/Face/Show/vzryvnye_kotyata/",
    min_players: 2,
    coordinates: [55.684758, 37.738521],
    max_players: 5,
    min_playtime: 15,
    min_age: 10,
    description:
      "Взрывные котята» — это карточная игра, дико популярная на «Кикстартере». Она там собрала почти девять миллионов долларов — для настольных игр это рекорд. Все в неё просто влюбились. Кому-то эта игра напоминает «Уно», кому-то русскую рулетку. Вы тянете карты из колоды, в которой среди прочих карт замешаны взрывные котята — они сразу выкидывают вас из игры. Все остальные карты помогают избежать встречи с опасными котятами и подставить под удар друзей. Вам нужно остаться в игре последним выжившим",
    img:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOrpsATVPW8EyBCMVwIHuHeEAHfKswO97KUJrb67_XOeABO9HIZxE&usqp=CAc", //4658x3434
    thumbnail:
      "https://sun9-71.userapi.com/c850720/v850720894/10d47c/NU0_158reys.jpg", // 200x200
  },
  {
    title: "Уно",
    rules: "https://tashkent.mosigra.ru/Face/Show/uno/",
    min_players: 2,
    max_players: 10,
    coordinates: [55.736173, 37.611518],
    min_playtime: 25,
    min_age: 7,
    description:
      "У вас есть колода карт, из которой раздаётся по 7 каждому из игроков. Затем на стол кладётся ещё одна карта, с которой и начинается игра. Задача — сбросить все свои карты. В свой ход вы имеете право выкладывать на стол карту, которая по значению (картинке) или цвету совпадает с верхней на игровом столе (как в «американском дураке» или «101»). Есть и специальные карты, которые создают различные эффекты. Когда у вас на руке остаётся только одна карта, нужно обязательно крикнуть «Уно» — если же это крикнут ваши соперники, то вы будете вынуждены взять ещё карт.",
    img:
      "https://cavevo.ru/upload/iblock/8cb/8cbafc0ab3eb3ceac82062ed51134c32.jpg",
    thumbnail:
      "https://w7.pngwing.com/pngs/306/920/png-transparent-uno-cards-uno-one-card-phase-10-playing-card-card-game-card-game-miscellaneous-game-emblem-thumbnail.png",
  },
];

const user = {
    name: "Anna",
    email: "123@gmail.com",
    password: '123',
  };


async function seed() {
  titles.forEach(async (title) => await Level.create({title}));

  tags.forEach(async (title, i) => {
   await Tag.create({title, description: tagDescr[i]})
  })

  await Place.create(place);

  games.forEach(async (game) => {
   const currGame = await Game.create(game);
   currGame.tags = [await findTag("Карточная"), await findTag("Подходит для детей")];
   await currGame.save()
  })

  const myUser = await User.create(user);
  myUser.fav_games = [await findGames("Взрывные котята"), await findGames("Уно")];
  await myUser.save();

  console.log("ready");
  mongoose.disconnect()
}

async function findTag(title) {
  const item = await Tag.findOne({ title});
  return item._id;
}

async function findGames(title) {
  const current = await Game.findOne({title});
  return current._id;
}

seed();
