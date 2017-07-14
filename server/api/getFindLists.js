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
                    label: "艺术学堂",
                    description: "不会唱歌怎么办",
                    cover:
                        "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/k4iyJrro58e894a367795"
                },
                {
                    id: 2,
                    label: "雅思口语测试权威版",
                    description: "考生必看",
                    cover:
                        "http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/5Jvu2vGG58230e3ad741a"
                }
            ]
        });
    }
}
