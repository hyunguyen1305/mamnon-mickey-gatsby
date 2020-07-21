/* eslint-disable */
import Img from "gatsby-image"
import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function ThuVienAnh({ data }) {
  let listFluid = []
  const imgLinks = data.map(item => `http:${item.file.url}`)
  data.map(item => listFluid.push(item.fluid))
  const [photoIndex, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-100 p-15">
      <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 900: 3, 1200: 4 }}>
        <Masonry>
          {listFluid.map((image, i) => {
            return (
              <div
                key={i}
                style={{ padding: "4px" }}
                onClick={() => {
                  setIsOpen(true)
                  setIndex(i)
                }}
              >
                <Img fluid={image} alt={`${image}`} />
              </div>
            )
          })}
        </Masonry>
      </ResponsiveMasonry>

      {isOpen && (
        <Lightbox
          mainSrc={imgLinks[photoIndex]}
          nextSrc={imgLinks[(photoIndex + 1) % imgLinks.length]}
          prevSrc={
            imgLinks[(photoIndex + imgLinks.length - 1) % imgLinks.length]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((photoIndex + imgLinks.length - 1) % imgLinks.length)
          }
          onMoveNextRequest={() => setIndex((photoIndex + 1) % imgLinks.length)}
        />
      )}
    </div>
  )
}

export default ThuVienAnh
