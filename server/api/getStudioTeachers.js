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
                {
                    id: 1,
                    avatar: "",
                    name: "许泳涛",
                    teachingAge: 5,
                    intro:
                        "音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助提高艺术修养。音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助提高艺术修养。",
                    courses: [
                        {
                            id: 1,
                            name: "高考传媒播音班",
                            type: "大班",
                            price: 26600,
                            priceUnit: "课程",
                            priceUnitNum: 20
                        }
                    ]
                },
                {
                    id: 2,
                    avatar: "",
                    name: "许泳涛",
                    teaching_age: 5,
                    intro:
                        "音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助提高艺术修养。音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助提高艺术修养。",
                    courses: [
                        {
                            id: 2,
                            name: "高考传媒播音班",
                            type: "大班",
                            price: 26600,
                            priceUnit: "课程",
                            priceUnitNum: 20
                        }
                    ]
                }
            ]
        });
    }
}
