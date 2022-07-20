import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import processing from "highlight.js/lib/languages/processing";
import { P9Factory } from "./P9Factory";

class P9asJ9 {
  private readonly _canvasIdList = new Array<string>();
  private readonly _factory: P9Factory;

  constructor() {
    // collect canvas IDs to avoid conflicts
    const canvasElements = Array.from(document.getElementsByTagName("canvas"));
    canvasElements.forEach((e: HTMLCanvasElement) => {
      const id = e.getAttribute("id");
      if (id !== null) {
        this._canvasIdList.push(id);
      }
    });

    this._factory = new P9Factory(window);

    // extract only Processing related script blocks and create P9 objects
    const scriptElements = Array.from(document.getElementsByTagName("script"));
    scriptElements.forEach((e: HTMLScriptElement) => {
      if (e.getAttribute("type") === "text/processing") {
        // get id and generate P9 object
        const id = e.getAttribute("id");
        if (id !== null) {
          this._factory.p9Producer(e, id);
        } else {
          this._factory.p9Producer(e, this.generateId());
        }
      }
    });

    // for transpiled mode
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("processing", processing);

    const styleElement = document.createElement("style");
    styleElement.innerText = `pre.debug {display: inline-block; width: 40%; overflow-x: auto; vertical-align: top; margin-left: 10px; margin-right: 10px; background-color: black; color: white;}`;
    document.head.appendChild(styleElement);

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "hljs.css");
    document.head.appendChild(linkElement);
  }

  // generates ID string avoiding conflicts with canvas IDs
  private generateId(): string {
    const ret_prefix = `${this.constructor.name}_${this._factory.length}`;

    let duplicateCounter: number = 0;
    let ret = `${ret_prefix}`;
    while (this._canvasIdList.includes(ret)) {
      ret = `${ret_prefix}_${duplicateCounter++}`;
    }
    return ret;
  }

  public run(): void {
    let instances = this._factory.instances;
    instances.map((e) => {
      // if transpiled mode on, display source code and transpiled code
      if (e.displayCode) {
        let preElement = document.createElement("pre");
        preElement.setAttribute("class", "debug");
        preElement.innerHTML = hljs.highlight(e.transpiled, {
          language: "javascript",
        }).value;
        e.canvas.after(document.createElement("p"));
        e.canvas.after(preElement);

        preElement = document.createElement("pre");
        preElement.setAttribute("class", "debug");
        preElement.innerHTML = hljs.highlight(e.src, {
          language: "processing",
        }).value;
        e.canvas.after(preElement);

        e.canvas.after(document.createElement("p"));
      }

      // put everything into JavaScript function and read it
      const p9Func = new Function(`return (${e.transpiled});`)();
      p9Func(e);

      e.startTime = Date.now();
      // start the sequence
      if (e.settings !== undefined) {
        e.settings();
      }

      if (e.setup !== undefined) {
        e.setup();
      }

      if (e.noLoopCalled) {
        if (e.redraw !== undefined) {
          e.redraw();
        }
      } else {
        if (e.loop !== undefined) {
          e.loop();
        }
      }
    });
  }
}

window.addEventListener("load", function () {
  const obj = new P9asJ9();
  obj.run();
});
