import { Utils } from "../Utils";

export class P9RenderingFuncs {
  public utils: Utils;

  constructor(u: Utils) {
    this.utils = u;
  }

  registerRenderingFuncs(): void {
    this.utils.p9FuncList = [
      "blendMode",
      "clip",
      "createGraphics",
      "hint",
      "noClip",
      "loadShader",
      "resetShader",
      "shader",
    ];
  }

  public blendMode(): void {
    this.utils.log("blendMode() is not implemented yet.");
  }

  public clip(): void {
    this.utils.log("clip() is not implemented yet.");
  }

  public createGraphics(): void {
    this.utils.log("createGraphics() is not implemented yet.");
  }

  public hint(): void {
    this.utils.log("hint() is not implemented yet.");
  }

  public noClip(): void {
    this.utils.log("noClip() is not implemented yet.");
  }

  public loadShader(): void {
    this.utils.log("loadShader() is not implemented yet.");
  }

  public resetShader(): void {
    this.utils.log("resetShader() is not implemented yet.");
  }

  public shader(): void {
    this.utils.log("shader() is not implemented yet.");
  }
}
