export default function(req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        // 请求相关变量在res.body上
        const id = req.body.id || 0;

        return res.status(200).json({
            meta: {
                code: 0,
                msg: "获取成功"
            },
            data: {
                hotCourses: [
                    {
                        id: 1,
                        name: "高考传媒播音班",
                        cover: "",
                        fitAge: "15-18岁",
                        type: "大班（15人以上）",
                        price: 26600,
                        priceUnit: "课程",
                        priceUnitNum: 20
                    },
                    {
                        id: 2,
                        name: "高考传媒播音班",
                        cover: "",
                        fitAge: "15-18岁",
                        type: "大班（15人以上）",
                        price: 26600,
                        priceUnit: "课程",
                        priceUnitNum: 20
                    },
                    {
                        id: 3,
                        name: "高考传媒播音班",
                        cover: "",
                        fitAge: "15-18岁",
                        type: "大班（15人以上）",
                        price: 26600,
                        priceUnit: "课程",
                        priceUnitNum: 20
                    },
                    {
                        id: 4,
                        name: "高考传媒播音班",
                        cover: "",
                        fitAge: "15-18岁",
                        type: "大班（15人以上）",
                        price: 26600,
                        priceUnit: "课程",
                        priceUnitNum: 20
                    }
                ],
                hotTeachers: [
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
                ],
                teachingEnvironmentPhotos: [
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                        name: "教学环境"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/VRf1J1DZ58f1d67f0ee81",
                        name: "教学环境"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/v760m4pZ58f1d687330a6",
                        name: "教学环境"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/65C2Aa7858f1d68f0594f",
                        name: "教学环境"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/PEEOjzQL58f1d694a50f1",
                        name: "教学环境"
                    }
                ],
                studentStylePhotoAlbums: [
                    {
                        name: "学生风采",
                        desc: "少儿美术班（联想素描班）",
                        photos: [
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                                w: 800,
                                h: 600
                            },
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                            },
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/BjClyLiU576b919ecfb2b"
                            }
                        ]
                    },
                    {
                        name: "学生风采",
                        desc: "少儿美术班（联想素描班）",
                        photos: [
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/VRf1J1DZ58f1d67f0ee81",
                                w: 1280,
                                h: 854
                            },
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/87Ax0Y0H576b91a99d03f"
                            },
                            {
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/ncJWCPzR583bd174b124e"
                            }
                        ]
                    }
                ]
            }
        });
    }
}
