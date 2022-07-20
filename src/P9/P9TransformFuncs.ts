import { P9 } from "../P9";
import { Utils } from "../Utils";

export class P9TransformFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "applyMatrix",
      "popMatrix",
      "printMatrix",
      "pushMatrix",
      "resetMatrix",
      "rotateX",
      "rotateY",
      "rotateZ",
      "rotate",
      "scale",
      "shearX",
      "shearY",
      "translate",
    ]);
  }

  public applyMatrix(): void {
    Utils.log("applyMatrix() is not implemented yet.", this._p);
  }

  public popMatrix(): void {
    Utils.log("popMatrix() is not implemented yet.", this._p);
  }

  public printMatrix(): void {
    Utils.log("printMatrix() is not implemented yet.", this._p);
  }

  public pushMatrix(): void {
    Utils.log("pushMatrix() is not implemented yet.", this._p);
  }

  public resetMatrix(): void {
    Utils.log("resetMatrix() is not implemented yet.", this._p);
  }

  public rotateX(): void {
    Utils.log("rotateX() is not implemented yet.", this._p);
  }

  public rotateY(): void {
    Utils.log("rotateY() is not implemented yet.", this._p);
  }

  public rotateZ(): void {
    Utils.log("rotateZ() is not implemented yet.", this._p);
  }

  public rotate(): void {
    Utils.log("rotate() is not implemented yet.", this._p);
  }

  public scale(): void {
    Utils.log("scale() is not implemented yet.", this._p);
  }

  public shearX(): void {
    Utils.log("shearX() is not implemented yet.", this._p);
  }

  public shearY(): void {
    Utils.log("shearY() is not implemented yet.", this._p);
  }

  public translate(): void {
    Utils.log("translate() is not implemented yet.", this._p);
  }

  public(): void {
    Utils.log("() is not implemented yet.", this._p);
  }
}
