const { auto } = require("async");

module.exports = {
    base: '/',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            // { text: 'Home', link: '/blog' },
            { text: '随笔', link: '/essays/' },
            { text: '技术', link: '/tech/' },
        ],
        // sidebar: {
        //     '/tech/': [
        //         {
        //             title: '浏览器',
        //             path: '/browser/',
        //             collapsable: false,
        //             children: [],
        //         },
        //         {
        //             title: 'WebGL',
        //             path: '/webgl/',
        //             collapsable: false,
        //             children: [],
        //         },
        //     ],

        //     '/essays/': [
        //         {
        //             title: '基础理论',
        //             collapsable: false,
        //             path: '/theory/',
        //             children: [],
        //         },
        //     ]
        // }
        sidebar: 'auto'
    }
}