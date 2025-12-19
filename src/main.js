import { Storage } from './storage.js';
import { Router } from './route.js';
import { DashBoardControl } from './control/DashBoardControl.js';
import { LoginControl } from './control/LoginControl.js';
import { TestResultViewControl } from './control/TestResultViewControl.js';
// import { ProfilePage } from './control/ProfilePage.js';
// import { NotFoundPage } from './control/NotFoundPage.js';

Storage.init();

Router.addRoute('/', DashBoardControl);
Router.addRoute('/login', LoginControl);
Router.addRoute('/testResultView', TestResultViewControl);
// Router.addRoute('/profile', () => (ProfilePage.render()));
// Router.addRoute('404', () => (NotFoundPage.render()));

//Router.addRoute('404', () => document.body.innerHTML = NotFoundPage());

Router.init();

// ${LoginPage()}
// ${DashboardPage()}
// ${TestResultViewPage()}
// ${NotFoundPage()}
// ${ProfilePage()}

// 모든 페이지를 합쳐서 표시
//document.body.innerHTML = ``;
