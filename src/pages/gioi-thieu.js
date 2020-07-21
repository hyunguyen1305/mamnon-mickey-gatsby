import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoSo from "../components/CoSo"
import ChuongTrinhHoc from "../components/ChuongTrinhHoc"
import styled from "styled-components"
import Image from "../components/image"
import TitleText from "../components/TitleText"

const GioiThieuWrapper = styled.div`
  font-size: 1.25rem;
  h1 {
    font-size: 1.25rem;
    margin: 0;
    padding: 0;
  }
`

const GioiThieuPage = () => (
  <Layout>
    <SEO title="Trang Giới Thiệu" />
    <section className="frow-container">
      <TitleText text="Tổng Quan" display="inline-block"></TitleText>
      <div style={{ margin: "1rem 0" }}>
        <Image
          filename="ban-giam-hieu.jpg"
          alt="Ban giám hiệu"
          title="Ban giám hiệu"
          style={{ height: "100px" }}
        ></Image>
      </div>
      <GioiThieuWrapper>
        <div>
          <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
            Trường mầm non Mickey - Quận Bình Thạch
          </h1>{" "}
          được thành lập từ 2016 với các thành viên có nhiều kinh nghiệm và tâm
          huyết trong giáo dục mầm non. Mầm non Mickey nằm trong khu vực dân cư
          văn minh, an toàn và tiện lợi giao thông. Với mục tiêu cân bằng hoạt
          động thể chất và học tập cho trẻ.
        </div>
        <br></br>
        <div>
          <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
            Trường mầm non Mickey
          </h1>{" "}
          là trường mầm non chất lượng cao dành cho trẻ từ 18 tháng đến 5+ tuổi.
          Nhà trường áp dụng chương trình giảng dạy theo chương trình chuẩn của
          Bộ GD & ĐT, với phương pháp giáo dục “Lấy trẻ làm trung tâm”, tự hào
          là trường mầm non chất lượng cao, giúp các thiên thần nhỏ có một nền
          tảng vững chắc về thể chất và trí tuệ trong những năm đầu đời.
        </div>
        <br></br>
        <div>
          Đến với{" "}
          <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
            Trường mầm non Mickey
          </h1>
          , các bé sẽ sinh hoạt và học tập trong hệ thống cơ sở vật chất chất
          lượng cao với khuôn viên rộng rãi, an toàn và các phòng chức năng hiện
          đại, Lớp học tràn đầy ánh sáng hai mặt thoáng và được trang trí đẹp
          mắt, Hệ thống điều hòa hai chiều giúp trẻ mát mẻ vào mùa hè và ấm áp
          vào mùa đông.
        </div>
        <br></br>
        <div>
          Đội ngũ giáo viên và quản lý giáo dục có kỹ năng và chuyên môn sâu,
          yêu nghề, mến trẻ, có tinh thần nhiệt huyết và tận tâm. 100% giáo viên
          có trình độ chuẩn, trên chuẩn, tốt nghiệp tại các trường Sư phạm Mẫu
          giáo
        </div>
        <br></br>
        <div>
          {" "}
          <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
            Trường mầm non Mickey
          </h1>{" "}
          luôn quan tâm đến chế độ dinh dưỡng cho các bé, luôn đảm bảo thực đơn
          cung cấp đầy đủ chất dinh dưỡng đạt tiêu chuẩn của Viện dinh dưỡng
          quốc gia Việt Nam dành cho trẻ. Thực đơn đảm bảo đầy đủ các dưỡng chất
          cho trẻ, được thay đổi hàng tuần
        </div>
        {/* Tổng quan */}
        <TitleText text="Thông Tin Chi tiết" display="inline-block"></TitleText>
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orangered",
            }}
          >
            Đội ngũ lãnh đạo
          </h2>
          <li>
            Ban giám hiệu nhà trường gồm các chuyên gia hàng đầu trong lĩnh vực
            giáo dục mầm non.
          </li>
        </div>
        <br></br>
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orangered",
            }}
          >
            Đội ngũ giáo viên
          </h2>
          <li>
            Đội ngũ giáo viên và quản lý giáo dục có kỹ năng và chuyên môn sâu,
            giàu kinh nghiệm, yêu nghề, mến trẻ, có tinh thần nhiệt huyết và tận
            tâm
          </li>
          <li>
            100% giáo viên có trình độ chuẩn, trên chuẩn, tốt nghiệp tại các
            trường Sư phạm Mẫu giáo, có chuyên môn vững vàng, có năng khiếu thu
            hút trẻ, có khả năng cập nhật sự tiến bộ của công nghệ
          </li>
        </div>
        <br></br>
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orangered",
            }}
          >
            Phương pháp giáo dục
          </h2>
          <li>
            {" "}
            <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
              Trường mầm non Mickey
            </h1>{" "}
            luôn tạo cơ hội cho các con phát triển toàn diện trên mọi lĩnh vực
            và khơi dậy tài năng tiềm ẩn. Nhà trường áp dụng chương trình giảng
            dạy được tích hợp khoa học giữa chương trình chuẩn của Bộ GD & ĐT.
          </li>
          <li>
            {" "}
            <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
              Trường mầm non Mickey
            </h1>{" "}
            hiểu rằng: trong giai đoạn từ 18- 36 tháng tuổi chính là thời gian
            ươm mầm kinh nghiệm học tập, trẻ em được khuyến khích tham gia tích
            cực vào các hoạt động nhóm do đó làm phong phú thêm kinh nghiệm học
            tập của mình. Từ độ tuổi mẫu giáo (36- 72 tháng tuổi) trở đi là thời
            gian để hoàn thiện và tiếp thu kiến thức thông qua thực hành và chơi
            cấu trúc, chuẩn bị cho việc học chính thức – hành trang cho con bước
            vào lớp 1.
          </li>
          <br></br>
          <div>
            <ChuongTrinhHoc></ChuongTrinhHoc>
          </div>
        </div>
        <br></br>
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orangered",
            }}
          >
            Chế độ dinh dưỡng
          </h2>
          <li>
            Các bữa ăn của trẻ tại{" "}
            <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
              Trường mầm non Mickey
            </h1>{" "}
            được thiết kế đầy đủ dinh dưỡng được tính ca-lo theo chuẩn phát
            triển của trẻ.
          </li>
          <li>
            Thực đơn tại nhà trường luôn đảm bảo đầy đủ các dưỡng chất cho trẻ,
            được thay đổi hàng tuần
          </li>
          <li>
            {" "}
            <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
              Trường mầm non Mickey
            </h1>{" "}
            cam kết bảo đảm an toàn thực phẩm, được kiểm tra thường xuyên, định
            kỳ, nguồn gốc rõ ràng, ưu tiên các thực phẩm chất lượng cao.
          </li>
        </div>
        <br></br>
        <div>
          <h2
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              color: "orangered",
            }}
          >
            Cơ sở vật chất
          </h2>
          <li>
            {" "}
            <h1 style={{ display: "inline-block", fontWeight: "bold" }}>
              Trường mầm non Mickey
            </h1>{" "}
            được đầu tư xây dựng cơ sở vật chất theo định hướng chất lượng cao,
            tiện nghi, phù hợp với xu thế phát triển chung của giáo dục hiện
            đại.
          </li>
          <li>
            Lớp học tràn đầy ánh sáng hai mặt thoáng và được trang trí đẹp mắt.
            Hệ thống điều hòa hai chiều giúp trẻ mát mẻ vào mùa hè và ấm áp vào
            mùa đông.
          </li>
          <div>
            <CoSo></CoSo>
          </div>
        </div>
        <br></br>
      </GioiThieuWrapper>
    </section>
  </Layout>
)

export default GioiThieuPage
