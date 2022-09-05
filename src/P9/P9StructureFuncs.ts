import { Utils } from "../Utils";
import { P9EnvironmentFuncs } from "./P9EnvironmentFuncs";

export class P9StructureFuncs extends P9EnvironmentFuncs {
  public draw: Function | undefined;
  public setup: Function | undefined;
  public frameCount = 0;

  private _framesSinceLastFPS = 0;
  private _timeSinceLastFPS = 0;
  private _pmouseXLastFrame = 0;
  private _pmouseYLastFrame = 0;
  private _intervalID = 0;
  private _loopStarted = false;
  private _noLoopCalled = false;

  public pmouseX = 0;
  public pmouseY = 0;
  public mouseX = 0;
  public mouseY = 0;

  private _fRate = 60;

  constructor(
    util: Utils,
    canvas: HTMLCanvasElement,
    private readonly _window: Window
  ) {
    super(util, canvas);
    this.utils.p9FuncList = [
      "exit",
      "loop",
      "noLoop",
      "popStyle",
      "pop",
      "pushStyle",
      "push",
      "redraw",
      "setLocation",
      "setResizable",
      "setTitle",
      "thread",
    ];
    this.utils.p9ConstList = [
      "mouseX",
      "mouseY",
      "pmouseX",
      "pmouseY",
      "frameCount",
      "frameRate",
    ];
  }

  protected get noLoopCalled(): boolean {
    return this._noLoopCalled;
  }

  public exit(): void {
    this._window.clearInterval(this._intervalID);
    // detach libraries and clean up all event handling
  }

  public loop(): void {
    if (this._loopStarted) {
      return;
    }

    this._timeSinceLastFPS = Date.now();
    this._framesSinceLastFPS = 0;

    this._intervalID = this._window.setInterval(() => {
      try {
        if (this.redraw !== undefined) {
          this.redraw();
        }
      } catch (e) {
        this._window.clearInterval(this._intervalID);
        throw e;
      }
    }, 1000 / this.currentFrameRate);
    this._noLoopCalled = false;
    this._loopStarted = true;
  }

  public noLoop(): void {
    this._noLoopCalled = true;
    this._loopStarted = false;
    clearInterval(this._intervalID);
  }

  public popStyle(): void {
    this.utils.log("popStyle() is not implemented yet.");
  }

  public pop(): void {
    this.utils.log("pop() is not implemented yet.");
  }

  public pushStyle(): void {
    this.utils.log("pushStyle() is not implemented yet.");
  }

  public push(): void {
    this.utils.log("push() is not implemented yet.");
  }

  public redraw(): void {
    const sec = (Date.now() - this._timeSinceLastFPS) / 1000;
    this._framesSinceLastFPS++;
    const fps = this._framesSinceLastFPS / sec;

    // recalculate FPS every half second for better accuracy.
    if (sec > 0.5) {
      this._timeSinceLastFPS = Date.now();
      this._framesSinceLastFPS = 0;
      this._fRate = fps;
    }

    this.frameCount++;

    const pmouseXLastEvent = this.pmouseX;
    const pmouseYLastEvent = this.pmouseY;
    this.pmouseX = this._pmouseXLastFrame;
    this.pmouseY = this._pmouseYLastFrame;

    if (this.context === null) {
      this.utils.log("P9StructureFuncs: redraw(): Failed to get context.");
      return;
    }

    if (this.draw !== undefined) {
      this.draw();
    }

    this._pmouseXLastFrame = this.mouseX;
    this._pmouseYLastFrame = this.mouseY;
    this.pmouseX = pmouseXLastEvent;
    this.pmouseY = pmouseYLastEvent;
  }

  public setLocation(x: number, y: number): void {
    this.utils.log("surface.setLocation(x, y) is not implemented yet.");
  }

  public setResizable(resizable: boolean): void {
    this.utils.log("surface.setResizable() is not implemented yet.");
  }

  public setTitle(title: string): void {
    this.utils.log("surface.setTitle is not implemented yet.");
  }

  public thread(): void {
    this.utils.log("thread() is not implemented yet.");
  }
}
