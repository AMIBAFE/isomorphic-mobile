export default function(req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end("服务器错误");
    } else {
        // 请求相关变量在res.body上
        const id = req.body.id || 0;

        return res.status(200).json({
            meta: {
                code: 0,
                msg: "获取成功"
            },
            data: {
                id: 1,
                name: "yota",
                age: "28",
                intro:
                    "汕头市开路者射箭馆位于高新区科技西路华夏楼5楼（新梅园楼上），总面积四百多平方米，其中开设12米箭道8条、8米箭道6条，配备数十套专业反曲弓、复合弓和传统弓，更有专业教练团队驻馆开展指导，为不同年龄、不同水平的爱好者提供全方位的射箭体验、训练、以及比赛服务。同时还有飞镖、电玩、水吧、免费wifi等设施，可供宾客在射箭之余休闲娱乐。"
            }
        });
    }
}
