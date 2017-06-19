export default function (req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
        const id = req.body.id || 0;
        return res.status(200).json({
            meta: {
                code: 0,
                msg: '获取成功'
            },
            data: {
                name: '课程名称钢琴',
                intro: '本课程课程介绍',
                fitAgeTag: [
                    {
                        id:1,
                        label: '适学对象标签'
                    },
                    {
                        id:1,
                        label: '学习目标标签'
                    }
                ]
            }
        })

    }

}