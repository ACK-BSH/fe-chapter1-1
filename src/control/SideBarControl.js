import {SideBarPage} from '../page/SideBarPage.js';
import {Router} from '../route.js';

class SideBarControl {
    constructor(containerId, userStat) {
      this.containerId = containerId;
      this.container = null;
      this.userStat = userStat;
    }

    render() {

      this.container = document.getElementById(this.containerId);

      if (!this.container) {
        return;
      }

      this.container.innerHTML = SideBarPage(this.userStat);

      if (this.container) {
        //this.updateLoginStatus();  디자인이 부셔져서 주석 후 HTML 수정으로 변경
        this.attachEventListeners();
      }
    }

    updateLoginStatus(){

      const pro = this.container.querySelector('#Profile');
      const userInfo = this.container.querySelector('#UserStatus');

      if(this.userStat.isLogin)
      {
        pro.style.display = 'block';
        userInfo.style.display = 'block';
      }
      else
      {
        pro.style.display = 'none';
        userInfo.style.display = 'none';
      }

    }

    attachEventListeners() {
      this.container.addEventListener('click', e => {
        // target.id 로 했을때 왜 글자부분은 안먹히고 공백만 되는지
        if (e.target.closest('#Result')) {
            if(this.userStat.isLogin)
            {
              Router.navigate('/testResultView');
            }
            else
            {
              Router.navigate('/login');
            }
        }

        if(e.target.closest('.logout-btn-v2')){
          this.userStat.isLogin = false;
          this.userStat.userName = '';
          this.userStat.userClass = '';

          localStorage.setItem('appState', JSON.stringify(this.userStat));

          Router.navigate('/');
        }


      });
    }

}


export {SideBarControl};
