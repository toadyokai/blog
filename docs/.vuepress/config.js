const { auto } = require("async");

module.exports = {
    base: '/blog/',
    title: '反对蛙',
    themeConfig: {
        searchMaxSuggestions: 10,
        nav: [
            // { text: 'Home', link: '/blog' },
            { text: 'WebGL', link: '/tech/webgl/' },
            { text: 'Chrome', link: '/tech/chrome/' },
            { text: '随笔', link: '/essays/' },
            // {
            //     text: '技术',
            //     items: [
            //         {
            //             text: 'WebGL',
            //             link: '/tech/webgl/readme'
            //         },
            //         {
            //             text: 'Chrome',
            //             link: '/tech/chrome/readme'
            //         },
            //     ]
            // },
        ],
        sidebar: {
            '/tech/webgl/': [{
                title: 'WebGL',
                collapsable: false,
                children: [
                    'chapter-1',
                    'chapter-2',
                    'chapter-3',
                    'chapter-4',
                    'chapter-5',
                    'chapter-6',
                    'chapter-7',
                    'chapter-8',
                    'chapter-9',
                    'chapter-10',
                    'shader',
                    'test',
                ]
            }],
            '/tech/chrome/': [{
                title: 'Chrome',
                collapsable: false,
                children: [
                    '',
                ]
            }]
        }
    }
}