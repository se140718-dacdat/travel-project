import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="contact-email">
                    <h1 className="contact-heading">Theo Dõi<br/> Bản Tin</h1>
                    <p className="contact-title">Du Lịch</p>
                    <p className="contact-desc">
                        Truyền cảm hứng! Nhận giảm giá du lịch, lời khuyên và những câu chuyện đằng sau.
                    </p>
                    <div className="mail-input">
                        <input type="text" placeholder="Email của bạn" />
                        <button>Theo dõi</button>
                    </div>
                </div>
                <img src="./assets/mailbox.png" alt="" className="contact-img" />
            </div>
            <div className="footer-info">
                <div className="item-footer">
                    <img src="./assets/logo.png" alt="" />
                </div>
                <div className="item-footer">
                    <div className="head-title">Điểm Đến</div>
                    <div className="desc-title">Việt Nam</div>
                    <div className="desc-title">Nhật Bản</div>
                    <div className="desc-title">Pháp</div>
                    <div className="desc-title">Iceland</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Hoạt Động</div>
                    <div className="desc-title">Leo Núi</div>
                    <div className="desc-title">Du Thuyền & Chèo Thuyền</div>
                    <div className="desc-title">Các Hoạt Động Khác</div>
                    <div className="desc-title">Chèo Thuyền Kayak</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Blogs Du Lịch</div>
                    <div className="desc-title">Nha Trang Travel Guide</div>
                    <div className="desc-title">Sri Lanks Travel Guide</div>
                    <div className="desc-title">Peru Travel Guide</div>
                    <div className="desc-title">Tokyo Travel Guide</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Về Chúng Tôi</div>
                    <div className="desc-title">Câu Chuyện Của Chúng Tôi</div>
                    <div className="desc-title">Hợp Tác Với Chúng Tôi</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Liên Hệ</div>
                    <div className="desc-title">+0123456789</div>
                    <div className="desc-title">tripwise@gmail.com</div>
                </div>
            </div>
            <div className="copy-right">Copyright © 2023 Tripwise</div>
        </div>
    )
}

export default Footer