import { Utils } from "../Utils";
import { P9 } from "../P9";

export class P9LightsCameraFuncs {
  constructor(private readonly _p: P9) {
    _p.addP9Funcs([
      "ambientLight",
      "directionalLight",
      "lightFalloff",
      "lightSpecular",
      "lights",
      "noLights",
      "normal",
      "pointLight",
      "spotLight",
      "beginCamera",
      "camera",
      "endCamera",
      "frustum",
      "ortho",
      "perspective",
      "printCamera",
      "printProjection",
      "modelX",
      "modelY",
      "modelZ",
      "screenX",
      "screenY",
      "screenZ",
      "ambient",
      "emissive",
      "shininess",
      "specular",
    ]);
  }

  public ambientLight(): void {
    Utils.log("ambientLight() is not implemented yet.", this._p);
  }

  public directionalLight(): void {
    Utils.log("directionalLight() is not implemented yet.", this._p);
  }

  public lightFalloff(): void {
    Utils.log("lightFalloff() is not implemented yet.", this._p);
  }

  public lightSpecular(): void {
    Utils.log("lightSpecular() is not implemented yet.", this._p);
  }

  public lights(): void {
    Utils.log("lights() is not implemented yet.", this._p);
  }

  public noLights(): void {
    Utils.log("noLights() is not implemented yet.", this._p);
  }

  public normal(): void {
    Utils.log("normal() is not implemented yet.", this._p);
  }

  public pointLight(): void {
    Utils.log("pointLight() is not implemented yet.", this._p);
  }

  public spotLight(): void {
    Utils.log("spotLight() is not implemented yet.", this._p);
  }

  public beginCamera(): void {
    Utils.log("beginCamera() is not implemented yet.", this._p);
  }

  public camera(): void {
    Utils.log("camera() is not implemented yet.", this._p);
  }

  public endCamera(): void {
    Utils.log("endCamera() is not implemented yet.", this._p);
  }

  public frustum(): void {
    Utils.log("frustum() is not implemented yet.", this._p);
  }

  public ortho(): void {
    Utils.log("ortho() is not implemented yet.", this._p);
  }

  public perspective(): void {
    Utils.log("perspective() is not implemented yet.", this._p);
  }

  public printCamera(): void {
    Utils.log("printCamera() is not implemented yet.", this._p);
  }

  public printProjection(): void {
    Utils.log("printProjection() is not implemented yet.", this._p);
  }

  public modelX(): void {
    Utils.log("modelX() is not implemented yet.", this._p);
  }

  public modelY(): void {
    Utils.log("modelY() is not implemented yet.", this._p);
  }

  public modelZ(): void {
    Utils.log("modelZ() is not implemented yet.", this._p);
  }

  public screenX(): void {
    Utils.log("screenX() is not implemented yet.", this._p);
  }

  public screenY(): void {
    Utils.log("screenY() is not implemented yet.", this._p);
  }

  public screenZ(): void {
    Utils.log("screenZ() is not implemented yet.", this._p);
  }

  public ambient(): void {
    Utils.log("ambient() is not implemented yet.", this._p);
  }

  public emissive(): void {
    Utils.log("emissive() is not implemented yet.", this._p);
  }

  public shininess(): void {
    Utils.log("shininess() is not implemented yet.", this._p);
  }

  public specular(): void {
    Utils.log("specular() is not implemented yet.", this._p);
  }
}
