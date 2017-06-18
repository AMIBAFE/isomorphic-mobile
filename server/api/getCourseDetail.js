export default function (req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
        // 请求相关变量在res.body上
        const id = req.body.id || 110,
        return res.status(200).json({
            meta: {
                code: 0,
                msg: '获取成功'
            },
            data: {
                id,
                name: `课程名称：英语口语课程${id}` || '',
                cover: 'http://maoyou-qmjy.oss-cn-hangzhou.aliyuncs.com/d3nUXM4Q5938ae310a72e',
                cats: ['一级类目', '二级类目', '三级类目'],
                fitAge: '16-45岁' || '',
                type: '大班（15人以上）' || '',
                way: '学生上门',
                price: 90 || 0,
                priceUnitNum: 6 || 0,
                priceUnit: '课程',
                intro: '1、打造纯正英语发音，个性化课程设置2、从最贴近日常生活的话题开始，在轻松活跃的氛围中自然接受，并培养主动开口的意识和活泼的英语思维3、全面提升学员的表程度，成为真正的英语达人',
                fitAgeTag: [
                    {
                        id: 1,
                        label: '口语基础薄弱学员'
                    },
                    {
                        id: 1,
                        label: '外企工作人群'
                    },
                    {
                        id: 1,
                        label: '出国旅游需求'
                    }
                ],
                targetTag: [
                    {
                        id: 1,
                        label: '达到国外日常生活交流无障碍，并能独立处理日常问题或突发事件'
                    },
                    {
                        id: 1,
                        label: '大大方方说英语，能够用英语表达或描述'
                    },
                    {
                        id: 1,
                        label: '具备英语思维，会话时能扣紧扣主题'
                    }
                ],
                address: '汕头市龙湖区金砂东路奋发园主楼501' || '',


            }
        })
    }
}