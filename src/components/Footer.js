import React from "react"

import styled from "styled-components"

import { AiOutlineClockCircle, AiFillFacebook } from "react-icons/ai"
import { MdLocationOn, MdSmartphone } from "react-icons/md"
import { FiPhone } from "react-icons/fi"
import TitleText from "./TitleText"
import MyGoogleMapComp from "./MyGoogleMap"
const FooterWrapper = styled.div`
  a {
    text-decoration: none;
    color: orange;
  }
  .coso-title {
    text-align: center;
    font-size: 2rem;
    color: #cf0a2c;
    padding-top: 1rem;
    text-transform: capitalize;
    font-family: "Raleway", sans-serif;
    vertical-align: baseline;
    font-weight: 400;
  }
  .coso-text {
    font-size: 1.25rem;
    color: white;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    vertical-align: baseline;
  }
`

function Footer() {
  return (
    <footer style={{ backgroundColor: "#333333" }}>
      <div className="frow-container">
        <FooterWrapper>
          <TitleText color="white" text="Mầm Non Mickey"></TitleText>
          <div className="frow">
            <div className="col-lg-1-2 col-md-1-2">
              <div className="coso">
                <h3 className="coso-title">Nhóm trẻ Mickey</h3>
                <div className="coso-text">
                  <div style={{ padding: "8px" }}>
                    <MyGoogleMapComp
                      dataLocation={{ lat: 10.811159, lng: 106.705376 }}
                      name="Nhóm trẻ Mickey"
                      address="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố Hồ Chí Minh"
                    ></MyGoogleMapComp>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <AiOutlineClockCircle></AiOutlineClockCircle>
                    Thời gian học: 6:00 sáng - 4:30 chiều
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <MdLocationOn size={32}></MdLocationOn>
                    <div>
                      Địa chỉ:{" "}
                      <a
                        href="https://www.google.com/maps/place/Nh%C3%B3m+tr%E1%BA%BB+Mickey/@10.8112253,106.7026443,17z/data=!3m1!4b1!4m5!3m4!1s0x317528962ae22f6d:0x6782931f5154849e!8m2!3d10.81122!4d106.704833"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh"
                      >
                        250A Chu Văn An, phường 26, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <FiPhone></FiPhone>
                    <div>
                      Số điện thoại:{" "}
                      <a
                        href="tel:+842835110146"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0283 511 0146
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <MdSmartphone></MdSmartphone>
                    <div>
                      Điện thoại Di động:{" "}
                      <a
                        href="tel:+84989999612"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0989 999 612
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <AiFillFacebook></AiFillFacebook>
                    <div>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/M%E1%BA%A7m-non-mickey-1617080488559879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        Mầm non Mickey
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1-2 col-md-1-2">
              <div className="coso">
                <h3 className="coso-title">Lớp Mẫu Giáo Mickey 2</h3>
                <div className="coso-text">
                  <div style={{ padding: "8px" }}>
                    <MyGoogleMapComp
                      dataLocation={{ lat: 10.810394, lng: 106.704275 }}
                      name="Lớp Mẫu Giáo Mickey 2"
                      address="243/24 Chu Văn An, phường 12, Quận Bình Thạnh,
                  Thành phố Hồ Chí Minh."
                    ></MyGoogleMapComp>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <AiOutlineClockCircle></AiOutlineClockCircle>
                    Thời gian học: 6:00 sáng - 4:30 chiều
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <MdLocationOn size={32}></MdLocationOn>
                    <div>
                      Địa chỉ:{" "}
                      <a
                        href="https://www.google.com/maps/place/Nh%C3%B3m+tr%E1%BA%BB+Mickey/@10.8112253,106.7026443,17z/data=!3m1!4b1!4m5!3m4!1s0x317528962ae22f6d:0x6782931f5154849e!8m2!3d10.81122!4d106.704833"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="243/24 Chu Văn An, phường 12, Quận Bình Thạnh, Thành phố Hồ Chí Minh."
                      >
                        243/24 Chu Văn An, phường 12, Quận Bình Thạnh, Thành phố
                        Hồ Chí Minh.
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <FiPhone></FiPhone>
                    <div>
                      Điện thoại bàn:{" "}
                      <a
                        href="tel:+842835160189"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0283 516 0189
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <MdSmartphone></MdSmartphone>
                    <div>
                      Điện thoại Di động:{" "}
                      <a
                        href="tel:+84989999612"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Call Now"
                      >
                        0989 999 612
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "1rem 0",
                    }}
                  >
                    <AiFillFacebook></AiFillFacebook>
                    <div>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/M%E1%BA%A7m-non-mickey-1617080488559879/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        Mầm non Mickey
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FooterWrapper>
        <div style={{ color: "white", padding: "1em" }}>- @2020 -</div>
      </div>
    </footer>
  )
}

export default Footer
