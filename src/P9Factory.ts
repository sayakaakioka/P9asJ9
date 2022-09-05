import { Utils } from "./Utils";
import { P9 } from "./P9";
import { P9DataFuncs } from "./P9/P9DataFuncs";
import { P9MathFuncs } from "./P9/P9MathFuncs";
import { P9TransformFuncs } from "./P9/P9TransformFuncs";
import { P9RenderingFuncs } from "./P9/P9RenderingFuncs";
import { P9LightsCameraFuncs } from "./P9/P9LightsCameraFuncs";
import { P9ColorFuncs } from "./P9/P9ColorFuncs";
import { P9InputFuncs } from "./P9/P9InputFuncs";
import { P9ImageFuncs } from "./P9/P9ImageFuncs";
import { P9OutputFuncs } from "./P9/P9OutputFuncs";
import { P9ShapeFuncs } from "./P9/P9ShapeFuncs";
import { P9TypographyFuncs } from "./P9/P9TypographyFuncs";

export class P9Factory {
  private _instanceList = new Array<P9>();

  constructor(private readonly _window: Window) {
    this.applyMixins(P9MathFuncs, [
      P9DataFuncs,
      P9TransformFuncs,
      P9RenderingFuncs,
      P9LightsCameraFuncs,
    ]);
    this.applyMixins(P9ColorFuncs, [P9InputFuncs]);
    this.applyMixins(P9ShapeFuncs, [
      P9OutputFuncs,
      P9TypographyFuncs,
      P9ImageFuncs,
    ]);
  }

  public p9Producer(e: HTMLScriptElement, id: string): void {
    this._instanceList.push(new P9(new Utils(id), e, this._window));
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

  private applyMixins(derivedCtor: any, constructors: Array<any>): void {
    constructors.forEach((baseCtor) => {
      Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
        Object.defineProperty(
          derivedCtor.prototype,
          name,
          Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
            Object.create(null)
        );
      });
    });
  }
}
