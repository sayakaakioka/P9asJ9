import { P9 } from "../P9";
import { Utils } from "../Utils";

export class P9StructureFuncs {
  private _framesSinceLastFPS = 0;
  private _timeSinceLastFPS = 0;
  private _pmouseXLastFrame = 0;
  private _pmouseYLastFrame = 0;

  constructor(private readonly _p: P9, private readonly _window: Window) {
    _p.addP9Funcs([
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
    ]);
  }

  public exit(): void {
    this._window.clearInterval(this._p.intervalID);
    // detach libraries and clean up all event handling
  }

  public loop(): void {
    if (this._p.loopStarted) {
      return;
    }

    this._timeSinceLastFPS = Date.now();
    this._framesSinceLastFPS = 0;

    this._p.intervalID = this._window.setInterval(() => {
      try {
        if (this._p.redraw !== undefined) {
          this._p.redraw();
        }
      } catch (e) {
        this._window.clearInterval(this._p.intervalID);
        throw e;
      }
    }, 1000 / this._p.currentFrameRate);
    this._p.noLoopCalled = false;
    this._p.loopStarted = true;
  }

  public noLoop(): void {
    this._p.noLoopCalled = true;
    this._p.loopStarted = false;
    clearInterval(this._p.intervalID);
  }

  public popStyle(): void {
    Utils.log("popStyle() is not implemented yet.", this._p);
  }

  public pop(): void {
    Utils.log("pop() is not implemented yet.", this._p);
  }

  public pushStyle(): void {
    Utils.log("pushStyle() is not implemented yet.", this._p);
  }

  public push(): void {
    Utils.log("push() is not implemented yet.", this._p);
  }

  public redraw(): void {
    const sec = (Date.now() - this._timeSinceLastFPS) / 1000;
    this._framesSinceLastFPS++;
    const fps = this._framesSinceLastFPS / sec;

    // recalculate FPS every half second for better accuracy.
    if (sec > 0.5) {
      this._timeSinceLastFPS = Date.now();
      this._framesSinceLastFPS = 0;
      this._p.fRate = fps;
    }

    this._p.frameCount++;

    const pmouseXLastEvent = this._p.pmouseX;
    const pmouseYLastEvent = this._p.pmouseY;
    this._p.pmouseX = this._pmouseXLastFrame;
    this._p.pmouseY = this._pmouseYLastFrame;

    if (this._p.context === null) {
      Utils.log("P9: redraw(): Failed to get context.", this._p);
      return;
    }

    if (this._p.draw !== undefined) {
      this._p.draw();
    }

    this._pmouseXLastFrame = this._p.mouseX;
    this._pmouseYLastFrame = this._p.mouseY;
    this._p.pmouseX = pmouseXLastEvent;
    this._p.pmouseY = pmouseYLastEvent;
  }

  public setLocation(x: number, y: number): void {
    Utils.log("surface.setLocation(x, y) is not implemented yet.", this._p);
  }

  public setResizable(resizable: boolean): void {
    Utils.log("surface.setResizable() is not implemented yet.", this._p);
  }

  public setTitle(title: string): void {
    Utils.log("surface.setTitle is not implemented yet.", this._p);
  }

  public thread(): void {
    Utils.log("thread() is not implemented yet.", this._p);
  }
}
