import { Router } from './route.js';
import { DashboardPage } from './page/DashboardPage.js';
import { LoginPage } from './page/LoginPage.js';

Router.addRoute('/', () => (document.body.innerHTML = DashboardPage()));
Router.addRoute('/login', () => (document.body.innerHTML = LoginPage));
Router.addRoute('/testResultView', () => console.log('검사 결과 보기'));
Router.addRoute('/profile', () => console.log('프로필 페이지'));
Router.addRoute('/error', () => console.log('오류 페이지'));

Router.init();

// ${LoginPage()}
// ${DashboardPage()}
// ${TestResultViewPage()}
// ${NotFoundPage()}
// ${ProfilePage()}

// 모든 페이지를 합쳐서 표시
//document.body.innerHTML = ``;
