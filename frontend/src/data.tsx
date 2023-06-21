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
    type: "eat",
    image: "https://bazantravel.com/cdn/medias/uploads/67/67454-an-toi-hoi-an-1-700x394.jpg"
}

export const DN3: Timeline = {
    id: 3,
    dateNumber: 3,
    place: "CÙ LAO CHÀM - HỘI AN",
    plays: [DNActive15, DNActive16, DNActive17, DNActive18, DNActive19, DNActive20]
}

// Đà Nẵng Ngày 4

const DNActive21: Play = {
    id: 21,
    name: "Bánh mì Madam",
    time: "30p",
    type: "eat",
    image: "https://static.vinwonders.com/2023/01/an-sang-hoi-an-2.jpg"
}

const DNActive22: Play = {
    id: 22,
    name: " Di chuyển từ Hội An đến Mỹ Sơn",
    time: "2h30p",
    type: "move",
    image: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/2-1-e1501974710149.png"
}


const DNActive23: Play = {
    id: 23,
    name: "Thánh mẫu Trà Kiệu",
    time: "2h",
    type: "play",
    image: "https://lendang.vn/uploads/articles/articles_1443343407_6e07d654830bbd1d4020d9117f59d4a8.jpg"
}

const DNActive24: Play = {
    id: 24,
    name: "Bê thui Cầu Mống",
    time: "2h",
    type: "eat",
    image: "https://statics.vinpearl.com/be-thui-cau-mong-05_1634016440.jpg"
}

const DNActive25: Play = {
    id: 25,
    name: "Di chuyển từ Mỹ Sơn đến Huế",
    time: "3h",
    type: "move",
    image: "https://photo-cms-baophapluat.epicdn.me/w800/Uploaded/2023/athlrainaghat/2022_02_03/bai-bao-xuan-quynhnga-di-san-hue-h-4-4535.jpg"
}

const DNActive26: Play = {
    id: 26,
    name: "Bún bò",
    time: "1h",
    type: "eat",
    image: "https://halotravel.vn/wp-content/uploads/2021/01/bun-bo-hue-foodies.amandavv-1024x1024.jpg"
}

export const DN4: Timeline = {
    id: 4,
    dateNumber: 4,
    place: "MỸ SƠN",
    plays: [DNActive21, DNActive22, DNActive23, DNActive24, DNActive25, DNActive26]
}

// Đà Nẵng Ngày 5

const DNActive27: Play = {
    id: 27,
    name: "Lăng Minh Mạng",
    time: "4h",
    type: "play",
    image: "https://thuathienhue.gov.vn/Portals/0/Medias/Nam2022/T7/lang%20minh%20mang.jpg"
}

const DNActive28: Play = {
    id: 28,
    name: "Lăng Khải Định",
    time: "4h",
    type: "play",
    image: "https://thuathienhue.gov.vn/Portals/0/MINH2022/MINH%20THANG%205/M_20220805_KHAIDINH.jpg"
}


const DNActive29: Play = {
    id: 29,
    name: "Đại Nội Huế",
    time: "1h",
    type: "play",
    image: "https://cdn.tgdd.vn/Files/2022/03/25/1422359/kham-pha-dau-an-lich-su-co-do-dai-noi-hue-hoang-thanh-hue-202203251516507682.jpg"
}

const DNActive30: Play = {
    id: 30,
    name: "Chùa Thiên Mụ",
    time: "2h",
    type: "play",
    image: "https://amthucdochay.com/wp-content/uploads/2021/05/16_51.jpg"
}

const DNActive31: Play = {
    id: 31,
    name: "Bánh canh",
    time: "1h",
    type: "move",
    image: "https://www.bachhoaxanh.com/kinh-nghiem-hay/cach-lam-mon-banh-canh-nam-pho-hue-dam-da-chuan-vi-ngon-thom-lung-1370684"
}

const DNActive32: Play = {
    id: 32,
    name: "Chè",
    time: "1h",
    type: "eat",
    image: "https://laque.vn/che-hue/"
}

export const DN5: Timeline = {
    id: 5,
    dateNumber: 5,
    place: "HUẾ",
    plays: [DNActive27, DNActive28, DNActive29, DNActive30, DNActive31, DNActive32]
}

// Đà Nẵng Ngày 6

const DNActive33: Play = {
    id: 33,
    name: "Di chuyển từ Huế đến Đà Nẵng",
    time: "1h",
    type: "move",
    image: "https://statics.vinpearl.com/du-lich-da-nang_1657939501.JPG"
}

