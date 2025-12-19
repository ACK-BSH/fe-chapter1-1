import { Router } from '../route.js';
import {LoginPage} from '../page/LoginPage.js';

class LoginControl {
    constructor(containerId, userStat) {
      this.containerId = containerId;
      this.container = null;
      this.userStat = userStat;
    }

    render() {

      if (this.userStat && this.userStat.isLogin) {
        Router.navigate('/');
        return;
      }

      document.body.innerHTML = LoginPage();
      this.container = document.getElementById(this.containerId);

      if (this.container) {
        this.attachEventListeners();
      }
    }

    attachEventListeners() {
      this.container.addEventListener('click',  e => {

        const emailCheck = this.container.querySelector('#email');
        const passCheck = this.container.querySelector('#passwordV2');

        if (e.target.closest('#Submit')) {
          if(!emailCheck.checkValidity()){
            return;
          }

          if(!passCheck.checkValidity()){
            return;
          }

          this.userStat.isLogin = true;
          this.userStat.userName = '성훈';
          this.userStat.userClass = '의사';

          localStorage.setItem('appState', JSON.stringify(this.userStat));

          Router.navigate('/');
        }
      });

    }
}


export {LoginControl};
