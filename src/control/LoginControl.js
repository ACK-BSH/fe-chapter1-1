import { Router } from '../route.js';
import { LoginPage } from '../page/LoginPage.js';
import { observer } from '../observer.js';

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
    this.container.addEventListener('click', e => {
      const emailCheck = this.container.querySelector('#email');
      const passCheck = this.container.querySelector('#passwordV2');

      if (e.target.closest('#Submit')) {
        if (!emailCheck.checkValidity()) {
          return;
        }

        if (!passCheck.checkValidity()) {
          return;
        }

        observer.setState({
          isLogin: true,
          userName: '성훈',
          userClass: '의사'
        });

        Router.navigate('/');
      }
    });
  }
}

export { LoginControl };
