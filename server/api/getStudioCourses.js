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
                    name: "高考传媒播音班",
                    cover: "",
                    fitAge: "15-18岁",
                    type: "大班（15人以上）",
                    price: 26600,
                    priceUnit: "课程",
                    priceUnitNum: 20
                },
                {
                    id: 2,
                    name: "高考传媒播音班",
                    cover: "",
                    fitAge: "15-18岁",
                    type: "大班（15人以上）",
                    price: 26600,
                    priceUnit: "课程",
                    priceUnitNum: 20
                },
                {
                    id: 3,
                    name: "高考传媒播音班",
                    cover: "",
                    fitAge: "15-18岁",
                    type: "大班（15人以上）",
                    price: 26600,
                    priceUnit: "课程",
                    priceUnitNum: 20
                },
                {
                    id: 4,
                    name: "高考传媒播音班",
                    cover: "",
                    fitAge: "15-18岁",
                    type: "大班（15人以上）",
                    price: 26600,
                    priceUnit: "课程",
                    priceUnitNum: 20
                }
            ]
        });
    }
}