const DNActive34: Play = {
    id: 34,
    name: "Đầm Lập An, Vịnh Lăng Cô",
    time: "1h",
    type: "stay",
    image: "https://wiki-travel.com.vn/Uploads/picture/qiongru-194023034030-Dam-Lap-An-Nang-tho-xu-Hue.jpg"
}

export const DN6: Timeline = {
    id: 6,
    dateNumber: 6,
    place: "ĐÀ NẴNG",
    plays: [DNActive33, DNActive34]
}

export const TimelineDN: Timeline[] = [DN1, DN2, DN3, DN4, DN5, DN6]



//Hà Nội



//Hà Nội ngày 1

const HNActive1: Play = {
    id: 1,
    name: "Di chuyển đến khách sạn",
    time: "1h",
    type: "stay",
    image: "https://cdn2.vietnambooking.com/wp-content/uploads/hotel_pro/hotel_334909/4bd84a7b5f1f1f34c5015341f6ea5a85.jpg"
}

const HNActive2: Play = {
    id: 2,
    name: "Cơm Sườn Đào Duy Từ",
    time: "30p",
    type: "eat",
    image: "https://cdn.tgdd.vn/Files/2022/09/24/1471653/cac-quan-an-trua-tai-ha-noi-ngon-hut-khach-nhat-dinh-phai-thu-202209240308516796.jpg"
}

const HNActive3: Play = {
    id: 3,
    name: "Hồ Tây",
    time: "1h",
    type: "stay",
    image: "https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-ho-tay-dep-1.jpg"
}

const HNActive4: Play = {
    id: 4,
    name: "Bánh Mì Chảo Hiệu Lực",
    time: "1h",
    type: "eat",
    image: "https://cdn.tgdd.vn/Files/2021/06/24/1363040/cac-mon-ngon-ha-noi-phai-thu-cac-quan-an-ha-noi-phai-ghe-202209271047446095.jpg"
}

const HNActive5: Play = {
    id: 5,
    name: "Hồ Gươm - Phố đi bộ",
    time: "1h",
    type: "play",
    image: "https://nongnghiephuucovn.vn/uploads/tin-tuc/hg11.jpg"
}

const HNActive6: Play = {
    id: 6,
    name: "Cháo Sườn Huyền Anh",
    time: "1h",
    type: "eat",
    image: "https://owa.bestprice.vn/images/articles/uploads/15-dia-diem-an-vat-dem-o-ha-noi-sieu-ngon-sieu-re-5f6d7724b61e0.jpg"
}

const HNActive7: Play = {
    id: 7,
    name: "Về Khách Sạn Nghỉ Ngơi",
    time: "8h",
    type: "stay",
    image: "./assets/dn-stay.jpg"
}

export const HN1: Timeline = {
    id: 1,
    dateNumber: 1,
    place: "Hà Nội",
    plays: [HNActive1, HNActive2, HNActive3, HNActive4, HNActive5, HNActive6, HNActive7]
}

// Hà Nội Ngày 2

const HNActive8: Play = {
    id: 8,
    name: "Xôi thịt – 57 Thợ Nhuộm",
    time: "1h",
    type: "eat",
    image: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/32222496_10156086802296352_6183903954414338048_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=qrjDfJSMrE0AX_F2McF&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfCyXSqK4brn3qZ-waL6g3aseDh2od1_qbrtIB7wMounNw&oe=64B7705A"
}

const HNActive9: Play = {
    id: 9,
    name: "Lăng Chủ Tịch Hồ Chí Minh",
    time: "1h30",
    type: "play",
    image: "https://ik.imagekit.io/tvlk/blog/2023/02/lang-chu-tich%E2%80%93ho-chi-minh-5.jpg?tr=dpr-2,w-675"
}

const HNActive10: Play = {
    id: 10,
    name: "Bún ngan Bà Hằng",
    time: "45p",
    type: "eat",
    image: "https://toplist.vn/images/800px/bun-ngan-ba-hang-638885.jpg"
}

const HNActive11: Play = {
    id: 11,
    name: "Bánh Cốm Hàng Than",
    time: "1h30p",
    type: "eat",
    image: "https://nguyenninhhanoi.com/wp-content/uploads/2022/10/3-3.jpg"
}

const HNActive12: Play = {
    id: 12,
    name: "Lẩu cháo lòng Hai Mập",
    time: "1h30p",
    type: "eat",
    image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1653562703/blog/s1yzw5ir22abrtpgyb7x.webp"
}

