import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contact">
                <div className="contact-email">
                    <h1 className="contact-heading">Subscribe Newsletter</h1>
                    <p className="contact-title">The Travel</p>
                    <p className="contact-desc">
                        Get inspired! Receive travel discounts, tips and behind the scenes stories.
                    </p>
                    <div className="mail-input">
                        <input type="text" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <img src="./assets/mailbox.png" alt="" className="contact-img" />
            </div>
            <div className="footer-info">
                <div className="item-footer">
                    <img src="./assets/logo.png" alt="" />
                </div>
                <div className="item-footer">
                    <div className="head-title">Our Destinations</div>
                    <div className="desc-title">VietNam</div>
                    <div className="desc-title">Japan</div>
                    <div className="desc-title">France</div>
                    <div className="desc-title">Iceland</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Our Activities</div>
                    <div className="desc-title">Mountain climbing</div>
                    <div className="desc-title">Cruising & sailing</div>
                    <div className="desc-title">Multi-activities</div>
                    <div className="desc-title">Kayaing</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Travel Blogs</div>
                    <div className="desc-title">Nha Trang Travel Guide</div>
                    <div className="desc-title">Sri Lanks Travel Guide</div>
                    <div className="desc-title">Peru Travel Guide</div>
                    <div className="desc-title">Tokyo Travel Guide</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">About Us</div>
                    <div className="desc-title">Our Story</div>
                    <div className="desc-title">Work with us</div>
                </div>
                <div className="item-footer">
                    <div className="head-title">Contact Us</div>
                    <div className="desc-title">Our Story</div>
                    <div className="desc-title">Work with us</div>
                </div>
            </div>
            <div className="copy-right">Copyright © 2023 Tripwise</div>
        </div>
    )
}

export default Footer