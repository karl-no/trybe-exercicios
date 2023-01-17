// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void;
// }

// class MeleeCharacter extends Character {
//   talk(): void {
//     console.log(`Anda, boneco!!!`);
//   }

//   specialMove(): void {
//       console.log(`AFLECK FLECK FUGEM! Aqui é na apelação!`);
//   }
// }

// class LongRangeCharacter extends Character {
//   talk(): void {
//     console.log(`Anda, boneco. Ligeiro!!!`);
//   }

//   specialMove(): void {
//       console.log(`HADOUKEN! Aqui é na magia!`);
//   }
// }

// const dhalsim = new MeleeCharacter();
// const ryo = new LongRangeCharacter();
// dhalsim.talk();
// dhalsim.specialMove();
// ryo.talk();
// ryo.specialMove();

// Solução TRYBE
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(this._specialMoveName);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I can attack from a long range. `);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this._specialMoveName);
  }
}

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);