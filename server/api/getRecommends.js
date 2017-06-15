export default function (req, res) {
    const err = false;

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
        const currentPage = req.body.currentPage || 1;// 请求页码
        const pageSize = req.body.pageSize || 6;// 每页条数
        const totalPages = 3;// 分页总数

        if (currentPage > totalPages) {
            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: ""
                },
                data: {
                    currentPage,
                    totalPages,
                    pageSize,
                }
            })
        } else {
            let recommends = [];

            for (let i = 1; i <= pageSize; i++) {
                const id = (currentPage - 1) * pageSize + i;

                recommends.push({
                    id: id,
                    role: i % 3 === 0 ? 3 : 4,
                    name: 'yota' + id,
                    selfIntro: '自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介自我简介',
                    teachingAge: 4,
                    favCount: 120,
                    viewedCount: 230,
                    certified: true,
                    courses: [{
                        cid: 1000 + id,
                        name: '高一物理',
                        type: '1对1',
                        floorPrice: '价格面议',
                        priceUnit: 1,
                    }, {
                        cid: 2000 + id,
                        name: '高二物理',
                        type: '1对2',
                        floorPrice: 130,
                        priceUnit: 2,
                    }]
                })
            }

            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: ""
                },
                data: {
                    currentPage,
                    totalPages,
                    pageSize,
                    recommends
                }
            })
        }
    }
}