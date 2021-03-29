module.exports = {
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Foo', link: '/foo/' },
            { text: 'Bar', link: '/bar/' },
            { text: 'External', link: 'https://google.com', target: '_self', rel: '' },
            { text: 'Guide', link: '/guide/', target: '_blank' }
        ],
        sidebar: {
            '/foo/': [
                {
                    title: '目录结构',
                    path: '/two/',
                    collapsable: false,
                    children: [{
                        title: 'Stage',
                        path: '/foo/one.md'
                    },
                    {
                        title: 'Representation',
                        path: '/foo/two.md'
                    }
                    ],
                },
            ],

            '/bar/': [
                {
                    title: '基础理论',
                    collapsable: false,
                    path: '/theory/',
                    children: [{
                        title: 'Shader编程',
                        path: '/bar/three.md'
                    }],
                },
            ]
        }
    }
}