import { Play, Timeline } from "./Models";


//Nha Trang ngày 1

const NTActive1: Play = {
    id: 1,
    name: "Suối khoáng nóng Thác Bà",
    time: "2h30p",
    type: "play",
    image: "https://theme.hstatic.net/1000347287/1000488893/14/ms_banner_img2.jpg?v=1175"
}

const NTActive2: Play = {
    id: 2,
    name: "Thác Bà Ponagar",
    time: "1h",
    type: "play",
    image: "https://static.vinwonders.com/2022/02/thap-ba-ponagar-nha-trang-8.jpg"
}

const NTActive3: Play = {
    id: 3,
    name: "Nghỉ Ngơi Tại Khách Sạn Mường Thanh",
    time: "1h",
    type: "stay",
    image: "./assets/muongthanh.jpg"
}

const NTActive4: Play = {
    id: 4,
    name: "Tắm Biển Nha Trang",
    time: "2h",
    type: "play",
    image: "https://statics.vinpearl.com/bai-tam-doi-nha-trang-3_1629120698.jpg"
}

const NTActive5: Play = {
    id: 5,
    name: "Nhà hàng Bờ Kè",
    time: "2h",
    type: "eat",
    image: "https://hoangviettravel.vn/wp-content/uploads/2020/09/quan-hai-san-bo-ke-nha-trang.jpg"
}

const NTActive6: Play = {
    id: 6,
    name: "Chợ đêm Nha Trang",
    time: "2h",
    type: "play",
    image: "https://statics.vinpearl.com/bien-nha-trang-ve-dem-thumb_1634535489.jpg"
}

const NTActive7: Play = {
    id: 7,
    name: "Quay Về Khách Sạn Mường Thanh Nghỉ Ngơi",
    time: "8h",
    type: "stay",
    image: "./assets/muongthanh.jpg"
}

export const NT1: Timeline = {
    id: 1,
    dateNumber: 1,
    place: "NHA TRANG",
    plays: [NTActive1, NTActive2, NTActive3, NTActive4, NTActive5, NTActive6, NTActive7]
}

// Nha Trang Ngày 2

const NTActive8: Play = {
    id: 8,
    name: "Bún cá",
    time: "1h30p",
    type: "eat",
    image: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/01-DSVM-Ph%C6%B0%C6%A1ng/27.%20l%C3%A0m%20b%C3%BAn%20c%C3%A1%20nha%20trang/cach-nau-bun-ca-nha-trang-khong-tanh-don-gian-cho-nguoi-moi-hoc-1.jpg"
}

const NTActive9: Play = {
    id: 9,
    name: "Vịnh Nha Phu",
    time: "1h30p",
    type: "play",
    image: "https://statics.vinpearl.com/vinh-nha-phu-nha-trang--4_1627718859.jpg"
}

const NTActive10: Play = {
    id: 10,
    name: "Biển An Bình",
    time: "2h30p",
    type: "stay",
    image: "https://statics.vntrip.vn/data-v2/data-guide/img_content/1462761597_suoi-hoa-lan-nha-trang-10.jpg"
}

const NTActive11: Play = {
    id: 11,
    name: "Đảo Khỉ",
    time: "2h45p",
    type: "play",
    image: "https://ik.imagekit.io/tvlk/blog/2023/01/dao-khi-nha-trang-1.jpg?tr=dpr-2,w-675"
}

const NTActive12: Play = {
    id: 12,
    name: "Nhà hàng Bờ Kè",
    time: "2h",
    type: "eat",
    image: "https://hoangviettravel.vn/wp-content/uploads/2020/09/quan-hai-san-bo-ke-nha-trang.jpg"
}

const NTActive13: Play = {
    id: 13,
    name: "Chợ đêm Nha Trang",
    time: "2h",
    type: "play",
    image: "https://statics.vinpearl.com/bien-nha-trang-ve-dem-thumb_1634535489.jpg"
}

const NTActive14: Play = {
    id: 14,
    name: "Quay Về Khách Sạn Mường Thanh Nghỉ Ngơi",
    time: "8h",
    type: "stay",
    image: "./assets/muongthanh.jpg"
}

export const NT2: Timeline = {
    id: 2,
    dateNumber: 2,
    place: " SUỐI HOA LAN - ĐẢO KHỈ",
    plays: [NTActive8, NTActive9, NTActive10, NTActive11, NTActive12, NTActive13, NTActive14]
}

// Nha Trang Ngày 3

const NTActive15: Play = {
    id: 15,
    name: "Bún sứa",
    time: "1h30p",
    type: "eat",
    image: "https://static.vinwonders.com/2022/05/an-sang-nha-trang-4-1.jpg"
}

const NTActive16: Play = {
    id: 16,
    name: "Vinpearl Land",
    time: "10h",
    type: "play",
    image: "https://statics.vinpearl.com/vinwonders-nha-trang_1665580300.jpg"
}


const NTActive17: Play = {
    id: 17,
    name: "Quay Về Khách Sạn Mường Thanh Nghỉ Ngơi",
    time: "8h",
    type: "stay",
    image: "./assets/muongthanh.jpg"
}

export const NT3: Timeline = {
    id: 3,
    dateNumber: 3,
    place: "VINPEARL LAND",
    plays: [NTActive15, NTActive16, NTActive17]
}

// Nha Trang Ngày 4


const NTActive18: Play = {
    id: 18,
    name: "Mì Quảng",
    time: "1h30p",
    type: "eat",
    image: "https://static.vinwonders.com/2022/05/an-sang-nha-trang-5-1.jpg"
}

const NTActive19: Play = {
    id: 19,
    name: "Bình Hưng",
    time: "2h30p",
    type: "play",
    image: "https://elitetour.com.vn/files/images/Blogs/travelbinhhung-3.jpg"
}

const NTActive20: Play = {
    id: 20,
    name: "Resort Vĩnh Hy",
    time: "1h30p",
    type: "stay",
    image: "https://kenhhomestay.com/wp-content/uploads/2018/09/resort-vinh-hy-1.jpg"
}

const NTActive21: Play = {
    id: 21,
    name: "Vườn Nho",
    time: "1h30p ",
    type: "play",
    image: "https://homiwine.com/wp-content/uploads/2021/12/IMG_20200612_153749.jpg"
}

const NTActive22: Play = {
    id: 22,
    name: "Bãi San hô cổ",
    time: "1h30p ",
    type: "play",
    image: "https://ktmt.vnmediacdn.com/images/2021/08/31/30-1630417701-hang-rai-zn.jpg"
}

const NTActive23: Play = {
    id: 23,
    name: "Về Resort Vĩnh Hy Ăn Tối Và Nghỉ Ngơi",
    time: "1h30p ",
    type: "stay",
    image: "https://kenhhomestay.com/wp-content/uploads/2018/09/resort-vinh-hy-1.jpg"
}

export const NT4: Timeline = {
    id: 4,
    dateNumber: 4,
    place: "HANG RÁI - VĨNH HY",
    plays: [NTActive18, NTActive19, NTActive20, NTActive21, NTActive22, NTActive23]
}

// Nha Trang Ngày 5


const NTActive24: Play = {
    id: 24,
    name: "Bánh ướt",
    time: "1h30p",
    type: "eat",
    image: "https://dichoinhatrang.net/wp-content/uploads/2018/10/quan-banh-uot-ngon-o-nha-trang-7.jpg"
}

const NTActive25: Play = {
    id: 25,
    name: "Nhà Thờ Núi",
    time: "1h30p",
    type: "play",
    image: "https://statics.vinpearl.com/nha-tho-nui-nha-trang-2_1631523740.jpeg"
}

const NTActive26: Play = {
    id: 26,
    name: "Chùa Long Sơn",
    time: "1h30p",
    type: "play",
    image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1652433204/blog/pruanjlqwz0qt6lkcds8.webp"
}

const NTActive27: Play = {
    id: 27,
    name: "Hòn Chồng",
    time: "1h30p ",
    type: "play",
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2016/01/canh-quan-hon-chong-hon-vo-vntrip-e1502448528878.jpg"
}


const NTActive28: Play = {
    id: 28,
    name: "Nha Trang",
    time: "7h",
    type: "stay",
    image: "https://statics.vinpearl.com/bien-nha-trang-ve-dem-thumb_1634535489.jpg"
}

export const NT5: Timeline = {
    id: 5,
    dateNumber: 5,
    place: "NHA TRANG",
    plays: [NTActive24, NTActive25, NTActive26, NTActive27, NTActive28]
}

// Nha Trang Ngày 6


const NTActive29: Play = {
    id: 29,
    name: "Bánh ướt",
    time: "1h30p",
    type: "eat",
    image: "https://sayhi.vn/blog/wp-content/uploads/2019/01/1-xeo-chao-muc.jpg"
}

const NTActive30: Play = {
    id: 30,
    name: "Làng Yến Mai Sinh",
    time: "1h30p",
    type: "play",
    image: "https://vietasian.vn/wp-content/uploads/2019/06/lang-yen-mai-sinh.jpg"
}

export const NT6: Timeline = {
    id: 6,
    dateNumber: 6,
    place: "HỒ CHÍ MINH",
    plays: [NTActive29, NTActive30]
}

export const TimelineNT: Timeline[] = [NT1, NT2, NT3, NT4, NT5, NT6]









//ĐÀ NẴNG



//Đà Nẵng ngày 1

const DNActive1: Play = {
    id: 1,
    name: "Bán đảo Sơn Trà",
    time: "2h",
    type: "play",
    image: "https://ik.imagekit.io/tvlk/blog/2022/09/ban-dao-son-tra-3-1024x550.jpg?tr=dpr-2,w-675"
}

const DNActive2: Play = {
    id: 2,
    name: "Bánh tráng thịt heo",
    time: "2h",
    type: "eat",
    image: "https://6f3ebe2ff971707.cmccloud.com.vn/tour/wp-content/uploads/2021/12/banh-trang-cuon-da-nang.png"
}

const DNActive3: Play = {
    id: 3,
    name: "Incheon Coffee",
    time: "1h",
    type: "stay",
    image: "https://elitetour.com.vn/files/images/INCHEON%20COFFEE.jpeg"
}

const DNActive4: Play = {
    id: 4,
    name: "Biển Đà Nẵng",
    time: "2h",
    type: "play",
    image: "https://static.vinwonders.com/2022/03/bai-bien-da-nang-1.jpeg"
}

const DNActive5: Play = {
    id: 5,
    name: "Cầu Rồng",
    time: "2h",
    type: "play",
    image: "https://statics.vinpearl.com/cau-rong-da-nang-anh-thumb_1629439147.png"
}

const DNActive6: Play = {
    id: 6,
    name: "Nhà hàng",
    time: "2h",
    type: "eat",
    image: "https://statics.vinpearl.com/an-toi-o-da-nang%207_0.jpg"
}

const DNActive7: Play = {
    id: 7,
    name: "Đà Nẵng Sun Peninsula Resort",
    time: "8h",
    type: "stay",
    image: "./assets/dn-stay.jpg"
}

export const DN1: Timeline = {
    id: 1,
    dateNumber: 1,
    place: "ĐÀ NẴNG",
    plays: [DNActive1, DNActive2, DNActive3, DNActive4, DNActive5, DNActive6, DNActive7]
}

// Đà Nẵng Ngày 2

const DNActive8: Play = {
    id: 8,
    name: "Bánh canh Ruộng",
    time: "1h",
    type: "eat",
    image: "https://bazantravel.com/cdn/medias/uploads/73/73647-banh-canh-da-nang-700x697.jpg"
}

const DNActive9: Play = {
    id: 9,
    name: "Bà Nà Hills",
    time: "1h",
    type: "play",
    image: "https://cdn.tgdd.vn/Files/2021/07/03/1365294/kinh-nghiem-du-lich-ba-na-hill-tron-ven-tu-a-z-202206041049510078.jpg"
}

const DNActive10: Play = {
    id: 10,
    name: "Cáp Treo Đến Cầu Vàng",
    time: "20p",
    type: "move",
    image: "https://banahills.sunworld.vn/wp-content/uploads/2020/03/cap-treo-ba-na-van-hanh_result.jpg"
}

const DNActive11: Play = {
    id: 11,
    name: "Cầu Vàng",
    time: "30p",
    type: "play",
    image: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg"
}

const DNActive12: Play = {
    id: 12,
    name: "Làng Pháp",
    time: "1h",
    type: "play",
    image: "https://banahills.sunworld.vn/wp-content/uploads/2020/06/image1-1.png"
}

const DNActive13: Play = {
    id: 13,
    name: "Fantasy Park",
    time: "2h",
    type: "play",
    image: "https://dulichkhampha24.com/wp-content/uploads/2021/01/khu-vui-choi-fantasy-park-ba-na-hills-1.jpg"
}

const DNActive14: Play = {
    id: 14,
    name: "Quay Về Sun Peninsula Resort",
    time: "8h",
    type: "stay",
    image: "./assets/dn-stay.jpg"
}

export const DN2: Timeline = {
    id: 2,
    dateNumber: 2,
    place: "BÀ NÀ HILLS",
    plays: [DNActive8, DNActive9, DNActive10, DNActive11, DNActive12, DNActive13, DNActive14]
}

// Đà Nẵng Ngày 3

const DNActive15: Play = {
    id: 15,
    name: "Cảng Cửa Đại",
    time: "2h30p",
    type: "move",
    image: "https://culaochamtour.com/wp-content/uploads/2021/06/combo-tour-du-lich-cu-lao-cham-2-ngay-1024x768.jpg"
}

const DNActive16: Play = {
    id: 16,
    name: "Bãi Làng",
    time: "1h30p",
    type: "play",
    image: "https://culaochamtour.com/wp-content/uploads/2020/09/bailangculaocham-1.jpg"
}


const DNActive17: Play = {
    id: 17,
    name: "Bãi Chồng",
    time: "2h30p",
    type: "play",
    image: "https://culaochamtour.com/wp-content/uploads/2020/10/baichongculaocham.jpg"
}

const DNActive18: Play = {
    id: 18,
    name: "Hội An",
    time: "2h30p",
    type: "move",
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg"
}

const DNActive19: Play = {
    id: 19,
    name: "Phố cổ Hội An",
    time: "4h30p",
    type: "play",
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip-1.jpg"
}

const DNActive20: Play = {
    id: 20,
    name: "Thịt nướng",
    time: "1h",
    type: "stay",
    image: "https://bazantravel.com/cdn/medias/uploads/67/67454-an-toi-hoi-an-1-700x394.jpg"
}

export const DN3: Timeline = {
    id: 3,
    dateNumber: 3,
    place: "CÙ LAO CHÀM - HỘI AN",
    plays: [DNActive15, DNActive16, DNActive17, DNActive18, DNActive19, DNActive20]
}

export const TimelineDN: Timeline[] = [DN1, DN2, DN3]
