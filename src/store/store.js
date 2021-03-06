import Vue from 'vue'
import Vuex from 'vuex'
import moduleManager from './modules/moduleManager'
import topicManager from './modules/topicManager'
import language from './utils/language'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isDark: true,
        isSidebarOpen: false,
        isSignedIn: false,
        isLeft: true,
        isKillswitchUp: false,
        isFullscreen: false,
        be_api_url: "http://localhost:8000"
    },
    mutations: {
        toggleDarkMode() {
            this.state.isDark = !this.state.isDark
        },
        toggleSideBar() {
            this.state.isSidebarOpen = !this.state.isSidebarOpen
        },
        toggleLeftMode() {
            this.state.isLeft = !this.state.isLeft
        },
        toggleKillswitch() {
            this.state.isKillswitchUp = !this.state.isKillswitchUp
        },
        signIn() {
            this.state.isSignedIn = true
        },
        signOut() {
            this.state.isSignedIn = false
        },
        setActiveLayoutId(id) {
            this.state.activeLayoutId = id
        },
        setFullscreenFalse() {
            this.state.isFullscreen = false
        },
        setFullscreenTrue() {
            this.state.isFullscreen = true
        },
        noLayout() {
            this.state.activeLayoutId = -1
        }
    },
    actions: {

    },
    //WARNING : This attribute belongs to Vue Js, not to be confused with Sonia Modules.
    modules: {
        moduleManager,
        topicManager,
        language
    }
})