const HNActive13: Play = {
    id: 13,
    name: "Degrees Cafe",
    time: "1h30p",
    type: "play",
    image: "https://inhat.vn/ha-noi/wp-content/uploads/2019/09/quan-cafe-dep-ha-noi-buoi-toi-10-1024x683.jpg"
}

const HNActive14: Play = {
    id: 14,
    name: "Hà Nội - SaPa",
    time: "7h - 8h",
    type: "move",
    image: "./assets/move.png"
}

export const HN2: Timeline = {
    id: 2,
    dateNumber: 2,
    place: "Hà Nội",
    plays: [HNActive8, HNActive9, HNActive10, HNActive11, HNActive12, HNActive13, HNActive14]
}

// Hà Nội Ngày 3

const HNActive15: Play = {
    id: 15,
    name: "Phở sạch Bắc Hà",
    time: "45p",
    type: "eat",
    image: "https://digifood.vn/blog/wp-content/uploads/2022/07/An-sang-o-sapa-6-2.jpg"
}

const HNActive16: Play = {
    id: 16,
    name: "Núi Hàm Rồng",
    time: "1h30p",
    type: "play",
    image: "https://sinhtour.vn/wp-content/uploads/2022/01/nui-ham-rong-sapa-900x674.jpg"
}


const HNActive17: Play = {
    id: 17,
    name: "Chợ SaPa",
    time: "1h30p",
    type: "play",
    image: "https://media.cungphuot.info//2013/11/5001/cho-sapa-moi.jpg"
}

const HNActive18: Play = {
    id: 18,
    name: "Đỉnh núi Fansipan",
    time: "4h",
    type: "play",
    image: "https://cdn.tgdd.vn/Files/2021/11/06/1396193/10-dinh-nui-cao-nhat-viet-nam-danh-cho-ai-thich-kham-pha-nhung-dia-hinh-hiem-tro-202111061657314221.jpg"
}

const HNActive19: Play = {
    id: 19,
    name: "HotPot Center",
    time: "1h30p",
    type: "eat",
    image: "https://didausapa.com/wp-content/uploads/2022/12/hotpot-center-khong-gian-am-ap.jpg"
}

const HNActive20: Play = {
    id: 20,
    name: "Quảng trường SaPa",
    time: "1h",
    type: "play",
    image: "https://didausapa.com/wp-content/uploads/2023/01/quang-truong-sapa-ve-dem.jpg"
}


const HNActive21: Play = {
    id: 21,
    name: "Chợ Đêm SaPa",
    time: "1h",
    type: "play",
    image: "https://sinhtour.vn/wp-content/uploads/2022/06/cho-dem-sapa.jpg"
}


export const HN3: Timeline = {
    id: 3,
    dateNumber: 3,
    place: "Sapa",
    plays: [HNActive15, HNActive16, HNActive17, HNActive18, HNActive19, HNActive20, HNActive21]
}

// Hà Nội Ngày 4

const HNActive22: Play = {
    id: 22,
    name: "Cốn sủi Ông Há",
    time: "5h",
    type: "move",
    image: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/293372584_448578297275186_7960722665810360197_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3_v8USbntaAAX9JfBig&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfCSP0nUi-eI8W28PTNF7aRzHaMVECxGlrzPN6ju7r0G4w&oe=6495AE0B"
}


const HNActive23: Play = {
    id: 23,
    name: "Khu du lịch Vườn vô cực",
    time: "45p",
    type: "play",
    image: "https://hotel84.com/userfiles/image/dulich/sapa/vuonvocuc/be-boi-vuonvocuc.jpg"
}

const HNActive24: Play = {
    id: 24,
    name: "Khu du lịch Vườn Vô Cực",
    time: "4h",
    type: "play",
    image: "https://hotel84.com/userfiles/image/dulich/sapa/vuonvocuc/chup-anh-kieu-nhat-o-sapa.jpg"
}

const HNActive25: Play = {
    id: 25,
    name: "Nhà hàng A Phủ",
    time: "2h",
    type: "eat",
    image: "https://media.mia.vn/uploads/blog-du-lich/nha-hang-a-phu-sapa-noi-hoi-tu-tinh-hoa-am-thuc-tay-bac-3-1622299217.jpg"
}

const HNActive26: Play = {
    id: 26,
    name: "Khách sạn (Valley view Homestay Sapa)",
    time: "8h",
    type: "stay",
    image: "https://naocungdi.com/wp-content/uploads/2019/06/phong-2-giuong-doi-view-nui-tai-valley-view-homestay.jpg.webp"
}

