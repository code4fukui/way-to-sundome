import { create } from "https://js.sabae.cc/stdcomp.js";

export class CheckBox extends HTMLElement {
  constructor(s) {
    super();
    const label = create("label", this);
    this.inp = create("input", label);
    this.inp.type = "checkbox";
    create("span", label).textContent = s;
  }
  set checked(b) {
    this.inp.checked = b;
  }
  get checked() {
    return this.inp.checked;
  }
}

customElements.define("check-box", CheckBox);
