/* eslint-disable */
import React, { useState } from "react"
import styled from "styled-components"

import Slider from "react-slick"

const MamNonImage = () => {
  const images = [
    "https://image.freepik.com/free-photo/happy-asian-funny-cute-little-child-boy-from-kindergarten-student-uniform-with-school-bag-hugging-books-smile-green-school-blackboard_143683-213.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXbm6ftVeFwelJAWLASTk9Z8ethz2Qivx1SQ&usqp=CAU",
    "https://image.freepik.com/free-photo/large-group-happy-asian-smiling-kindergarten-kids-friends-holding-hands-playing-jumping-together-during-sunny-day-casual-clothes-city-park_73503-1912.jpg",
  ]
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
      {images.map(item => {
        return (
          <div style={{ width: "100%", height: "100%" }} key={item}>
            <img
              src={item}
              alt={item}
              style={{
                maxWidth: "100%",
                height: "345px",
                display: "block",
                objectFit: "cover",
              }}
            ></img>
          </div>
        )
      })}
    </Slider>
  )
}
const NhaTreImage = () => {
  const images = [
    "https://img.freepik.com/free-photo/little-asian-preschool-girl-making-english-word-by-her-alphabet-toy-white-background_34054-291.jpg?size=626&ext=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRizBB9yJneN1INmXvznpVpthROd77iCRplWA&usqp=CAU",
    "https://image.freepik.com/free-photo/asian-little-child-boy-kindergarten-wear-face-mask-protective-school-bag-pointing-side-away_143683-235.jpg",
  ]
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
      {images.map(item => {
        return (
          <div key={item}>
            <img
              src={item}
              alt={item}
              style={{
                maxWidth: "100%",
                height: "345px",
                display: "block",
                objectFit: "cover",
              }}
            ></img>
          </div>
        )
      })}
    </Slider>
  )
}

