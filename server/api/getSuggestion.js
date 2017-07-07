export default function(req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        return res.status(200).json({
            meta: {
                code: 0,
                msg: "获取成功"
            },
            data: [
                "teachers": [
                    {
                        id: 1,
                        name: 'David' || '',
                        intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                        avatar: 'http://qmin91.com/file/MxcgkDYS576f41617a4b9' || '',
                        teachingAge: 6 || 0,
                        address: '汕头市龙湖区金砂东路奋发园主楼501' || '',
                    },
                    {
                        id: 2,
                        name: 'Jack' || '',
                        intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                        avatar: 'http://qmin91.com/file/MxcgkDYS576f41617a4b9' || '',
                        teachingAge: 8 || 0,
                        address: '汕头市龙湖区金砂东路奋发园主楼501' || '',
                    }
                ],
                "cats" : [
                    {
                        id: 1,
                        label: '钢琴' || '',
                        intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                    },
                   {
                        id: 2,
                        label: '英语' || '',
                        intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                    },
                ],
                "studios" : [
                    {
                        id: 2,
                        company: '纳斯' || '',
                        intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                        cover: 'http://qmin91.com/file/MxcgkDYS576f41617a4b9' || '',
                        address: '汕头市龙湖区金砂东路奋发园主楼501' || '',
                    }
                ]
            ]
        });
    }
}
