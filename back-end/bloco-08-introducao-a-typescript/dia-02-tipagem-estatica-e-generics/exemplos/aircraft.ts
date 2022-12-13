interface Aircraft {
  model: string;
  brand: string;
  wings: number;
  engines: number;
  isManned: boolean;
  turnOn: () => void;
  turnOf: () => void;
  speedUp: () => void;
  speedDown: () => void;
}