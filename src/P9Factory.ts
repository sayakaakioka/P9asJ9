import { P9 } from "./P9";

export class P9Factory {
  private _instanceList = new Array<P9>();

  constructor(private readonly _window: Window) {}

  public p9Producer(e: HTMLScriptElement, id: string): void {
    this._instanceList.push(new P9(e, id, this._window));
  }

  get length(): number {
    return this._instanceList.length;
  }

  public toString(): string {
    return `${this.constructor.name}: ${this._instanceList.toString()}`;
  }

  get instances(): P9[] {
    return this._instanceList;
  }
}
