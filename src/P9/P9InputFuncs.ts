import { Utils } from "../Utils";
import { P9MathFuncs } from "./P9MathFuncs";

export class P9InputFuncs extends P9MathFuncs {
  constructor(u: Utils, c: HTMLCanvasElement) {
    super(u);
  }

  public registerInputFuncs(): void {
    this.utils.p9FuncList = [
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
    ];
  }

  public createInput(): void {
    this.utils.log("createInput() is not implemented yet.");
  }

  public createReader(): void {
    this.utils.log("createReader() is not implemented yet.");
  }

  public launch(): void {
    this.utils.log("launch() is not implemented yet.");
  }

  public loadBytes(): void {
    this.utils.log("loadBytes() is not implemented yet.");
  }

  public loadJSONArray(): void {
    this.utils.log("loadJSONArray() is not implemented yet.");
  }

  public loadJSONObject(): void {
    this.utils.log("loadJSONObject() is not implemented yet.");
  }

  public loadStrings(): void {
    this.utils.log("loadStrings() is not implemented yet.");
  }

  public loadTable(): void {
    this.utils.log("loadTable() is not implemented yet.");
  }

  public loadXML(): void {
    this.utils.log("loadXML() is not implemented yet.");
  }

  public parseJSONArray(): void {
    this.utils.log("parseJSONArray() is not implemented yet.");
  }

  public parseJSONObject(): void {
    this.utils.log("parseJSONObject() is not implemented yet.");
  }

  public parseXML(): void {
    this.utils.log("parseXML() is not implemented yet.");
  }

  public selectFolder(): void {
    this.utils.log("selectFolder() is not implemented yet.");
  }

  public selectInput(): void {
    this.utils.log("selectInput() is not implemented yet.");
  }

  public day(): number {
    return new Date().getDay();
  }

  public hour(): number {
    return new Date().getHours();
  }

  public millis(): number {
    return Date.now() - this.startTime;
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