const MamNonComponent = () => {
  const [select, setSelected] = useState(1)
  return (
    <div className="frow-container frow">
      <div className="col-lg-1-2 col-md-1-2">
        <h3>Khối Mầm Non từ 3 đến 6 tuổi</h3>
        <p>
          Theo Thông tư số: 17/2009/TT-BGDĐT ngày 25 tháng 7 năm 2009 của Bộ
          trưởng Bộ Giáo dục và Đào tạo thì Nội dung chương trình giáo dục trẻ
          mầm non bao gồm 5 lĩnh vực sau:
        </p>
        <div>
          <div>
            <div
              role="button"
              onClick={() => {
                if (select === 1) setSelected(null)
                else setSelected(1)
              }}
            >
              <h3 className="title-item">Giáo dục phát triển thể chất:</h3>
            </div>

            <ol
              className={`item-content ${
                select === 1 ? "showitem" : "hideitem"
              }`}
            >
              <li>
                Phát triển vận động:
                <ul>
                  <li>Các động tác phát triển các nhóm cơ và hô hấp.</li>
                  <li>
                    Các kĩ năng vận động cơ bản và phát triển các tố chất trong
                    vận động.
                  </li>
                  <li>
                    Các cử động bàn tay, ngón tay và sử dụng một số đồ dùng,
                    dụng cụ.
                  </li>
                </ul>
              </li>
              <li>
                Giáo dục dinh dưỡng và sức khoẻ
                <ul>
                  <li>
                    Nhận biết một số món ăn, thực phẩm thông thư­ờng và ích lợi
                    của chúng đối với sức khỏe.
                  </li>
                  <li>Tập làm một số việc tự phục vụ trong sinh hoạt.</li>
                  <li>Giữ gìn sức khoẻ và an toàn.</li>
                </ul>
              </li>
            </ol>
          </div>
          {/* 2 */}
          <div>
            <div
              role="button"
              onClick={() => {
                if (select === 2) setSelected(null)
                else setSelected(2)
              }}
            >
              <h3 className="title-item">Giáo dục phát triển nhận thức:</h3>
            </div>

            <ol
              className={`item-content ${
                select === 2 ? "showitem" : "hideitem"
              }`}
            >
              <li>
                Khám phá khoa học:
                <ul>
                  <li>Các bộ phận của cơ thể con người.</li>
                  <li>Đồ vật, động vật và thực vật.</li>
                  <li>Một số hiện tượng tự nhiên.</li>
                </ul>
              </li>
              <li>
                Làm quen với một số khái niệm sơ đẳng về toán:
                <ul>
                  <li>Tập hợp, số lượng, số thứ tự và đếm.</li>
                  <li>So sánh, sắp xếp theo qui tắc.</li>
                  <li>Định hướng trong không gian và định hướng thời gian.</li>
                </ul>
              </li>
              <li>
                Khám phá xã hội:
                <ul>
                  <li>Bản thân, gia đình, họ hàng và cộng đồng.</li>
                  <li>Trường mầm non.</li>
                  <li>
                    Một số nghề phổ biến, Danh lam, thắng cảnh và các ngày lễ,
                    hội.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          {/* 3 */}
          <div>
            <div
              role="button"
              onClick={() => {
                if (select === 3) setSelected(null)
                else setSelected(3)
              }}
            >
              <h3 className="title-item">Giáo dục phát triển ngôn ngữ:</h3>
            </div>

            <ol
              className={`item-content ${
                select === 3 ? "showitem" : "hideitem"
              }`}
            >
              <li>
                Nghe:
                <ul>
                  <li>Nghe lời nói trong giao tiếp hằng ngày.</li>
                  <li>
                    Nghe kể chuyện, đọc thơ, ca dao, đồng dao phù hợp với độ
                    tuổi.
                  </li>
                  <li>
                    Nghe các từ chỉ người, sự vật, hiện tượng, đặc điểm, tính
                    chất, hoạt động và các từ biểu cảm, từ khái quát.
                  </li>
                </ul>
              </li>
              <li>
                Nói:
                <ul>
                  <li>Phát âm rõ các tiếng trong tiếng Việt.</li>
                  <li>
                    Sử dụng đúng từ ngữ và câu trong giao tiếp hằng ngày. Trả
                    lời và đặt câu hỏi.
                  </li>
                  <li>Đọc thơ, ca dao, đồng dao và kể chuyện.</li>
                  <li>Lễ phép, chủ động và tự tin trong giao tiếp.</li>
                </ul>
              </li>
              <li>
                Làm quen với việc đọc, viết:
                <ul>
                  <li>Làm quen với cách sử dụng sách, bút..</li>
                  <li>
                    Làm quen với một số kí hiệu thông thường trong cuộc sống.
                  </li>
                  <li>Làm quen với chữ viết, với việc đọc sách.</li>
                </ul>
              </li>
            </ol>
          </div>
          {/* 4 */}
          <div>
            <div
              role="button"
              onClick={() => {
                if (select === 4) setSelected(null)
                else setSelected(4)
              }}
            >
              <h3 className="title-item">
                Giáo dục phát triển tình cảm và kỹ năng xã hội:
              </h3>
            </div>

            <ol
              className={`item-content ${
                select === 4 ? "showitem" : "hideitem"
              }`}
            >
              <li>
                Phát triển tình cảm :
                <ul>
                  <li>Ý thức về bản thân.</li>
                  <li>
                    Nhận biết và thể hiện cảm xúc, tình cảm với con người, sự
                    vật và hiện tư­ợng xung quanh.
                  </li>
                </ul>
              </li>
              <li>
                Phát triển kỹ năng xã hội:
                <ul>
                  <li>
                    Hành vi và quy tắc ứng xử xã hội trong sinh hoạt ở gia đình,
                    trường lớp mầm non, cộng đồng gần gũi.
                  </li>
                  <li>Quan tâm bảo vệ môi trường.</li>
                </ul>
              </li>
            </ol>
          </div>
          {/* 5 */}
          <div>
            <div
              role="button"
              onClick={() => {
                if (select === 5) setSelected(null)
                else setSelected(5)
              }}
            >
              <h3 className="title-item">Giáo dục phát triển thẩm mỹ:</h3>
            </div>

            <ol
              className={`item-content ${
                select === 5 ? "showitem" : "hideitem"
              }`}
            >
              <li>
                Cảm nhận và thể hiện cảm xúc trước vẻ đẹp của thiên nhiên, cuộc
                sống gần gũi xung quanh trẻ và trong các tác phẩm nghệ thuật.
              </li>
              <li>
                Một số kĩ năng trong hoạt động âm nhạc (nghe, hát, vận động theo
                nhạc) và hoạt động tạo hình (vẽ, nặn, cắt, xé dán, xếp hình).
              </li>
              <li>
                Thể hiện sự sáng tạo khi tham gia các hoạt động nghệ thuật (âm
                nhạc, tạo hình).
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="col-lg-1-2 col-md-1-2">
        <MamNonImage></MamNonImage>
      </div>
    </div>
  )
}
const NhaTreComponent = () => {
  const [select, setSelected] = useState(1)
  return (
    <div className="frow-container frow">
      <div className="col-lg-1-2 col-md-1-2">
        <div>
          <h3>Khối Nhà Trẻ từ 1 đến 3 tuổi</h3>
          <p>
            Theo Thông tư số: 17/2009/TT-BGDĐT ngày 25 tháng 7 năm 2009 của Bộ
            trưởng Bộ Giáo dục và Đào tạo thì Nội dung chương trình giáo dục trẻ
            nhà trẻ bao gồm 4 lĩnh vực:
          </p>
          <div>
            <div>
              <div
                onClick={() => {
                  if (select === 1) setSelected(null)
                  else setSelected(1)
                }}
              >
                <h3 className="title-item">Giáo dục phát triển thể chất:</h3>
              </div>
              <ol
                className={`item-content ${
                  select === 1 ? "showitem" : "hideitem"
                }`}
              >
                <li>
                  Phát triển vận động:
                  <ul>
                    <li>Các động tác phát triển các nhóm cơ và hô hấp.</li>
                    <li>
                      Các vận động cơ bản và phát triển tố chất vận động ban
                      đầu.
                    </li>
                    <li>Các cử động bàn tay, ngón tay.</li>
                  </ul>
                </li>
                <li>
                  Giáo dục dinh dưỡng và sức khoẻ
                  <ul>
                    <li>Nề nếp, thói quen tốt trong sinh hoạt.</li>
                    <li>
                      Làm quen với một số việc tự phục vụ, giữ gìn sức khoẻ.
                    </li>
                    <li>Nhận biết và tránh một số nguy cơ không an toàn.</li>
                  </ul>
                </li>
              </ol>
            </div>
            {/* 2 */}
            <div>
              <div
                onClick={() => {
                  if (select === 2) setSelected(null)
                  else setSelected(2)
                }}
              >
                <h3 className="title-item">Giáo dục phát triển nhận thức:</h3>
              </div>

              <ol
                className={`item-content ${
                  select === 2 ? "showitem" : "hideitem"
                }`}
              >
                <li>
                  Luyện tập và phối hợp các giác quan:
                  <ul>
                    <li>Thị giác, thính giác, xúc giác, khứu giác, vị giác.</li>
                  </ul>
                </li>
                <li>
                  Nhận biết:
                  <ul>
                    <li>Một số bộ phận cơ thể của con người.</li>
                    <li>
                      Một số đồ dùng, đồ chơi, phương tiện giao thông quen thuộc
                      với trẻ.
                    </li>
                    <li>Một số con vật, hoa, quả quen thuộc với trẻ.</li>
                    <li>
                      Một số màu cơ bản , kích thước , hình dạng, số lượng và vị
                      trí trong không gian so với bản thân trẻ.
                    </li>
                    <li>Bản thân và những người gần gũi.</li>
                  </ul>
                </li>
              </ol>
            </div>
            {/* 3 */}
            <div>
              <div
                onClick={() => {
                  if (select === 3) setSelected(null)
                  else setSelected(3)
                }}
              >
                <h3 className="title-item">Giáo dục phát triển ngôn ngữ:</h3>
              </div>

              <ol
                className={`item-content ${
                  select === 3 ? "showitem" : "hideitem"
                }`}
              >
                <li>
                  Nghe:
                  <ul>
                    <li>Nghe các giọng nói khác nhau.</li>
                    <li>
                      Nghe, hiểu các từ và câu chỉ đồ vật, sự vật, hành động
                      quen thuộc và một số loại câu hỏi đơn giản.
                    </li>
                    <li>
                      Nghe kể chuyện, đọc thơ, ca dao, đồng dao có nội dung phù
                      hợp với độ tuổi.
                    </li>
                  </ul>
                </li>
                <li>
                  Nói:
                  <ul>
                    <li>Phát âm các âm khác nhau.</li>
                    <li>Trả lời và đặt một số câu hỏi đơn giản.</li>
                    <li>
                      Thể hiện nhu cầu, cảm xúc, hiểu biết của bản thân bằng lời
                      nói.
                    </li>
                  </ul>
                </li>
                <li>
                  Làm quen với sách:
                  <ul>
                    <li>
                      Mở sách, xem và gọi tên sự vật, hành động của các nhân vật
                      trong tranh.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
            {/* 4 */}
            <div>
              <div
                onClick={() => {
                  if (select === 4) setSelected(null)
                  else setSelected(4)
                }}
              >
                <h3 className="title-item">
                  Giáo dục phát triển tình cảm, kỹ năng xã hội và thẩm mỹ:
                </h3>
              </div>

              <ol
                className={`item-content ${
                  select === 4 ? "showitem" : "hideitem"
                }`}
              >
                <li>
                  Phát triển tình cảm :
                  <ul>
                    <li>Ý thức về bản thân.</li>
                    <li>Nhận biết và thể hiện cảm xúc (vui, buồn, ...).</li>
                  </ul>
                </li>
                <li>
                  Phát triển kỹ năng xã hội:
                  <ul>
                    <li>
                      Mối quan hệ tích cực với con người và sự vật gần gũi.
                    </li>
                    <li>
                      Hành vi văn hoá và thực hiện các quy định đơn giản trong
                      giao tiếp, sinh hoạt.
                    </li>
                  </ul>
                </li>
                <li>
                  Phát triển cảm xúc thẫm mỹ:
                  <ul>
                    <li>Nghe hát, hát và vận động đơn giản theo nhạc.</li>
                    <li>Vẽ nặn, xé dán, xếp hình, xem tranh.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-1-2 col-md-1-2">
        <NhaTreImage></NhaTreImage>
      </div>
    </div>
  )
}
const LuaChonWrapper = styled.div`
  display: flex;
  div {
    padding: 1rem 1rem 1.5rem 0.5rem;
    font-size: 1.25rem;
    text-align: center;
    margin: 0.5rem;
    text-transform: uppercase;
    vertical-align: baseline;
    color: black;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      50% 90%,
      50% 100%,
      50% 90%,
      0% 75%
    );
    :hover {
      cursor: pointer;
    }
  }
`

function ChuongTrinhHoc() {
  const [isSelect, setSelect] = useState("nt")
  return (
    <div>
      <LuaChonWrapper isSelect={isSelect}>
        <div
          style={
            isSelect === "nt"
              ? { backgroundColor: "#FFB321", color: "white" }
              : null
          }
          onClick={() => {
            setSelect("nt")
          }}
        >
          khối Nhà Trẻ
        </div>
        <div
          style={
            isSelect === "mn"
              ? { backgroundColor: "#FFB321", color: "white" }
              : null
          }
          onClick={() => {
            setSelect("mn")
          }}
        >
          Khối Mầm Non
        </div>
      </LuaChonWrapper>
      {isSelect === "nt" ? (
        <NhaTreComponent></NhaTreComponent>
      ) : (
        <MamNonComponent></MamNonComponent>
      )}
    </div>
  )
}

export default ChuongTrinhHoc
