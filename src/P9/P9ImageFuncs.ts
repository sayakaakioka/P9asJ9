import { Utils } from "../Utils";
import { P9ColorFuncs } from "./P9ColorFuncs";

export class P9ImageFuncs extends P9ColorFuncs {
  constructor(u: Utils, canvas: HTMLCanvasElement) {
    super(u, canvas);
  }

  public registerImageFuncs(): void {
    this.utils.p9FuncList = [
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
    ];
  }

  public createImage(): void {
    this.utils.log("createImage() is not implemented yet.");
  }

  public imageMode(): void {
    this.utils.log("imageMode() is not implemented yet.");
  }

  public image(): void {
    this.utils.log("image() is not implemented yet.");
  }

  public loadImage(): void {
    this.utils.log("loadImage() is not implemented yet.");
  }

  public noTint(): void {
    this.utils.log("noTint() is not implemented yet.");
  }

  public requestImage(): void {
    this.utils.log("requestImage() is not implemented yet.");
  }

  public tint(): void {
    this.utils.log("tint() is not implemented yet.");
  }

  public textureMode(): void {
    this.utils.log("textureMode() is not implemented yet.");
  }

  public textureWrap(): void {
    this.utils.log("textureWrap() is not implemented yet.");
  }

  public texture(): void {
    this.utils.log("texture() is not implemented yet.");
  }

  public blend(): void {
    this.utils.log("blend() is not implemented yet.");
  }

  public copy(): void {
    this.utils.log("copy() is not implemented yet.");
  }

  public filter(): void {
    this.utils.log("filter() is not implemented yet.");
  }

  public loadPixels(): void {
    this.utils.log("loadPixels() is not implemented yet.");
  }

  public mask(): void {
    this.utils.log("mask() is not implemented yet.");
  }

  public set(): void {
    this.utils.log("set() is not implemented yet.");
  }

  public updatePixels(): void {
    this.utils.log("updatePixels() is not implemented yet.");
  }

  public get(
    ...args:
      | []
      | [x: number, y: number]
      | [x: number, y: number, w: number, h: number]
  ): number {
    if (args.length === 2) {
      const [x, y] = args;
      if (this.context !== null) {
        const d = this.context.getImageData(x, y, 1, 1);
        return this.color(d.data[0], d.data[1], d.data[2]);
      }
    }
    return 0;
  }
}
