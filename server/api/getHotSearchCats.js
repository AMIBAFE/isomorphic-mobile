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
                    label: "尤克里里"
                },
                {
                    id: 2,
                    label: "自由搏击"
                },
                {
                    id: 12,
                    label: "新概念英语"
                },
                {
                    id: 23,
                    label: "高考数学"
                },
                {
                    id: 71,
                    label: "尤克里"
                },
                {
                    id: 28,
                    label: "绘画"
                }
            ]
        });
    }
}
