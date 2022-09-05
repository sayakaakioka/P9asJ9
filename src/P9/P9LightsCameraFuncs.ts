import { Utils } from "../Utils";

export class P9LightsCameraFuncs {
  public utils: Utils;

  constructor(u: Utils) {
    this.utils = u;
  }

  registerLightsCameraFuncs(): void {
    this.utils.p9FuncList = [
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
    ];
  }

  public ambientLight(): void {
    this.utils.log("ambientLight() is not implemented yet.");
  }

  public directionalLight(): void {
    this.utils.log("directionalLight() is not implemented yet.");
  }

  public lightFalloff(): void {
    this.utils.log("lightFalloff() is not implemented yet.");
  }

  public lightSpecular(): void {
    this.utils.log("lightSpecular() is not implemented yet.");
  }

  public lights(): void {
    this.utils.log("lights() is not implemented yet.");
  }

  public noLights(): void {
    this.utils.log("noLights() is not implemented yet.");
  }

  public normal(): void {
    this.utils.log("normal() is not implemented yet.");
  }

  public pointLight(): void {
    this.utils.log("pointLight() is not implemented yet.");
  }

  public spotLight(): void {
    this.utils.log("spotLight() is not implemented yet.");
  }

  public beginCamera(): void {
    this.utils.log("beginCamera() is not implemented yet.");
  }

  public camera(): void {
    this.utils.log("camera() is not implemented yet.");
  }

  public endCamera(): void {
    this.utils.log("endCamera() is not implemented yet.");
  }

  public frustum(): void {
    this.utils.log("frustum() is not implemented yet.");
  }

  public ortho(): void {
    this.utils.log("ortho() is not implemented yet.");
  }

  public perspective(): void {
    this.utils.log("perspective() is not implemented yet.");
  }

  public printCamera(): void {
    this.utils.log("printCamera() is not implemented yet.");
  }

  public printProjection(): void {
    this.utils.log("printProjection() is not implemented yet.");
  }

  public modelX(): void {
    this.utils.log("modelX() is not implemented yet.");
  }

  public modelY(): void {
    this.utils.log("modelY() is not implemented yet.");
  }

  public modelZ(): void {
    this.utils.log("modelZ() is not implemented yet.");
  }

  public screenX(): void {
    this.utils.log("screenX() is not implemented yet.");
  }

  public screenY(): void {
    this.utils.log("screenY() is not implemented yet.");
  }

  public screenZ(): void {
    this.utils.log("screenZ() is not implemented yet.");
  }

  public ambient(): void {
    this.utils.log("ambient() is not implemented yet.");
  }

  public emissive(): void {
    this.utils.log("emissive() is not implemented yet.");
  }

  public shininess(): void {
    this.utils.log("shininess() is not implemented yet.");
  }

  public specular(): void {
    this.utils.log("specular() is not implemented yet.");
  }
}
