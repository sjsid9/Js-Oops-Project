import { ProductList } from './ProjectList.js';

class App {
  static init() {
    const activeList = new ProductList('active');
    const finishedList = new ProductList('finished');
    activeList.setSwitchHandler(finishedList.addProject.bind(finishedList));
    finishedList.setSwitchHandler(activeList.addProject.bind(activeList));

    // document
    //   .getElementById('start-analytics-btn')
    //   .addEventListener('click', this.startAnalytics);

    // this.showAlertScript();
  }

  // static showAlertScript() {
  //   const alertScript = document.createElement('script');
  //   alertScript.textContent = "alert('Hi there')";
  //   document.querySelector('head').append(alertScript);
  // }

  static startAnalytics() {
    const startAnalyticsScript = document.createElement('script');
    startAnalyticsScript.src = 'assets/scripts/analytics.js';
    startAnalyticsScript.defer = true;
    document.querySelector('head').append(startAnalyticsScript);
  }
}

App.init();
