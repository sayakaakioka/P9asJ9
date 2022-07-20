import { P9 } from "../P9";
import { Utils } from "../Utils";

export class P9RenderingFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "blendMode",
      "clip",
      "createGraphics",
      "hint",
      "noClip",
      "loadShader",
      "resetShader",
      "shader",
    ]);
  }

  public blendMode(): void {
    Utils.log("blendMode() is not implemented yet.", this._p);
  }

  public clip(): void {
    Utils.log("clip() is not implemented yet.", this._p);
  }

  public createGraphics(): void {
    Utils.log("createGraphics() is not implemented yet.", this._p);
  }

  public hint(): void {
    Utils.log("hint() is not implemented yet.", this._p);
  }

  public noClip(): void {
    Utils.log("noClip() is not implemented yet.", this._p);
  }

  public loadShader(): void {
    Utils.log("loadShader() is not implemented yet.", this._p);
  }

  public resetShader(): void {
    Utils.log("resetShader() is not implemented yet.", this._p);
  }

  public shader(): void {
    Utils.log("shader() is not implemented yet.", this._p);
  }
}
