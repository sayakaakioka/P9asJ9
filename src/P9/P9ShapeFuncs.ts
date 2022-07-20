import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9ShapeFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
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
    ]);
  }

  public createShape(): void {
    Utils.log("createShape() is not implemented yet.", this._p);
  }

  public loadShape(): void {
    Utils.log("loadShape() is not implemented yet.", this._p);
  }

  public bezierDetail(): void {
    Utils.log("bezierDetail() is not implemented yet.", this._p);
  }

  public bezierPoint(): void {
    Utils.log("bezierPoint() is not implemented yet.", this._p);
  }

  public bezierTangent(): void {
    Utils.log("bezierTangent() is not implemented yet.", this._p);
  }

  public bezier(): void {
    Utils.log("bezier() is not implemented yet.", this._p);
  }

  public curveDetail(): void {
    Utils.log("curveDetail() is not implemented yet.", this._p);
  }

  public curvePoint(): void {
    Utils.log("curvePoint() is not implemented yet.", this._p);
  }

  public curveTangent(): void {
    Utils.log("curveTangent() is not implemented yet.", this._p);
  }

  public curveTightness(): void {
    Utils.log("curveTightness() is not implemented yet.", this._p);
  }

  public curve(): void {
    Utils.log("curve() is not implemented yet.", this._p);
  }

  public ellipseMode(): void {
    Utils.log("ellipseMode() is not implemented yet.", this._p);
  }

  public rectMode(): void {
    Utils.log("rectMode() is not implemented yet.", this._p);
  }

  public strokeCap(): void {
    Utils.log("strokeCap() is not implemented yet.", this._p);
  }

  public strokeJoin(): void {
    Utils.log("strokeJoin() is not implemented yet.", this._p);
  }

  public strokeWeight(w: number): void {
    this._p.currentLineWidth = w;
  }

  public beginContour(): void {
    Utils.log("beginContour() is not implemented yet.", this._p);
  }

  public beginShape(): void {
    Utils.log("beginShape() is not implemented yet.", this._p);
  }

  public bezierVertex(): void {
    Utils.log("bezierVertex() is not implemented yet.", this._p);
  }

  public curveVertex(): void {
    Utils.log("curveVertex() is not implemented yet.", this._p);
  }

  public endContour(): void {
    Utils.log("endCountour() is not implemented yet.", this._p);
  }

  public endShape(): void {
    Utils.log("endShape() is not implemented yet.", this._p);
  }

  public quadraticVertex(): void {
    Utils.log("quadraticVertex() is not implemented yet.", this._p);
  }

  public vertex(): void {
    Utils.log("vertex() is not implemented yet.", this._p);
  }

  public shapeMode(): void {
    Utils.log("shapeMode() is not implemented yet.", this._p);
  }

  public shape(): void {
    Utils.log("shape() is not implemented yet.", this._p);
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
    if (this._p.context === null) {
      Utils.log("arc(): context is null", this._p);
      return;
    }

    if (this._p.doFill) {
      this._p.context.fillStyle = this._p.currentFillColor;

      this._p.context.beginPath();
      this._p.context.moveTo(x, y);
      this._p.context.ellipse(x, y, w / 2, h / 2, 0, start, stop);
      this._p.context.closePath();
      this._p.context.fill();
    }

    if (this._p.doStroke) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.lineWidth = this._p.currentLineWidth;
      this._p.context.beginPath();
      this._p.context.ellipse(x, y, w / 2, h / 2, 0, start, stop);
      this._p.context.stroke();
    }
  }

  public circle(x: number, y: number, e: number): void {
    if (this._p.context === null) {
      Utils.log("circle(): context is null", this._p);
      return;
    }
    this.ellipse(x, y, e, e);
  }

  public ellipse(x: number, y: number, w: number, h: number): void {
    if (this._p.context === null) {
      Utils.log("ellipse(): context is null", this._p);
      return;
    }

    this._p.context.beginPath();
    this._p.context.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
    this._p.context.closePath();

    if (this._p.doFill) {
      this._p.context.fillStyle = this._p.currentFillColor;
      this._p.context.fill();
    }

    if (this._p.doStroke) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.lineWidth = this._p.currentLineWidth;
      this._p.context.stroke();
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
    if (this._p.context === null) {
      Utils.error("line(): context is null", this._p);
      return;
    }

    if (!this._p.doStroke) {
      return;
    }

    this._p.context.beginPath();
    this._p.context.strokeStyle = this._p.currentStrokeColor;
    this._p.context.lineWidth = this._p.currentLineWidth;
    this._p.context.lineCap = "round";
    this._p.context.moveTo(Number(a), Number(b));
    this._p.context.lineTo(Number(c), Number(d));
    this._p.context.closePath();
    this._p.context.stroke();
  }

  public point(x: number, y: number, z?: number): void {
    this.circle(x, y, 0.5);
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
    if (this._p.context === null) {
      Utils.error("quad(): context is null", this._p);
      return;
    }

    this._p.context.beginPath();
    this._p.context.moveTo(Number(x1), Number(y1));
    this._p.context.lineTo(Number(x2), Number(y2));
    this._p.context.lineTo(Number(x3), Number(y3));
    this._p.context.lineTo(Number(x4), Number(y4));
    this._p.context.lineTo(Number(x1), Number(y1));
    this._p.context.closePath();

    if (this._p.doFill) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.fillStyle = this._p.currentFillColor;
      this._p.context.fill();
    }

    if (this._p.doStroke) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.lineWidth = this._p.currentLineWidth;
      this._p.context.stroke();
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
    if (this._p.context === null) {
      Utils.log("rect(): context is null", this._p);
      return;
    }

    if (this._p.doFill) {
      this._p.context.fillStyle = this._p.currentFillColor;
      this._p.context.fillRect(a, b, c, d);
    }

    if (this._p.doStroke) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.lineWidth = this._p.currentLineWidth;
      this._p.context.strokeRect(a, b, c, d);
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
    if (this._p.context === null) {
      Utils.error("triangle(): context is null", this._p);
      return;
    }

    this._p.context.beginPath();
    this._p.context.moveTo(Number(x1), Number(y1));
    this._p.context.lineTo(Number(x2), Number(y2));
    this._p.context.lineTo(Number(x3), Number(y3));
    this._p.context.lineTo(Number(x1), Number(y1));
    this._p.context.closePath();

    if (this._p.doFill) {
      this._p.context.fillStyle = this._p.currentFillColor;
      this._p.context.fill();
    }

    if (this._p.doStroke) {
      this._p.context.strokeStyle = this._p.currentStrokeColor;
      this._p.context.lineWidth = this._p.currentLineWidth;
      this._p.context.stroke();
    }
  }

  public box(): void {
    Utils.log("box() is not implemented yet.", this._p);
  }

  public sphereDetail(): void {
    Utils.log("sphereDetail() is not implemented yet.", this._p);
  }

  public sphere(): void {
    Utils.log("sphere() is not implemented yet.", this._p);
  }
}
