import routes from './Bits/routes';
const vueRouter = new window.PINGLYPlugin.Router({
    routes: window.PINGLYPlugin.applyFilters('pingly_global_routes', routes)
});

window.PINGLYPlugin.Vue.prototype.$get  = window.PINGLYPlugin.$get;
window.PINGLYPlugin.Vue.prototype.$post = window.PINGLYPlugin.$post;
window.PINGLYPlugin.Vue.prototype.$put  = window.PINGLYPlugin.$put;
window.PINGLYPlugin.Vue.prototype.$del  = window.PINGLYPlugin.$del;

window.PINGLYPlugin.Vue.prototype.$bus = new window.PINGLYPlugin.Vue();

document.addEventListener('DOMContentLoaded', () => {
    new window.PINGLYPlugin.Vue({
        el: '#wp_pingly_settings_app',
        render: h => h(require('./Application').default),
        router: vueRouter,
        mounted() {
            // console.log('Vue App Mounted');
        }
    });
});
