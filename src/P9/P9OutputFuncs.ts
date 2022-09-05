import { Utils } from "Utils";
import { P9ColorFuncs } from "./P9ColorFuncs";

export class P9OutputFuncs extends P9ColorFuncs {
  constructor(u: Utils, canvas: HTMLCanvasElement) {
    super(u, canvas);
  }

  public registerOutputFuncs(): void {
    this.utils.p9FuncList = [
      "printArray",
      "print",
      "println",
      "saveFrame",
      "save",
      "beginRaw",
      "beginRecord",
      "createOutput",
      "createWriter",
      "endRaw",
      "endRecord",
      "saveBytes",
      "saveJSONArray",
      "saveJSONObject",
      "saveStream",
      "saveStrings",
      "saveTable",
      "saveXML",
      "selectOutput",
    ];
  }

  public printArray(list: Array<object>): void {
    for (const [idx, v] of list.entries()) {
      console.log(`[${idx}] ${v}`);
    }
  }

  public print(
    ...args: Array<number> | Array<boolean> | Array<string> | Array<object>
  ): void {
    this.println(...args);
  }

  public println(
    ...args: Array<number> | Array<boolean> | Array<string> | Array<object>
  ): void {
    const str = args.map((e) => {
      if (typeof e === "string") {
        if (e.startsWith("#")) {
          return String(
            this.color(
              parseInt(e.substring(1, 3), 16),
              parseInt(e.substring(3, 5), 16),
              parseInt(e.substring(5), 16)
            )
          );
        }
        return e;
      }

      if (typeof e === "number" || typeof e === "boolean") {
        return e.toString();
      }

      if (Array.isArray(e)) {
        return e.join(" ");
      }

      return e.toString();
    });
    console.log(`[${this.utils.id}]: ${str.join("")}`);
  }

  public saveFrame(): void {
    this.utils.log("saveFrame() is not implemented yet.");
  }

  public save(): void {
    this.utils.log("save() is not implemented yet.");
  }

  public beginRaw(): void {
    this.utils.log("beginRaw() is not implemented yet.");
  }

  public beginRecord(): void {
    this.utils.log("beginRecord() is not implemented yet.");
  }

  public createOutput(): void {
    this.utils.log("createOutput() is not implemented yet.");
  }

  public createWriter(): void {
    this.utils.log("createWriter() is not implemented yet.");
  }

  public endRaw(): void {
    this.utils.log("endRaw() is not implemented yet.");
  }

  public endRecord(): void {
    this.utils.log("endRecord() is not implemented yet.");
  }

  public saveBytes(): void {
    this.utils.log("saveBytes() is not implemented yet.");
  }

  public saveJSONArray(): void {
    this.utils.log("saveJSONArray() is not implemented yet.");
  }

  public saveJSONObject(): void {
    this.utils.log("saveJSONObject() is not implemented yet.");
  }

  public saveStream(): void {
    this.utils.log("saveStream() is not implemented yet.");
  }

  public saveStrings(): void {
    this.utils.log("saveString() is not implemented yet.");
  }

  public saveTable(): void {
    this.utils.log("saveTable() is not implemented yet.");
  }

  public saveXML(): void {
    this.utils.log("saveXML() is not implemented yet.");
  }

  public selectOutput(): void {
    this.utils.log("selectOutput() is not implemented yet.");
  }
}
