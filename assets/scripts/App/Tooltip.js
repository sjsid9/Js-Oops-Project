import { Component } from './Component.js';

export class Tooltip extends Component {
  constructor(closeNoteNotifierFunction, text, hostElementId) {
    super(hostElementId);
    // super('active-projects', false);
    this.closeNotifier = closeNoteNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(tooltipBody);
    // tooltipElement.textContent = this.text;
    // console.log(this.hostElement.getBoundingClientRect());

    const hostPosLeft = this.hostElement.offsetLeft;
    const hostPosTop = this.hostElement.offsetTop;
    const hostHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostPosLeft + 20;
    const y = hostPosTop + hostHeight - parentElementScrolling - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';

    this.element = tooltipElement;
    tooltipElement.addEventListener('click', this.closeTooltip);
  }
}