export const HN4: Timeline = {
    id: 4,
    dateNumber: 4,
    place: "Sapa",
    plays: [HNActive22, HNActive23, HNActive24, HNActive25, HNActive26]
}

// Hà Nội Ngày 5

const HNActive27: Play = {
    id: 27,
    name: "Sapa - Hạ Long",
    time: "10h",
    type: "move",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Ha_Long_2019_taken_by_DJI_FC220.jpg"
}

const HNActive28: Play = {
    id: 28,
    name: "NDC MISA Hotel",
    time: "3h",
    type: "stay",
    image: "https://pix8.agoda.net/hotelImages/39627032/0/e2449dc2475bc88b5727c40ee94134e1.jpg?ce=0&s=1024x768"
}


const HNActive29: Play = {
    id: 29,
    name: "Bún Cù Kỳ Hường Béo (Bãi Cháy)",
    time: "1h",
    type: "eat",
    image: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/178158597_207416571187389_7176694992717699273_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=sCJ-zG8J094AX9UbdHx&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfB7xV4acwE8nzZT3ACjtttC6-X-j8yHBISUJ49BRwgfvQ&oe=64B89A1A"
}

const HNActive30: Play = {
    id: 30,
    name: "Bến cảng Tuần Châu",
    time: "1h",
    type: "play",
    image: "https://vanantravel.vn/uploads/cam-nang/ben-tau-tuan-chau-2.jpg"
}

const HNActive31: Play = {
    id: 31,
    name: "Tour  Vịnh Hạ Long",
    time: "8h",
    type: "play",
    image: "https://statics.vinpearl.com/du-lich-vinh-Ha-Long-hinh-anh1_1625911963.jpg"
}

const HNActive32: Play = {
    id: 32,
    name: "Nhà hàng Hồng Hạnh 3",
    time: "1h30",
    type: "eat",
    image: "https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/08_2020/quan-hai-san-o-ha-long-b.jpg"
}

const HNActive33: Play = {
    id: 33,
    name: "Chợ Đêm hạ Long - Phố Đêm",
    time: "2h",
    type: "play",
    image: "https://www.kynghidongduong.vn/userfiles/images/Vietnam/Ha%20long/Sun-World-Ha-Long-Park-kynghidongduong.vn(02).jpg"
}


export const HN5: Timeline = {
    id: 5,
    dateNumber: 5,
    place: "Hạ Long",
    plays: [HNActive27, HNActive28, HNActive29, HNActive30, HNActive31, HNActive32, HNActive33]
}

// Hà Nội Ngày 6

const HNActive34: Play = {
    id: 34,
    name: "Quán chả mực 14+",
    time: "1h",
    type: "eat",
    image: "https://dulichtoday.vn/wp-content/uploads/2022/04/quan-an-gia-re-ha-long.png"
}

const HNActive35: Play = {
    id: 35,
    name: "Bảo Tàng Quảng Ninh",
    time: "1h30",
    type: "play",
    image: "https://images2.thanhnien.vn/Uploaded/langhiahieu/2022_03_29/images1320732-bao-tang-thu-vien-cung-ca-heo-3402.jpg"
}

const HNActive36: Play = {
    id: 36,
    name: "Cà phê Thông Zeo",
    time: "1h30p",
    type: "play",
    image: "https://vnn-imgs-f.vgcloud.vn/2021/11/11/12/quan-ca-phe-trai-phep-moc-tren-khu-doi-thuoc-dat-quoc-phong-o-quang-ninh-18.jpeg"
}

const HNActive37: Play = {
    id: 37,
    name: "Ốc Huyền (39 Hoàng Diệu, Hồng Hải, Thành phố Hạ Long)",
    time: "1h30p",
    type: "eat",
    image: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/108852360_2668769886742329_2921717730893170606_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=d3JH10Ii0G0AX95oFYU&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDGE99IKI3ScETsipFrzeCO85H4xscYXULTFEeCtTOUCQ&oe=64B8C654"
}

const HNActive38: Play = {
    id: 38,
    name: "NDC MISA Hotel",
    time: "2h",
    type: "stay",
    image: "https://hotel84.com/userfiles/image/hotel/halong/NDCMisaHotel/khach-san-NDC-Misa-halong.jpg"
}

export const HN6: Timeline = {
    id: 6,
    dateNumber: 6,
    place: "Hạ Long - Hồ Chí Minh",
    plays: [HNActive34, HNActive35, HNActive36, HNActive37, HNActive38]
}

export const TimelineHN: Timeline[] = [HN1, HN2, HN3, HN4, HN5, HN6]