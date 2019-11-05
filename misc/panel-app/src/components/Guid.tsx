class Guid {
  private _guid: number;

  constructor() {
    this._guid = 0;
  }

  get() {
    this._guid++;
    return `guid-${this._guid}-${Date.now()}`;
  }
}

export default (new Guid());
