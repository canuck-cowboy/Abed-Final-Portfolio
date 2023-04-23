import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  
  const texts = [
    'Arduino',
    'Java',
    'Packet Tracer',
    'DNS',
    'Wireshark',
    'VMware ESXi',
    'SQL', 
    'SolarWinds',
    'SonicWall',
    'Citrix ADC',
    'Powershell',
    'CISCO',
    'Exchange',
    'FTP',
    'Sharepoint',
    'CMD',
    'Active Directory',
    'Cable Crimping',
    'DevOps',
    'LAN/WAN',
    'O365',
    'Barracuda'
  ]
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'normal',
    direction: 135,
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
