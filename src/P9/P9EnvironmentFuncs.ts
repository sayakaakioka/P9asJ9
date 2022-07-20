import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9EnvironmentFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "cursor",
      "delay",
      "displayDensity",
      "frameRate",
      "fullScreen",
      "noCursor",
      "noSmooth",
      "pixelDensity",
      "size",
      "smooth",
    ]);
  }

  public cursor(): void {
    Utils.log("cursor() is not implemented yet.", this._p);
  }

  public delay(): void {
    Utils.log("delay() is not implemented yet.", this._p);
  }

  public displayDensity(): void {
    Utils.log("displayDensity() is not implemented yet.", this._p);
  }

  public frameRate(fps: number): void {
    this._p.currentFrameRate = fps;
  }

  public fullScreen(): void {
    Utils.log("fullScreen() is not implemented yet.", this._p);
  }

  public noCursor(): void {
    Utils.log("noCursor() is not implemented yet.", this._p);
  }

  public noSmooth(): void {
    Utils.log("noSmooth() is not implemented yet.", this._p);
  }

  public pixelDensity(): void {
    Utils.log("pixelDensity() is not implemented yet.", this._p);
  }

  public size(width: number, height: number, renderer?: any) {
    if (this._p.context === null) {
      Utils.error("size(): context is null", this._p);
      return;
    }

    this._p.canvas.width = width;
    this._p.canvas.height = height;
    this._p.width = this._p.canvas.width;
    this._p.height = this._p.canvas.height;
    this._p.setBackground("rgb(220, 220, 220)");
    this._p.context.lineWidth = this._p.currentLineWidth;
  }

  public smooth(): void {
    Utils.log("smooth() is not implemented yet.", this._p);
  }
}
