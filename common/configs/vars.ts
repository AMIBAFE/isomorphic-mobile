export const defaultAvatar = require("../../assets/images/default-avatar.png");

export enum Role { teacher = 3, studio };// 这里对应的是数据库的role表
//export enum Role { course = 20, studio };// 这里对应的是数据库的role表
export enum PriceUnitId { hour, term, course };
export const PriceUnitMap: string[] = [];
PriceUnitMap[PriceUnitId.hour] = "课时";
PriceUnitMap[PriceUnitId.term] = "学期";
PriceUnitMap[PriceUnitId.course] = "课程";

export const catEntrances = [
    {
        name: "艺术",
        className: "art",
        cid: 1,
    }, {
        name: "体育",
        className: "sport",
        cid: 128,
    }, {
        name: "生活",
        className: "life",
        cid: 185,
    }, {
        name: "出国",
        className: "abroad",
        cid: 214,
    }, {
        name: "幼小",
        className: "child",
        cid: 242,
    }, {
        name: "初中",
        className: "middle-school",
        cid: 334,
    }, {
        name: "高中",
        className: "hight-school",
        cid: 531,
    }, {
        name: "大学",
        className: "college",
        cid: 456,
    }, {
        name: "语言",
        className: "language",
        cid: 490,
    }, {
        name: "其他",
        className: "other",
        cid: 520
    }
];

