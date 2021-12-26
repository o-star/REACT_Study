import React, { useEffect, useState } from 'react'

export default function Clock() {
  const [curDate, setCurDate] = useState(
    new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]
  )
  const [curTime, setCurTime] = useState(
    new Date().toTimeString().split(' ')[0]
  )

  useEffect(() => {
    const clockSetting = setTimeout(() => {
      setCurDate(
        new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0]
      )
      setCurTime(new Date().toTimeString().split(' ')[0])
    }, 1000)
    return () => clearTimeout(clockSetting)
  })

  return (
    <>
      <h2>Clock</h2>
      <h3>{curDate + ' ' + curTime}</h3>
    </>
  )
}
