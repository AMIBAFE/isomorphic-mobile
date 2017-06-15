export const defaultAvatar = require("../../assets/images/default-avatar.png");

export enum Role { teacher = 3, studio };// 这里对应的是数据库的role表
export enum PriceUnitId { hour, term, course };
export const PriceUnitMap: string[] = [];
PriceUnitMap[PriceUnitId.hour] = "课时";
PriceUnitMap[PriceUnitId.term] = "学期";
PriceUnitMap[PriceUnitId.course] = "课程";

