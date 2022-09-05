import { Utils } from "../Utils";
import { P9ColorFuncs } from "./P9ColorFuncs";
import { P9ImageFuncs } from "./P9ImageFuncs";
import { P9OutputFuncs } from "./P9OutputFuncs";
import { P9TypographyFuncs } from "./P9TypographyFuncs";

export interface P9ShapeFuncs
  extends P9OutputFuncs,
    P9ImageFuncs,
    P9TypographyFuncs {}
export class P9ShapeFuncs extends P9ColorFuncs {
  public readonly CORNER = 1;
  public readonly CORNERS = 2;
  public readonly RADIUS = 3;
  public readonly PROJECT = "butt";
  public readonly ROUND = "round";
  public readonly SQUARE = "square";

  private _currentLineWidth = 4;
  private _currentLineCap: CanvasLineCap = this.ROUND;
  private _currentRectMode = this.CORNER;

  constructor(util: Utils, canvas: HTMLCanvasElement) {
    super(util, canvas);
  }

  public registerShapeFuncs(): void {
    this.utils.p9FuncList = [
      "createShape",
      "loadShape",
      "bezierDetail",
      "bezierPoint",
      "bezierTangent",
      "bezier",
      "curveDetail",
      "curvePoint",
      "curveTangent",
      "curveTightness",
      "cureve",
      "ellipseMode",
      "rectMode",
      "strokeCap",
      "strokeJoin",
      "strokeWeight",
      "beginContour",
      "beginShape",
      "bezierVertex",
      "curveVertex",
      "endContour",
      "endShape",
      "quadraticVertex",
      "vertex",
      "shapeMode",
      "shape",
      "arc",
      "circle",
      "ellipse",
      "line",
      "point",
      "quad",
      "rect",
      "square",
      "triangle",
      "box",
      "sphereDetail",
      "sphere",
    ];
    this.utils.p9ConstList = [
      "CORNER",
      "CORNERS",
      "RADIUS",
      "PROJECT",
      "ROUND",
      "SQUARE",
    ];

    this.registerColorFuncs();
    this.registerInputFuncs();
  }

  protected set currentLineWidth(w: number) {
    this._currentLineWidth = w;
  }

  protected set currentLineCap(str: CanvasLineCap) {
    this._currentLineCap = str;
  }

  public createShape(): void {
    this.utils.log("createShape() is not implemented yet.");
  }

  public loadShape(): void {
    this.utils.log("loadShape() is not implemented yet.");
  }

  public bezierDetail(): void {
    this.utils.log("bezierDetail() is not implemented yet.");
  }

  public bezierPoint(): void {
    this.utils.log("bezierPoint() is not implemented yet.");
  }

  public bezierTangent(): void {
    this.utils.log("bezierTangent() is not implemented yet.");
  }

  public bezier(): void {
    this.utils.log("bezier() is not implemented yet.");
  }

  public curveDetail(): void {
    this.utils.log("curveDetail() is not implemented yet.");
  }

  public curvePoint(): void {
    this.utils.log("curvePoint() is not implemented yet.");
  }

  public curveTangent(): void {
    this.utils.log("curveTangent() is not implemented yet.");
  }

  public curveTightness(): void {
    this.utils.log("curveTightness() is not implemented yet.");
  }

  public curve(): void {
    this.utils.log("curve() is not implemented yet.");
  }

  public ellipseMode(): void {
    this.utils.log("ellipseMode() is not implemented yet.");
  }

  public rectMode(x: number): void {
    this._currentRectMode = x;
  }

  public strokeCap(str: CanvasLineCap): void {
    this._currentLineCap = str;
  }

  public strokeJoin(): void {
    this.utils.log("strokeJoin() is not implemented yet.");
  }

  public strokeWeight(w: number): void {
    this._currentLineWidth = w;
  }

  public beginContour(): void {
    this.utils.log("beginContour() is not implemented yet.");
  }

  public beginShape(): void {
    this.utils.log("beginShape() is not implemented yet.");
  }

  public bezierVertex(): void {
    this.utils.log("bezierVertex() is not implemented yet.");
  }

  public curveVertex(): void {
    this.utils.log("curveVertex() is not implemented yet.");
  }

  public endContour(): void {
    this.utils.log("endCountour() is not implemented yet.");
  }

  public endShape(): void {
    this.utils.log("endShape() is not implemented yet.");
  }

  public quadraticVertex(): void {
    this.utils.log("quadraticVertex() is not implemented yet.");
  }

  public vertex(): void {
    this.utils.log("vertex() is not implemented yet.");
  }

  public shapeMode(): void {
    this.utils.log("shapeMode() is not implemented yet.");
  }

  public shape(): void {
    this.utils.log("shape() is not implemented yet.");
  }

