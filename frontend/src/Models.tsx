const HCMToHN: Play = {
    id: 1,
    type: "move",
    time: "2 hr 5 min",
    image: "./assets/move.png",
    name: "Ho Chi Minh City to Hanoi"
}

const PrimaHotel: Play = {
    id: 2,
    type: "stay",
    time: "1 hr",
    image: "./assets/stay.png",
    name: "Stelward Prima Hotel - Former Golden Legend"
}
const Lunch: Play = {
    id: 3,
    type: "eat",
    time: "",
    image: "",
    name: "Lunch time"
}
const Museum: Play = {
    id: 4,
    type: "play",
    time: "2 hr",
    image: "./assets/play-img.jpg",
    name: "Vietnamese Women's Museum"
}

export interface Play {
    id: number;
    type: string;
    time: string;
    image: string;
    name: string;
}

export interface Timeline {
    id: number;
    dateNumber: number;
    plays: Play[]
}

export const Day1HCMHN: Timeline = {
    id: 1,
    dateNumber: 1,
    plays: [HCMToHN, PrimaHotel, Lunch, Museum]
}

export interface Place {
    id: number;
    name: string;
    things: number;
    image: string;
}

export const Place1: Place = {
    id: 1,
    name: "Nha Trang",
    things: 87,
    image: "./assets/nhatrang.jpg"
}

export const Place2: Place = {
    id: 2,
    name: "Đà Nẵng",
    things: 140,
    image: "./assets/nhatrang.jpg"
}
export const Place3: Place = {
    id: 3,
    name: "Hà Nội",
    things: 438,
    image: "./assets/nhatrang.jpg"
}

export const places = [Place1 , Place2, Place3]

export interface Account {
    id: number;
    username: string;
    name: string;
    premium: boolean;
    password: string; 
    image: string;
}

const account1: Account = {
    id: 1,
    username: "long123",
    name: "Long Nhật",
    premium: true,
    password: "123",
    image: "",
}

const account2: Account = {
    id: 2,
    username: "normal123",
    name: "Normal User",
    premium: false,
    password: "123",
    image: ""
}

export const accounts: Account[] = [account1, account2]