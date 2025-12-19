import { Router } from '../route.js';
import {TestResultViewPage} from '../page/TestResultViewPage.js';

class TestResultViewControl {
    constructor(containerId, userStat) {
      this.containerId = containerId;
      this.container = null;
      this.userStat = userStat;
    }

    render() {
      document.body.innerHTML = TestResultViewPage(this.userStat);
      this.container = document.getElementById(this.containerId);
    }
}


export {TestResultViewControl};
