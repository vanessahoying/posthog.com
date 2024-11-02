import React from 'react'

interface ScreenshotProps {
    className?: string
}

export const Screenshot = ({ className = '' }: ScreenshotProps): JSX.Element => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1280 732" className={`${className} shadow-xl rounded-md max-h-[calc(100vh_-_53px_-_2rem)]`}><g clipPath="url(#a)"><path fill="#fff" d="M0 0h1280v732H0z"/><path fill="url(#b)" d="M0 5.224A5.224 5.224 0 0 1 5.224 0H1274.78c2.88 0 5.22 2.339 5.22 5.224v34.65H0V5.223Z"/><path fill="#606367" d="M320.42 17.906a.942.942 0 0 0-.942.942v3.77h-3.77a.942.942 0 0 0 0 1.885h3.77v3.77a.942.942 0 0 0 1.884 0v-3.77h3.77a.943.943 0 1 0 0-1.885h-3.77v-3.77a.942.942 0 0 0-.942-.942Z"/><g filter="url(#c)"><path fill="#ED6A5E" fill-rule="evenodd" d="M17.904 26.387a5.654 5.654 0 1 0 0-11.308 5.654 5.654 0 0 0 0 11.308Z" clipRule="evenodd"/></g><path stroke="#CE5347" stroke-width=".471" d="M23.323 20.733a5.419 5.419 0 1 1-10.837 0 5.419 5.419 0 0 1 10.837 0Z"/><g filter="url(#d)"><path fill="#F6BE4F" fill-rule="evenodd" d="M36.752 26.387a5.654 5.654 0 1 0 0-11.308 5.654 5.654 0 0 0 0 11.308Z" clipRule="evenodd"/></g><path stroke="#D6A243" stroke-width=".471" d="M42.171 20.733a5.419 5.419 0 1 1-10.838 0 5.419 5.419 0 0 1 10.838 0Z"/><g filter="url(#e)"><path fill="#62C554" fill-rule="evenodd" d="M55.6 26.387a5.654 5.654 0 1 0 0-11.308 5.654 5.654 0 0 0 0 11.308Z" clipRule="evenodd"/></g><path stroke="#58A942" stroke-width=".471" d="M61.019 20.733a5.419 5.419 0 1 1-10.838 0 5.419 5.419 0 0 1 10.838 0Z"/><path fill="#fff" fill-rule="evenodd" d="M81.045 7.54a7.54 7.54 0 0 0-7.539 7.539v16.963a7.54 7.54 0 0 1-7.522 7.54H307.207a7.54 7.54 0 0 1-7.522-7.54h-.001V15.079a7.539 7.539 0 0 0-7.539-7.54h-211.1Z" clipRule="evenodd"/><mask id="g" width="168" height="19" x="107" y="14" maskUnits="userSpaceOnUse" style={{maskType: 'alpha'}}><path fill="url(#f)" d="M107.434 14.136H274.24v18.848H107.434z"/></mask><g mask="url(#g)"><text xmlSpace="preserve" fill="#3D4043" font-family="SF Pro Text" font-size="11.309" font-weight="500" letter-spacing="0em" style={{whiteSpace: 'pre'}}><tspan x="107.434" y="27.58">Product name - PostHog</tspan></text></g><path fill="#5E6063" d="M281.101 26.214a.667.667 0 0 0 .943.942l2.599-2.599 2.599 2.6a.666.666 0 1 0 .942-.943l-2.599-2.599 2.599-2.599a.667.667 0 0 0-.942-.942l-2.599 2.599-2.599-2.6a.667.667 0 0 0-.943.943l2.599 2.599-2.599 2.599Z"/><rect width="18" height="18" x="83.875" y="15.021" fill="#000" rx="2"/><g fill="#fff" clipPath="url(#h)"><path d="M88.71 24.055a.572.572 0 1 1-1.024-.512.572.572 0 1 1 1.024.512ZM88.71 27.254a.572.572 0 1 1-1.024-.512.572.572 0 1 1 1.024.512Z"/><path d="M85 27.22c0-.554.67-.832 1.062-.44l.435.435a.622.622 0 0 1-.44 1.062h-.435a.622.622 0 0 1-.622-.622v-.435Zm0-2.4c0 .166.066.324.182.44l2.835 2.835a.622.622 0 0 0 .44.182h.8c.553 0 .831-.67.44-1.062l-3.635-3.634a.622.622 0 0 0-1.062.44v.8Zm0-3.198c0 .165.066.323.182.44l6.034 6.033a.622.622 0 0 0 .44.182h.8c.553 0 .831-.67.44-1.062l-6.834-6.833a.622.622 0 0 0-1.062.44v.8Zm3.199 0c0 .165.066.323.182.44l5.154 5.153a.622.622 0 0 0 1.062-.44v-.8a.622.622 0 0 0-.182-.44l-5.154-5.153a.622.622 0 0 0-1.062.44v.8Zm4.261-1.24a.622.622 0 0 0-1.062.44v.8c0 .165.066.323.182.44l1.955 1.954a.622.622 0 0 0 1.062-.44v-.8a.622.622 0 0 0-.182-.44l-1.955-1.954ZM98.605 26.53l-2.496-2.496a.622.622 0 0 0-1.062.44v3.181c0 .344.279.622.622.622h4.172c.283 0 .512-.229.512-.511 0-.283-.232-.507-.508-.565a2.472 2.472 0 0 1-1.24-.671Zm-2.023.724a.512.512 0 1 1 0-1.024.512.512 0 0 1 0 1.024Z"/><path d="M85 27.655c0 .344.279.622.622.622h.435c.554 0 .832-.67.44-1.062l-.435-.435a.622.622 0 0 0-1.062.44v.435ZM88.199 22.52l-2.137-2.138a.622.622 0 0 0-1.062.44v.8c0 .165.066.323.182.44l3.017 3.016V22.52ZM86.062 23.581a.622.622 0 0 0-1.062.44v.8c0 .165.066.323.182.44l3.017 3.016v-2.559l-2.137-2.137ZM91.398 22.777a.622.622 0 0 0-.182-.44l-1.955-1.955a.622.622 0 0 0-1.062.44v.8c0 .165.066.323.183.44l3.016 3.016v-2.301ZM88.2 28.277h1.056c.555 0 .832-.67.44-1.062L88.2 25.718v2.56ZM88.2 22.52v2.3c0 .166.065.324.181.44l3.017 3.018v-2.302a.622.622 0 0 0-.182-.44l-3.017-3.017Z"/></g><path fill="#fff" d="M0 39.873h1280V75H0z"/><path fill="#B6B6B6" d="M0 74.525h1280V75H0z"/><path fill="#606367" fill-rule="evenodd" d="M21 50.718a.707.707 0 0 1-.009 1l-3.951 3.884h9.11a.707.707 0 0 1 0 1.414h-9.103l3.942 3.853a.707.707 0 1 1-.988 1.01l-5.183-5.065a.706.706 0 0 1-.001-1.01L20 50.71a.707.707 0 0 1 1 .008Z" clipRule="evenodd"/><path fill="#BABCBE" fill-rule="evenodd" d="M50.621 50.718a.707.707 0 0 0 .01 1l3.95 3.884h-9.11a.707.707 0 0 0 0 1.414h9.103l-3.942 3.853a.707.707 0 1 0 .988 1.01l5.183-5.065a.707.707 0 0 0 .001-1.01l-5.183-5.094a.707.707 0 0 0-1 .008Z" clipRule="evenodd"/><path fill="#606367" d="M76.332 56.544a4.712 4.712 0 0 1 8.27-3.088l-2.145 2.146h5.184v-5.183l-2.037 2.036a6.126 6.126 0 1 0 .957 6.753.707.707 0 0 0-1.272-.615 4.713 4.713 0 0 1-8.957-2.049Z"/><rect width="1136.75" height="26.387" x="101.781" y="43.351" fill="#F1F3F4" rx="13.194"/><path fill="#606367" fill-rule="evenodd" d="M118.746 51.833a2.356 2.356 0 0 0-2.356 2.355v.943h-.471a.942.942 0 0 0-.942.942v4.712c0 .52.421.943.942.943h5.654a.943.943 0 0 0 .943-.943v-4.712a.943.943 0 0 0-.943-.942h-.471v-.943a2.356 2.356 0 0 0-2.356-2.355Zm1.414 3.298v-.943a1.414 1.414 0 0 0-2.827 0v.943h2.827Z" clipRule="evenodd"/><text xmlSpace="preserve" fill="#202124" font-family="SF Pro Text" font-size="13.194" font-weight="500" letter-spacing="0em" style={{ whiteSpace: 'pre' }}><tspan x="179.706" y="61.234">us.posthog.com/url</tspan></text><text xmlSpace="preserve" fill="#767676" font-family="SF Pro Text" font-size="13.194" font-weight="500" letter-spacing="0em" style={{ whiteSpace: 'pre' }}><tspan x="133.824" y="61.234">https://</tspan></text><path fill="#606367" d="M1260.68 51.927a1.411 1.411 0 1 1-2.82 0 1.411 1.411 0 1 1 2.82 0ZM1260.68 56.639a1.411 1.411 0 1 1-2.82 0 1.411 1.411 0 1 1 2.82 0ZM1260.68 61.35a1.411 1.411 0 1 1-2.82 0 1.411 1.411 0 1 1 2.82 0Z"/><mask id="i" fill="#fff"><path d="M0 75h215v657H0V75Z"/></mask><path fill="#EEEFE9" d="M0 75h215v657H0V75Z"/><path fill="#D0D1C9" d="M214 75v657h2V75h-2Z" mask="url(#i)"/><mask id="j" fill="#fff"><path d="M-2 74h217v194H-2V74Z"/></mask><path fill="#D0D1C9" d="M215 267H-2v2h217v-2Z" mask="url(#j)"/><rect width="81" height="24" x="8" y="84" fill="#D0D1C9" rx="4"/><rect width="172" height="24" x="8" y="114" fill="#D0D1C9" rx="4"/><rect width="101" height="24" x="8" y="144" fill="#D0D1C9" rx="4"/><rect width="126" height="24" x="8" y="174" fill="#D0D1C9" rx="4"/><rect width="81" height="24" x="8" y="204" fill="#D0D1C9" rx="4"/><rect width="87" height="24" x="8" y="234" fill="#D0D1C9" rx="4"/><rect width="81" height="24" x="8" y="638" fill="#D0D1C9" rx="4"/><rect width="126" height="24" x="8" y="668" fill="#D0D1C9" rx="4"/><rect width="81" height="24" x="8" y="698" fill="#D0D1C9" rx="4"/><rect width="151" height="24" x="8" y="278" fill="#D0D1C9" rx="4"/><rect width="109" height="24" x="8" y="308" fill="#D0D1C9" rx="4"/><rect width="116" height="24" x="8" y="338" fill="#D0D1C9" rx="4"/><rect width="126" height="24" x="8" y="368" fill="#D0D1C9" rx="4"/><rect width="102" height="24" x="8" y="398" fill="#D0D1C9" rx="4"/><rect width="87" height="24" x="8" y="428" fill="#D0D1C9" rx="4"/><rect width="151" height="24" x="8" y="458" fill="#D0D1C9" rx="4"/><rect width="121" height="24" x="8" y="488" fill="#D0D1C9" rx="4"/><mask id="k" fill="#fff"><path d="M215 75h1065v60H215V75Z"/></mask><path fill="#EEEFE9" d="M215 75h1065v60H215V75Z"/><path fill="#D0D1C9" d="M1280 134H215v2h1065v-2Z" mask="url(#k)"/><text xmlSpace="preserve" fill="#111" font-family="SF Pro Text" font-size="12" font-weight="600" letter-spacing="0em" opacity=".5" style={{ whiteSpace: 'pre' }}><tspan x="318.578" y="97.165">/</tspan></text><rect width="100" height="20" x="330.531" y="82" fill="#D0D1C9" rx="4"/><rect width="81" height="20" x="232" y="82" fill="#D0D1C9" rx="4"/><text xmlSpace="preserve" fill="#111" font-family="SF Pro Text" font-size="16" font-weight="600" letter-spacing="0em" style={{ whiteSpace: 'pre' }}><tspan x="231" y="123.187">Product name</tspan></text></g><defs><filter id="c" width="11.309" height="11.309" x="12.25" y="15.079" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2.827"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.92549 0 0 0 0 0.427451 0 0 0 0 0.384314 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_16321_71052"/></filter><filter id="d" width="11.309" height="11.309" x="31.098" y="15.079" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2.827"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.960784 0 0 0 0 0.768627 0 0 0 0 0.317647 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_16321_71052"/></filter><filter id="e" width="11.309" height="11.309" x="49.945" y="15.079" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2.827"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.407843 0 0 0 0 0.8 0 0 0 0 0.345098 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_16321_71052"/></filter><linearGradient id="b" x1="640" x2="640" y1="0" y2="39.873" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#DFE1E5"/><stop offset=".994" stop-color="#DFE1E5"/></linearGradient><linearGradient id="f" x1="274.24" x2="107.434" y1="23.56" y2="23.56" gradientUnits="userSpaceOnUse"><stop stop-opacity="0"/><stop offset=".1"/></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h1280v732H0z"/></clipPath><clipPath id="h"><path fill="#fff" d="M85 19h16v9.6H85z"/></clipPath></defs></svg>
    )
  }