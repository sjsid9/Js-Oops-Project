import { DOMHelper } from '../Utility/DOMHelper.js';
// import { Tooltip } from './Tooltip.js';

export class ProductItem {
  

  constructor(id, updateProjectsListFunction, type) {
    this.hasActiveTooltip = false;
    this.id = id;
    this.updateProjectsListHandler = updateProjectsListFunction;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
    this.connectDrag();
  }

  connectDrag() {
    document.getElementById(this.id).addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });
  }

  connectSwitchButton(type) {
    const projectElement = document.getElementById(this.id);
    let switchButton = projectElement.querySelector('button:last-of-type');
    switchButton = DOMHelper.clearEventListeners(switchButton);
    switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchButton.addEventListener(
      'click',
      this.updateProjectsListHandler.bind(null, this.id)
    );
  }

  showInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const text = projectElement.dataset.extraInfo;

    import('./Tooltip.js').then((module) => {
      const tooltip = new module.Tooltip(
        () => {
          this.hasActiveTooltip = false;
        },
        text,
        this.id
      );
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  connectMoreInfoButton() {
    const projectElement = document.getElementById(this.id);
    let moreInfoButton = projectElement.querySelector('button:first-of-type');
    moreInfoButton.addEventListener('click', this.showInfoHandler.bind(this));
  }

  update(updateProjectsListFunction, type) {
    this.updateProjectsListHandler = updateProjectsListFunction;
    this.connectSwitchButton(type);
  }
}
