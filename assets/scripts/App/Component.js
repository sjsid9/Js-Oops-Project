export class Component {
  constructor(hostElementId, insertBefore = false) {
    this.insertBefore = insertBefore;
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
  }

  detach() {
    if (this.element) {
      this.element.remove();
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}
