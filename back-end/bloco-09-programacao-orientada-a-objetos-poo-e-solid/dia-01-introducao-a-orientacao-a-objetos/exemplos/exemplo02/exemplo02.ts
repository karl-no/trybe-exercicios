class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(
      `TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \n\
available connections: ${this._connections}`,
    );
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi']);
tv1.turnOn();
tv1.connectedTo = 'Wi-Fi';
console.log('Connected to: ', tv1.connectedTo);



// const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
// tv1.turnOn();

// MINHA SOLUÇÃO

// class Tv {
//   private _brand: string;
//   private _size: number;
//   private _resolution: number;
//   private _connections: string;
//   private _connectedTo?: string;

//   constructor(b: string, s: number, r: number, c: string, cTo: string) {
//     console.log(`Creating a ${b} TV`);
//     this._brand = b;
//     this._size = s;
//     this._resolution = r;
//     this._connections = c;
//     this._connectedTo = cTo;
//   }

//   turnOn() {
//     console.log(this._brand, this._size, this._resolution, this._connections, this._connectedTo);
//   }

//   get connectedTo(): string | undefined {
//     return this._connectedTo;
//   }

//   set connectedTo(newValue: string | undefined) {
//     if (!newValue || this._connections.includes(newValue)) {
//       this._connectedTo = newValue;
//       console.log(this._connectedTo);
      
//     } else {
//       console.log(`Sorry, connection unavailable!`);
      
//     }
//   }
// }

// const tv1 = new Tv('LG', 36, 2110, 'HMDI', 'PS5');
// tv1.turnOn();
// tv1.connectedTo = 'Wi-Fi';
// console.log(`Connected to: `, tv1.connectedTo);



// Resolução TRYBE

// class Tv {
//   brand: string;
//   size: number;
//   resolution: string;
//   connections: string[];
//   connectedTo?: string;

//   constructor(
//     brand: string, 
//     size: number, 
//     resolution: string, 
//     connections: string[],
//   ) {
//     this.brand = brand;
//     this.size = size;
//     this.resolution = resolution;
//     this.connections = connections;
//   }
// }

/* turnOn():void {
  console.log(
    `TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
available connections: ${this.connections}`,
  );
}
} */