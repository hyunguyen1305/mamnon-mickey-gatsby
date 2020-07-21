import React, { useState, useRef } from "react"

import Draggable from "react-draggable"

import { BsFillChatDotsFill } from "react-icons/bs"

import { FiPhoneCall } from "react-icons/fi"
import messenger from "../images/fb-messenger.svg"
import zalo from "../images/zalo.png"
import Pulse from "react-reveal/Pulse"

function ChatBox() {
  const [isShowChat, setShow] = useState(false)
  const lhGroup = useRef(null)
  const drag = useRef(null)

  const setPosition = (x, y) => {
    const lh_group = lhGroup.current
    lh_group.style.position = "fixed"
    lh_group.style.left = x + 66 + "px"
    lh_group.style.top = y + 4 + "px"
  }
  const handleDrag = (e, data) => {
    const position = data.node.getBoundingClientRect()
    setPosition(position.left, position.top)
  }
  const handleMouseDown = (e, data) => {
    const position = drag.current.getBoundingClientRect()
    setPosition(position.left, position.top)
    return setShow(!isShowChat)
  }

  return (
    <div>
      <Draggable
        handle=".handle"
        scale={1}
        onDrag={handleDrag}
        onMouseDown={handleMouseDown}
      >
        <div className="lien-he handle" ref={drag}>
          <Pulse forever>
            <div
              style={{
                backgroundColor: "rgba(255, 82, 82, 1)",
                border: "1px solid black",
                borderRadius: "50%",
                padding: "8px 0",
                cursor: "pointer",
                boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.75)",
                margin: "0 8px",
              }}
              title="Contact Us"
            >
              <BsFillChatDotsFill color="white" size={30}></BsFillChatDotsFill>
            </div>
          </Pulse>
        </div>
      </Draggable>

      <div
        className="lien-he__group"
        style={{ display: isShowChat ? "flex" : "none" }}
        ref={lhGroup}
      >
        <a
          href="https://zalo.me/0989999612"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat via Zalo"
        >
          <img src={zalo} className="button_icon" alt="Zalo"></img>
        </a>
        <a
          href="https://www.messenger.com/t/1617080488559879"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat via Messenger"
        >
          <img src={messenger} className="button_icon" alt="fb-messenger"></img>
        </a>
        <a
          href="tel:+84989999612"
          target="_blank"
          rel="noopener noreferrer"
          title="Call Now"
        >
          <FiPhoneCall
            className="button_icon"
            alt="phone-call"
            size={44}
            style={{ padding: "8px" }}
          ></FiPhoneCall>
        </a>
      </div>
    </div>
  )
}

export default ChatBox
