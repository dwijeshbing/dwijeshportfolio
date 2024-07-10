import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      {/* <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      /> */}

      <svg
        width="1000"
        height="1000"
        version="1.0"
        viewBox="0 0 750 750"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 750) scale(1 -1)"
          fill="none"
        >
          <path
            fill="#ffde59"
            d="M 337.667969 84.105469 L 126.585938 84.105469 C 119.273438 84.105469 113.363281 90.03125 113.363281 97.328125 L 113.363281 652.667969 C 113.363281 659.96875 119.273438 665.890625 126.585938 665.890625 L 337.667969 665.890625 C 514.4375 665.890625 615.8125 558.949219 615.8125 372.5 C 615.8125 191.910156 511.832031 84.105469 337.667969 84.105469 Z M 326.5625 573.335938 L 232.363281 573.335938 L 232.363281 176.664062 L 326.5625 176.664062 C 433.636719 176.664062 496.8125 248.671875 496.8125 374.007812 C 496.8125 502.117188 435.144531 573.335938 326.5625 573.335938 Z M 326.5625 573.335938 "
          />
          <path
            fill="#004aad"
            d="M 396.816406 84.105469 L 185.734375 84.105469 C 178.421875 84.105469 172.511719 90.03125 172.511719 97.328125 L 172.511719 652.667969 C 172.511719 659.96875 178.421875 665.890625 185.734375 665.890625 L 396.816406 665.890625 C 573.585938 665.890625 674.960938 558.949219 674.960938 372.5 C 674.960938 191.910156 570.980469 84.105469 396.816406 84.105469 Z M 385.707031 573.335938 L 291.511719 573.335938 L 291.511719 176.664062 L 385.707031 176.664062 C 492.78125 176.664062 555.960938 248.671875 555.960938 374.007812 C 555.960938 502.117188 494.289062 573.335938 385.707031 573.335938 Z M 385.707031 573.335938 "
          />
        </g>
      </svg>

    </div>
  )
}

export default Logo
