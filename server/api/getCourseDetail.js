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
                name: '课程名称钢琴' || '',
                cover: 'http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/PlgTlDXg58f1d6e271640',
                cats: ['一级类目', '二级类目', '钢琴'],
                fitAge: '15-18周岁',
                type: '大班15人以上',
                ways: ['授课方式','老师上门','学生上门'],
                price: 1200 || 0,
                priceUnitNum: 12 || 0,
                priceUnit: '课程' || '',
                fitAgeTags: [
                    {
                        id: 1,
                        label: '适学对象标签1' || ''
                    },
                    {
                        id: 2,
                        label: '适学对象标签2' || ''
                    }
                ],
                targetTags: [
                    {
                        id: 1,
                        label: '学习目标标签1' || ''
                    },
                    {
                        id: 2,
                        label: '学习目标标签2' || ''
                    }
                ],
                intro: '本课程课程介绍' || '',
                teachers: [
                    {

                    }
                ]
            }
        })

    }

}