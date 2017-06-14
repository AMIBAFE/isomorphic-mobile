export default function(req, res) {
    const err = false; // 模拟请求失败

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
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