export default function(req, res) {
    // 请求发的参数
    const sid = req.body.sid;
    // 模拟请求失败
    const err = false;

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        return res.status(200).json({
            meta: {
                code: 0,
                msg: "获取成功"
            },
            data: {
                id: 12,
                name: "幼儿园名字",
                intro:
                    "汕头市开路者射箭馆位于高新区科技西路华夏楼5楼（新梅园楼上），总面积四百多平方米，其中开设12米箭道8条、8米箭道6条，配备数十套专业反曲弓、复合弓和传统弓，更有专业教练团队驻馆开展指导，为不同年龄、不同水平的爱好者提供全方位的射箭体验、训练、以及比赛服务。同时还有飞镖、电玩、水吧、免费wifi等设施，可供宾客在射箭之余休闲娱乐。",
                video: {
                    title: "艺考教育中心宣传片",
                    cover:
                        "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                    mp4:
                        "http://ojhtrtdq7.bkt.clouddn.com/uvideo-591ffd662bae8.mp4",
                    webm:
                        "http://ojhtrtdq7.bkt.clouddn.com/uvideo-tc-591ffd662bae8.mkv"
                },
                address: {
                    contact: "李老师",
                    tels: ["13450258690", "0768-6437281"],
                    email: "857779962@qq.com"
                },
                envAlbum: [
                    {
                        name: "教学环境",
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                    },
                    {
                        name: "教学环境2",
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                    },
                    {
                        name: "教学环境3",
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                    },
                    {
                        name: "教学环境4",
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                    }
                ],
                honorAlbum: [
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/VRf1J1DZ58f1d67f0ee81"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/v760m4pZ58f1d687330a6"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/65C2Aa7858f1d68f0594f"
                    },
                    {
                        src:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/PEEOjzQL58f1d694a50f1"
                    }
                ]
            }
        });
    }
}
