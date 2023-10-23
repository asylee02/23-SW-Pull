import React, { useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  textColor?: string
  fontSize?: string
  fontWeight?: string
}

export default function TypingAni(props: Props) {
  const txt = `${props.children}`
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count])
      setCount(count + 1)
    }, 120)
    if (count === txt.length) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [text])

  return (
    <div className="w-full">
      <p
        className={`${props.textColor} ${props.fontSize} ${props.fontWeight} inline animate-typingCursor`}
      >
        {text}
      </p>
    </div>
  )
}

TypingAni.defaultProps = {
  textColor: 'text-white',
  fontSize: 'text-9xl',
  fontWeight: 'font-black',
}
