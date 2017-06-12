export default function (req, res) {
    const err = false;//后续通过数据库验证

    if (err) {
        return res.status(500).end('服务器错误');
    } else {
        return res.status(200).json({
            name: 'yota',
            age: '28'
        })
    }
}