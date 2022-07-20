import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9ImageFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "createImage",
      "imageMode",
      "image",
      "loadImage",
      "noTint",
      "requestImage",
      "tint",
      "textureMode",
      "textureWrap",
      "texture",
      "blend",
      "copy",
      "filter",
      "loadPixels",
      "mask",
      "set",
      "updatePixels",
      "get",
    ]);
  }

  public createImage(): void {
    Utils.log("createImage() is not implemented yet.", this._p);
  }

  public imageMode(): void {
    Utils.log("imageMode() is not implemented yet.", this._p);
  }

  public image(): void {
    Utils.log("image() is not implemented yet.", this._p);
  }

  public loadImage(): void {
    Utils.log("loadImage() is not implemented yet.", this._p);
  }

  public noTint(): void {
    Utils.log("noTint() is not implemented yet.", this._p);
  }

  public requestImage(): void {
    Utils.log("requestImage() is not implemented yet.", this._p);
  }

  public tint(): void {
    Utils.log("tint() is not implemented yet.", this._p);
  }

  public textureMode(): void {
    Utils.log("textureMode() is not implemented yet.", this._p);
  }

  public textureWrap(): void {
    Utils.log("textureWrap() is not implemented yet.", this._p);
  }

  public texture(): void {
    Utils.log("texture() is not implemented yet.", this._p);
  }

  public blend(): void {
    Utils.log("blend() is not implemented yet.", this._p);
  }

  public copy(): void {
    Utils.log("copy() is not implemented yet.", this._p);
  }

  public filter(): void {
    Utils.log("filter() is not implemented yet.", this._p);
  }

  public loadPixels(): void {
    Utils.log("loadPixels() is not implemented yet.", this._p);
  }

  public mask(): void {
    Utils.log("mask() is not implemented yet.", this._p);
  }

  public set(): void {
    Utils.log("set() is not implemented yet.", this._p);
  }

  public updatePixels(): void {
    Utils.log("updatePixels() is not implemented yet.", this._p);
  }

  public get(
    ...args:
      | []
      | [x: number, y: number]
      | [x: number, y: number, w: number, h: number]
  ): number {
    if (args.length === 2) {
      const [x, y] = args;
      if (this._p.context !== null) {
        const d = this._p.context.getImageData(x, y, 1, 1);
        return this._p.color(d.data[0], d.data[1], d.data[2]);
      }
    }
    return 0;
  }
}
