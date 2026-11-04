import PinglyProductEnquiry from '../Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue';
import LicenseManagement from '../Modules/LicenseManagement';
import Documentation from '../Modules/Documentation.vue';
import Support from "../Modules/Support.vue";

export default [
    {
        name: '',
        path: '/',
        component: PinglyProductEnquiry,
        exact: true,
    },
    
    {
        name: 'license-management',
        path: '/license-management',
        component: LicenseManagement,
        exact: true,
    },

    {
        name: 'documentation',
        path: '/documentation',
        component: Documentation,
        exact: true,
    },

    {
        name: 'support',
        path: '/support',
        component: Support,
        exact: true,
    },
];