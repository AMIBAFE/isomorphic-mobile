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
            data: {
                videos: [
                    {
                        title: "艺考教育中心宣传片",
                        cover:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                        mp4:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-591ffd662bae8.mp4",
                        webm:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-tc-591ffd662bae8.mkv"
                    },
                    {
                        title: "艺考教育中心宣传片",
                        cover:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                        mp4:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-591ffd662bae8.mp4",
                        webm:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-tc-591ffd662bae8.mkv"
                    },
                    {
                        title: "艺考教育中心宣传片",
                        cover:
                            "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881",
                        mp4:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-591ffd662bae8.mp4",
                        webm:
                            "http://ojhtrtdq7.bkt.clouddn.com/uvideo-tc-591ffd662bae8.mkv"
                    }
                ],
                photoAlbums: [
                    {
                        name: "机构荣誉",
                        desc: "所获的荣誉证书",
                        photos: [
                            {
                                name: "教学环境",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                            },
                            {
                                name: "教学环境2",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                            },
                            {
                                name: "教学环境3",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                            },
                            {
                                name: "教学环境4",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                            }
                        ]
                    },
                    {
                        name: "教学环境",
                        desc: "漂亮的教学环境",
                        photos: [
                            {
                                name: "教学环境",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                            },
                            {
                                name: "教学环境2",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                            },
                            {
                                name: "教学环境3",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/4Xh7Jry258f1d4986f881"
                            },
                            {
                                name: "教学环境4",
                                w: 1200,
                                h: 800,
                                src:
                                    "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/mxCryDL4576b918bbd3b8"
                            }
                        ]
                    }
                ]
            }
        });
    }
}
