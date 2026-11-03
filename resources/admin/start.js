import routes from './Bits/routes';
const vueRouter = new window.WPCIPEPlugin.Router({
    routes: window.WPCIPEPlugin.applyFilters('wpcipe_global_routes', routes)
});

window.WPCIPEPlugin.Vue.prototype.$get  = window.WPCIPEPlugin.$get;
window.WPCIPEPlugin.Vue.prototype.$post = window.WPCIPEPlugin.$post;
window.WPCIPEPlugin.Vue.prototype.$put  = window.WPCIPEPlugin.$put;
window.WPCIPEPlugin.Vue.prototype.$del  = window.WPCIPEPlugin.$del;

window.WPCIPEPlugin.Vue.prototype.$bus = new window.WPCIPEPlugin.Vue();

document.addEventListener('DOMContentLoaded', () => {
    new window.WPCIPEPlugin.Vue({
        el: '#wp_wpcipe_settings_app',
        render: h => h(require('./Application').default),
        router: vueRouter,
        mounted() {
            // console.log('Vue App Mounted');
        }
    });
});
