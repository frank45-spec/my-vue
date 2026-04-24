import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FooterPage from './components/footerpage.vue'
import NavBar from './components/NavBar.vue'
import HomePage from './views/HomePage.vue'
import Dashboard from './views/Dashboard.vue'
import ProfilePage from './views/profilepage.vue'
import SettingPage from './views/settingpage.vue'
import AboutPage from './views/AboutPage.vue'
import FormPage from './views/FormPage.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './main.css'
 
const app = createApp(App)
app.use(router)
app.component('FooterPage', FooterPage)
app.component('NavBar', NavBar)
app.component('HomePage', HomePage)
app.component('DashboardPage', Dashboard)
app.component('ProfilePage', ProfilePage)
app.component('SettingPage', SettingPage)
app.component('AboutPage', AboutPage)
app.component('FormPage', FormPage)
// Enable Vue devtools in development builds
if (process.env.NODE_ENV === 'development') {
	app.config.devtools = true
}

app.mount('#app')