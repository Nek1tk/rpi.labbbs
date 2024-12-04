import { AbstractComponent } from "../framework/view/abstract-component.js";

function createLoaderComponentTemplate() {
  return `<div class="loader">Loading</div>`;
}

export default class LoaderComponent extends AbstractComponent {
  get template() {
    return createLoaderComponentTemplate();
  }
}