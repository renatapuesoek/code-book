// apply, bind, call

const john = {
  name: "John",
  age: 26,
  profession: "barber",
  greeting(style, day) {
    if (style === "formal") {
      console.log(`Welcome, good ${day} I am ${this.name}.`);
    } else if (style === "informal") {
      console.log(`Hi, good ${day}!`);
    }
  },
};

john.greeting("formal", "morning");
john.greeting("informal", "night");

const susy = {
  name: "Susy",
  age: 27,
  profession: "hairdresser",
};

// call -> metódus kölcsönzés
john.greeting.call(susy, "informal", "morning");

// apply -> az első paraméteren kívül minden más paramétert tömbként vár
john.greeting.apply(susy, ["informal", "afternoon"]);

// bind -> nem hívja meg azonnal a metódust, létrehozza egy másolatát, el tudjuk tárolni egy változóban
const johnInformal = john.greeting.bind(john, "informal");
johnInformal("morning");

const susyFormal = john.greeting.bind(susy, "formal");
const susyFormalMorning = john.greeting.bind(susy, "formal", "morning");

susyFormal("night");
susyFormalMorning();