  public arc(
    x: number,
    y: number,
    w: number,
    h: number,
    start: number,
    stop: number,
    mode?: any
  ): void {
    if (this.context === null) {
      this.utils.log("arc(): context is null");
      return;
    }

    if (this.doFill) {
      this.context.fillStyle = this.currentFillColor;

      this.context.beginPath();
      this.context.moveTo(x, y);
      this.context.ellipse(x, y, w / 2, h / 2, 0, start, stop);
      this.context.closePath();
      this.context.fill();
    }

    if (this.doStroke) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.lineWidth = this._currentLineWidth;
      this.context.lineCap = this._currentLineCap;
      this.context.beginPath();
      this.context.ellipse(x, y, w / 2, h / 2, 0, start, stop);
      this.context.stroke();
    }
  }

  public circle(x: number, y: number, e: number): void {
    if (this.context === null) {
      this.utils.log("circle(): context is null");
      return;
    }
    this.ellipse(x, y, e, e);
  }

  public ellipse(x: number, y: number, w: number, h: number): void {
    if (this.context === null) {
      this.utils.log("ellipse(): context is null");
      return;
    }

    this.context.beginPath();
    this.context.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
    this.context.closePath();

    if (this.doFill) {
      this.context.fillStyle = this.currentFillColor;
      this.context.fill();
    }

    if (this.doStroke) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.lineWidth = this._currentLineWidth;
      this.context.lineCap = this._currentLineCap;
      this.context.stroke();
    }
  }

  public line(
    a: number | string,
    b: number | string,
    c: number | string,
    d: number | string,
    e?: number | string,
    f?: number | string
  ): void {
    if (this.context === null) {
      this.utils.error("line(): context is null");
      return;
    }

    if (!this.doStroke) {
      return;
    }
    this.context.beginPath();
    this.context.strokeStyle = this.currentStrokeColor;
    this.context.lineWidth = this._currentLineWidth;
    this.context.lineCap = this._currentLineCap;
    this.context.moveTo(Number(a), Number(b));
    this.context.lineTo(Number(c), Number(d));
    this.context.closePath();
    this.context.stroke();
  }

  public point(x: number, y: number, z?: number): void {
    if (this.context === null) {
      this.utils.error("point(): context is null");
      return;
    }

    this.context.beginPath();
    this.context.arc(x, y, this._currentLineWidth / 2, 0, Math.PI * 2, true);
    const currentFillStyle = this.context.fillStyle;
    this.context.fillStyle = this.currentStrokeColor;
    this.context.fill();
    this.context.fillStyle = currentFillStyle;
  }

  public quad(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): void {
    if (this.context === null) {
      this.utils.error("quad(): context is null");
      return;
    }

    this.context.beginPath();
    this.context.moveTo(Number(x1), Number(y1));
    this.context.lineTo(Number(x2), Number(y2));
    this.context.lineTo(Number(x3), Number(y3));
    this.context.lineTo(Number(x4), Number(y4));
    this.context.lineTo(Number(x1), Number(y1));
    this.context.closePath();

    if (this.doFill) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.fillStyle = this.currentFillColor;
      this.context.fill();
    }

    if (this.doStroke) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.lineWidth = this._currentLineWidth;
      this.context.lineCap = this._currentLineCap;
      this.context.stroke();
    }
  }

  public rect(
    a: number,
    b: number,
    c: number,
    d: number,
    ar?: number,
    br?: number,
    cr?: number,
    dr?: number
  ): void {
    if (this.context === null) {
      this.utils.log("rect(): context is null");
      return;
    }

    let x, y, w, h;
    if (this._currentRectMode === this.CORNERS) {
      x = Math.min(a, c);
      y = Math.min(b, d);
      w = Math.abs(a - c);
      h = Math.abs(b - d);
    } else if (this._currentRectMode === this.CENTER) {
      x = a - c / 2;
      y = b - d / 2;
      w = c;
      h = d;
    } else if (this._currentRectMode === this.RADIUS) {
      x = a - c;
      y = b - d;
      w = 2 * c;
      h = 2 * d;
    } else {
      // rectMode is CORNER, which is default
      x = a;
      y = b;
      w = c;
      h = d;
    }

    if (this.doFill) {
      this.context.fillStyle = this.currentFillColor;
      this.context.fillRect(x, y, w, h);
    }

    if (this.doStroke) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.lineWidth = this._currentLineWidth;
      this.context.lineCap = this._currentLineCap;
      this.context.strokeRect(x, y, w, h);
    }
  }

  public square(x: number, y: number, l: number): void {
    this.rect(x, y, l, l);
  }

  public triangle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): void {
    if (this.context === null) {
      this.utils.error("triangle(): context is null");
      return;
    }

    this.context.beginPath();
    this.context.moveTo(Number(x1), Number(y1));
    this.context.lineTo(Number(x2), Number(y2));
    this.context.lineTo(Number(x3), Number(y3));
    this.context.lineTo(Number(x1), Number(y1));
    this.context.closePath();

    if (this.doFill) {
      this.context.fillStyle = this.currentFillColor;
      this.context.fill();
    }

    if (this.doStroke) {
      this.context.strokeStyle = this.currentStrokeColor;
      this.context.lineWidth = this._currentLineWidth;
      this.context.lineCap = this._currentLineCap;
      this.context.stroke();
    }
  }

  public box(): void {
    this.utils.log("box() is not implemented yet.");
  }

  public sphereDetail(): void {
    this.utils.log("sphereDetail() is not implemented yet.");
  }

  public sphere(): void {
    this.utils.log("sphere() is not implemented yet.");
  }
}
