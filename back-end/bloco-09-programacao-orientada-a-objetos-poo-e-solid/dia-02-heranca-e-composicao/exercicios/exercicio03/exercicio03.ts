interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(p: string): void {
    console.log(p);
  }
}

class ConsoleLogger2 implements Logger {
  log(p: string): void {
    console.log(`Logger2: ${p}`);
    
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(k: string, v: string):void {
    this.logger.log(`${k} and ${v}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const example1 = new ExampleDatabase(logger1);
const example2 = new ExampleDatabase(logger2);
const example3 = new ExampleDatabase();

example1.save(`Mickey`, `Mouse`);
example2.save(`Donald`, `Duck`);
example3.save(`Goofy`, `Goofy`);


// // Solução Trybe
// // Crie uma interface _Logger_.
// interface Logger {
//   // _Logger_ deve possuir um método `log`, que recebe um parâmetro do tipo _string_ e não retorna nada (_void_).
//   log(param: string): void;
// }

// // Crie uma classe _ConsoleLogger_ que implementa _Logger_.
// class ConsoleLogger implements Logger {
//   log(param: string): void {
//     // Você deve imaginar como o método `log` deve ser implementado, né? 😁.
//     console.log(param);
//   }
// }

// // Crie uma classe _ConsoleLogger2_ igual à classe anterior, apenas a título de exemplo.
// class ConsoleLogger2 implements Logger {
//   log(param: string): void {
//     // No `console.log` dentro do método `log`, diferencie o _ConsoleLogger2_ do _ConsoleLogger_.
//     console.log('Logger2: ' + param);
//   }
// }

// // Crie uma interface _Database_.
// interface Database {
//   // _Database_ deve possuir um atributo do tipo `Logger`.
//   logger: Logger;
//   // _Database_ deve possuir um método `save`, que recebe dois parâmetros, `key` e `value`, ambos _strings_, e não retorna nada (_void_).
//   save(key: string, value: string): void;
// }

// // Crie uma classe _ExampleDatabase_ que implementa _Database_.
// class ExampleDatabase implements Database {
//   // _ExampleDatabase_ deve receber o _Logger_ como parâmetro do construtor, e possuir como valor padrão um _ConsoleLogger_.
//   constructor(public logger: Logger = new ConsoleLogger()) { }

//   // Dentro do método `save`, chame a função `log` do _Logger_ passado para o database para fazer o log dos parâmetros passados para a `save`.
//   save(key: string, value: string): void {
//     this.logger.log(`Salvando o valor ${value} na chave ${key}`);
//   }
// }

// // Crie um objeto de cada um dos _Loggers_.
// const logger1 = new ConsoleLogger();
// const logger2 = new ConsoleLogger2();

// // Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
// const database1 = new ExampleDatabase(logger1);
// const database2 = new ExampleDatabase(logger2);
// const database3 = new ExampleDatabase();

// // Utilize todos eles para salvar um conteúdo fictício.
// database1.save('chave 1', 'valor 1');
// database2.save('chave 2', 'valor 2');
// database3.save('chave 3', 'valor 3');