let mix = require('laravel-mix');
const path = require("path");

mix.webpackConfig({
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.mjs$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        publicPath: Mix.isUsing('hmr') ? '/' : '/wp-content/plugins/pingly-product-enquiry/assets/',
        chunkFilename: 'admin/js/[name].js'
    },
    plugins: [

    ],
    resolve: {
        extensions: ['.*', '.wasm', '.mjs', '.js', '.jsx', '.json', '.vue'],
        alias: {
            '@Pieces': path.resolve(__dirname, 'resources/admin/Pieces'),
            '@': path.resolve(__dirname, 'resources/admin')
        }
    }
});

mix.options({ processCssUrls: false });

mix.js('resources/admin/boot.js', 'assets/admin/js/boot.js').vue({ version: 2 });
mix.js('resources/admin/start.js', 'assets/admin/js/start.js').vue({ version: 2 });
mix.copy('resources/admin/images', 'assets/admin/images');
mix.sass('resources/scss/admin.scss', 'assets/admin/css/admin.css');
mix.copy('node_modules/element-ui/lib/theme-chalk/fonts', 'assets/admin/css/fonts');
mix.copy('resources/public/images', 'assets/public/images');

// Pingly Product Enquiry js
mix.js('resources/public/js/pingly.js', 'assets/public/js/pingly-product-enquiry.js');
mix.sass('resources/scss/public-pingly.scss', 'assets/public/css/pingly-product-enquiry.css');
