export default function(req, res) {
    const err = false;

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        // 请求相关变量在res.body上
        const currentPage = req.body.currentPage || 1; // 请求页码
        const pageSize = req.body.pageSize || 6; // 每页条数
        const totalPages = 3; // 分页总数

        if (currentPage > totalPages) {
            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: ""
                },
                data: {
                    currentPage,
                    totalPages,
                    pageSize
                }
            });
        } else {
            return res.status(200).json({
                meta: {
                    code: 0,
                    msg: ""
                },
                data: {
                    currentPage,
                    totalPages,
                    pageSize,
                    recommends: [
                        {
                            id: 1,
                            name: "课程1名字",
                            fitAge: "5-18岁（青年）" || "",
                            type: "大班（15人以上）" || "",
                            price: 1200 || 0,
                            priceUnitNum: 12 || 0,
                            priceUnit: "课程" || "",
                            cats: ["一级类目", "二级类目", "钢琴"]
                        },
                        {
                            id: 2,
                            name: "课程2",
                            fitAge: "5-18岁（青年）" || "",
                            type: "大班（15人以上）" || "",
                            price: 1200 || 0,
                            priceUnitNum: 12 || 0,
                            priceUnit: "课程" || "",
                            cats: ["一级类目", "二级类目", "钢琴"]
                        },
                        {
                            id: 3,
                            name: "课程3",
                            fitAge: "5-18岁（青年）" || "",
                            type: "大班（15人以上）" || "",
                            price: 1200 || 0,
                            priceUnitNum: 12 || 0,
                            priceUnit: "课程" || "",
                            cats: ["一级类目", "二级类目", "钢琴"]
                        },
                        {
                            id: 4,
                            name: "课程4",
                            fitAge: "5-18岁（青年）" || "",
                            type: "大班（15人以上）" || "",
                            price: 1200 || 0,
                            priceUnitNum: 12 || 0,
                            priceUnit: "课程" || "",
                            cats: ["一级类目", "二级类目", "钢琴"]
                        }
                    ]
                }
            });
        }
    }
}
