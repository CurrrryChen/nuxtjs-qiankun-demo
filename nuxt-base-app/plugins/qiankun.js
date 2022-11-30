import { registerMicroApps } from 'qiankun';

registerMicroApps([
    {
        name: 'vue-sub-app',
        entry: '//localhost:8081',
        container: '#vueSubApp',
        activeRule: '/vueSubApp',
    }
]);