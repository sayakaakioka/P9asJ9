import { Utils } from "../Utils";

export class P9TransformFuncs {
  public utils: Utils;

  constructor(u: Utils) {
    this.utils = u;
  }

  public registerTransformFuncs(): void {
    this.utils.p9FuncList = [
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
    ];
  }

  public applyMatrix(): void {
    this.utils.log("applyMatrix() is not implemented yet.");
  }

  public popMatrix(): void {
    this.utils.log("popMatrix() is not implemented yet.");
  }

  public printMatrix(): void {
    this.utils.log("printMatrix() is not implemented yet.");
  }

  public pushMatrix(): void {
    this.utils.log("pushMatrix() is not implemented yet.");
  }

  public resetMatrix(): void {
    this.utils.log("resetMatrix() is not implemented yet.");
  }

  public rotateX(): void {
    this.utils.log("rotateX() is not implemented yet.");
  }

  public rotateY(): void {
    this.utils.log("rotateY() is not implemented yet.");
  }

  public rotateZ(): void {
    this.utils.log("rotateZ() is not implemented yet.");
  }

  public rotate(): void {
    this.utils.log("rotate() is not implemented yet.");
  }

  public scale(): void {
    this.utils.log("scale() is not implemented yet.");
  }

  public shearX(): void {
    this.utils.log("shearX() is not implemented yet.");
  }

  public shearY(): void {
    this.utils.log("shearY() is not implemented yet.");
  }

  public translate(): void {
    this.utils.log("translate() is not implemented yet.");
  }
}
