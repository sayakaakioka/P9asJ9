import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9OutputFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
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
    ]);
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
            this._p.color(
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
    console.log(`[${this._p.id}]: ${str.join("")}`);
  }

  public saveFrame(): void {
    Utils.log("saveFrame() is not implemented yet.", this._p);
  }

  public save(): void {
    Utils.log("save() is not implemented yet.", this._p);
  }

  public beginRaw(): void {
    Utils.log("beginRaw() is not implemented yet.", this._p);
  }

  public beginRecord(): void {
    Utils.log("beginRecord() is not implemented yet.", this._p);
  }

  public createOutput(): void {
    Utils.log("createOutput() is not implemented yet.", this._p);
  }

  public createWriter(): void {
    Utils.log("createWriter() is not implemented yet.", this._p);
  }

  public endRaw(): void {
    Utils.log("endRaw() is not implemented yet.", this._p);
  }

  public endRecord(): void {
    Utils.log("endRecord() is not implemented yet.", this._p);
  }

  public saveBytes(): void {
    Utils.log("saveBytes() is not implemented yet.", this._p);
  }

  public saveJSONArray(): void {
    Utils.log("saveJSONArray() is not implemented yet.", this._p);
  }

  public saveJSONObject(): void {
    Utils.log("saveJSONObject() is not implemented yet.", this._p);
  }

  public saveStream(): void {
    Utils.log("saveStream() is not implemented yet.", this._p);
  }

  public saveStrings(): void {
    Utils.log("saveString() is not implemented yet.", this._p);
  }

  public saveTable(): void {
    Utils.log("saveTable() is not implemented yet.", this._p);
  }

  public saveXML(): void {
    Utils.log("saveXML() is not implemented yet.", this._p);
  }

  public selectOutput(): void {
    Utils.log("selectOutput() is not implemented yet.", this._p);
  }
}
