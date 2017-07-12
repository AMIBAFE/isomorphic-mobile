export default function(req, res) {
    const err = false;

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        return res.status(200).json({
            meta: {
                code: 0,
                msg: ""
            },
            data: [
                {
                    id: 1,
                    name: "热门课程1名字",
                    fitAge: "5-18岁（青年）" || "",
                    type: "大班（15人以上）" || "",
                    price: 1200 || 0,
                    priceUnitNum: 12 || 0,
                    priceUnit: "课程" || "",
                    cats: ["一级类目", "二级类目", "钢琴"]
                },
                {
                    id: 2,
                    name: "热门课程2",
                    fitAge: "5-18岁（青年）" || "",
                    type: "大班（15人以上）" || "",
                    price: 1200 || 0,
                    priceUnitNum: 12 || 0,
                    priceUnit: "课程" || "",
                    cats: ["一级类目", "二级类目", "钢琴"]
                },
                {
                    id: 3,
                    name: "热门课程3",
                    fitAge: "5-18岁（青年）" || "",
                    type: "大班（15人以上）" || "",
                    price: 1200 || 0,
                    priceUnitNum: 12 || 0,
                    priceUnit: "课程" || "",
                    cats: ["一级类目", "二级类目", "钢琴"]
                },
                {
                    id: 4,
                    name: "热门课程4",
                    fitAge: "5-18岁（青年）" || "",
                    type: "大班（15人以上）" || "",
                    price: 1200 || 0,
                    priceUnitNum: 12 || 0,
                    priceUnit: "课程" || "",
                    cats: ["一级类目", "二级类目", "钢琴"]
                }
            ]
        });
    }
}
