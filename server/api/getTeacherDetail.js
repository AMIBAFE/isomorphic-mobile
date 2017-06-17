export default function (req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
        // 请求相关变量在res.body上
        const id = req.body.id || 0;
        const role = req.body.role || 3;

        if (role == 3) {// 老师
            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: '获取成功'
                },
                data: {
                    id,
                    name: `yota${id}` || '',
                    shortIntro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                    intro: '音乐是打开智慧之门的金钥匙，学习钢琴能陶冶情操，提高艺术修养，有助...' || '',
                    avatar: 'http://qmin91.com/file/MxcgkDYS576f41617a4b9' || '',
                    teachingAge: 8 || 0,
                    labels: '国家一级教师、优秀教师' || '',
                    address: '汕头市龙湖区金砂东路奋发园主楼501' || '',
                    courses: [{
                        id: 1,
                        name: '课程1名字',
                        fitAge: '5-18岁（青年）' || '',
                        type: '大班（15人以上）' || '',
                        price: 1200 || 0,
                        priceUnitNum: 12 || 0,
                        priceUnit: '课程' || '',
                        cats: ['一级类目', '二级类目', '钢琴'],
                    }, {
                        id: 2,
                        name: '课程2',
                        fitAge: '5-18岁（青年）' || '',
                        type: '大班（15人以上）' || '',
                        price: 1200 || 0,
                        priceUnitNum: 12 || 0,
                        priceUnit: '课程' || '',
                        cats: ['一级类目', '二级类目', '钢琴'],
                    }]
                }
            })
        } else if (role == 4) {// 机构
            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: '获取成功'
                },
                data: {
                    name: 'yota',
                    age: '28'
                }
            })
        }
    }
}