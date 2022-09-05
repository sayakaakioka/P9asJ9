import { Utils } from "../Utils";
import { P9ShapeFuncs } from "./P9ShapeFuncs";

export class P9EnvironmentFuncs extends P9ShapeFuncs {
  public settings: Function | undefined;

  private _currentFrameRate = 60;

  constructor(util: Utils, canvas: HTMLCanvasElement) {
    super(util, canvas);
    this.utils.p9FuncList = [
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
    ];

    this.registerImageFuncs();
    this.registerTypographyFuncs();
    this.registerOutputFuncs();
    this.registerShapeFuncs();
  }

  public registerEnviromnetFuncs(): void {}

  protected set currentFrameRate(n: number) {
    this._currentFrameRate = n;
  }

  protected get currentFrameRate(): number {
    return this._currentFrameRate;
  }

  public cursor(): void {
    this.utils.log("cursor() is not implemented yet.");
  }

  public delay(): void {
    this.utils.log("delay() is not implemented yet.");
  }

  public displayDensity(): void {
    this.utils.log("displayDensity() is not implemented yet.");
  }

  public frameRate(fps: number): void {
    this._currentFrameRate = fps;
  }

  public fullScreen(): void {
    this.utils.log("fullScreen() is not implemented yet.");
  }

  public noCursor(): void {
    this.utils.log("noCursor() is not implemented yet.");
  }

  public noSmooth(): void {
    this.utils.log("noSmooth() is not implemented yet.");
  }

  public pixelDensity(): void {
    this.utils.log("pixelDensity() is not implemented yet.");
  }

  public size(width: number, height: number, renderer?: any) {
    if (this.context === null) {
      this.utils.error("size(): context is null");
      return;
    }

    this.canvas.width = width;
    this.canvas.height = height;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    super.setBackground(super.initialBackground);
    this.context.lineWidth = super.currentLineWidth;
  }

  public smooth(): void {
    this.utils.log("smooth() is not implemented yet.");
  }
}
