import React from "react"
import { MdLocationOn, MdCropLandscape, MdRoomService } from "react-icons/md"
import { BsHouseDoor, BsFillCameraVideoFill } from "react-icons/bs"
import { FaPlusCircle } from "react-icons/fa"
import { RiServiceLine } from "react-icons/ri"
import Image from "./image"
import Slider from "react-slick"

const CoSoImage = () => {
  const images = [1, 2, 3, 4, 5, 6]
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    accessibility: true,
    fade: true,
    cssEase: "linear",
  }
  return (
    <Slider {...settings}>
      {images.map((item, i) => {
        return (
          <div key={item}>
            <Image filename={`coso${i + 1}.jpg`}></Image>
          </div>
        )
      })}
    </Slider>
  )
}

function CoSo() {
  return (
    <div className="frow-container">
      <div className="frow">
        <div className="col-lg-1-2 col-md-1-2 my-15">
          <div className="frow-container">
            <CoSoImage></CoSoImage>
          </div>
        </div>
        <div className="col-lg-1-2 col-md-1-2">
          <div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "top", margin: "1rem 0" }}
            >
              <div>
                <MdLocationOn
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></MdLocationOn>
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong className="title-item">Khu Vực</strong>: Gồm 2 cơ sở
                thuộc khu dân cư đường Chu Văn An, Quận Bình Thạnh, Tp Hồ Chí
                Minh
              </div>
            </div>
            {/*  */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
              }}
            >
              <div>
                <MdCropLandscape
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></MdCropLandscape>
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong className="title-item">Diện Tích</strong>: {">"} 100m
                <sup>2</sup>
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "top", margin: "1rem 0" }}
            >
              <div>
                <BsHouseDoor
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></BsHouseDoor>
              </div>
              <div style={{ fontSize: "18px", paddingTop: "8px" }}>
                <strong className="title-item">Hệ thống phòng học</strong>:
                <ul>
                  <li>
                    Mỗi phòng học rộng trung bình 50m
                    <sup>2</sup>
                  </li>
                  <li>
                    Đầy đủ các trang thiết bị và đồ dùng giảng dạy, tủ đựng
                    giày, tủ đựng chăn gối, quần áo, ...
                  </li>
                  <li>
                    Tất cả các phòng học đều được bố trí, lắp đặt để lấy ánh
                    sáng, ánh nắng tự nhiên.
                  </li>
                  <li>
                    Tất cả các phòng học đều được trang bị máy điều hòa giúp cho
                    không gian phòng học mát mẻ và trong lành.
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "top", margin: "1rem 0" }}
            >
              <div>
                <MdRoomService
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></MdRoomService>
              </div>
              <div style={{ fontSize: "18px", paddingTop: "8px" }}>
                <strong className="title-item">Khu vực nhà bếp</strong>:
                <ul>
                  <li>
                    Đầy đủ các trang thiết bị, đồ dùng inox và đảm bảo vệ sinh
                  </li>
                  <li>Nước uống hàng ngày là nước đun sôi để nguội.</li>
                  <li>
                    Tất cả quy trình và thao tác chế biến thức ăn cho trẻ đều
                    đảm bảo vệ sinh và được giám sát bởi hệ thống camera.
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "top", margin: "1rem 0" }}
            >
              <div>
                <FaPlusCircle
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></FaPlusCircle>
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong className="title-item">Phòng y tế</strong>: trang bị đầy
                đủ đồ dùng, thiết bị y tế, có nhân viên y tế túc trực để chăm
                sóc sức khỏe và kịp thời xử lý các tình huống sơ cấp cứu.
              </div>
            </div>
            {/*  */}
            <div
              style={{ display: "flex", alignItems: "top", margin: "1rem 0" }}
            >
              <div>
                <BsFillCameraVideoFill
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></BsFillCameraVideoFill>
              </div>
              <div style={{ fontSize: "18px" }}>
                <strong className="title-item">Hệ thống camera online</strong>:
                Được trang bị trong từng phòng học và khu vực chức năng giúp quý
                phụ huynh có thể quan sát mọi hoạt động của bé.
              </div>
            </div>
            {/*  */}
            <div style={{ display: "flex", margin: "1rem 0" }}>
              <div>
                <RiServiceLine
                  style={{
                    border: "1px black solid",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                  size={32}
                ></RiServiceLine>
              </div>
              <div style={{ fontSize: "18px", paddingTop: "8px" }}>
                <strong className="title-item">Dịch vụ</strong>:
                <ul>
                  <li>Trông thứ 7</li>
                  <li>Đón muộn.</li>
                </ul>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoSo
