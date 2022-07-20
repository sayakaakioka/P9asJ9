import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9InputFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "mouseClicked",
      "mouseDragged",
      "mouseMoved",
      "mousePressed",
      "mouseReleased",
      "mouseWheel",
      "keyPressed",
      "keyReleased",
      "keyTyped",
      "createInput",
      "createReader",
      "launch",
      "loadBytes",
      "loadJSONArray",
      "loadJSONObject",
      "loadStrings",
      "loadTable",
      "loadXML",
      "parseJSONArray",
      "parseJSONObject",
      "parseXML",
      "selectFolder",
      "selectInput",
      "day",
      "hour",
      "millis",
      "minute",
      "month",
      "second",
      "year",
    ]);
  }

  public createInput(): void {
    Utils.log("createInput() is not implemented yet.", this._p);
  }

  public createReader(): void {
    Utils.log("createReader() is not implemented yet.", this._p);
  }

  public launch(): void {
    Utils.log("launch() is not implemented yet.", this._p);
  }

  public loadBytes(): void {
    Utils.log("loadBytes() is not implemented yet.", this._p);
  }

  public loadJSONArray(): void {
    Utils.log("loadJSONArray() is not implemented yet.", this._p);
  }

  public loadJSONObject(): void {
    Utils.log("loadJSONObject() is not implemented yet.", this._p);
  }

  public loadStrings(): void {
    Utils.log("loadStrings() is not implemented yet.", this._p);
  }

  public loadTable(): void {
    Utils.log("loadTable() is not implemented yet.", this._p);
  }

  public loadXML(): void {
    Utils.log("loadXML() is not implemented yet.", this._p);
  }

  public parseJSONArray(): void {
    Utils.log("parseJSONArray() is not implemented yet.", this._p);
  }

  public parseJSONObject(): void {
    Utils.log("parseJSONObject() is not implemented yet.", this._p);
  }

  public parseXML(): void {
    Utils.log("parseXML() is not implemented yet.", this._p);
  }

  public selectFolder(): void {
    Utils.log("selectFolder() is not implemented yet.", this._p);
  }

  public selectInput(): void {
    Utils.log("selectInput() is not implemented yet.", this._p);
  }

  public day(): number {
    return new Date().getDay();
  }

  public hour(): number {
    return new Date().getHours();
  }

  public millis(): number {
    return Date.now() - this._p.startTime;
  }

  public minute(): number {
    return new Date().getMinutes();
  }

  public month(): number {
    return new Date().getMonth();
  }

  public second(): number {
    return new Date().getSeconds();
  }

  public year(): number {
    return new Date().getFullYear();
  }
}
