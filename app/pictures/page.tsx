import React from 'react'
import antique from '../../public/img/antiquescape-min.png'
import bridge from '../../public/img/bridgescape-min.png'
import crystal from '../../public/img/crystalscape-min.png'
import land from '../../public/img/landscape-min.png'
import futbol from '../../public/img/futbolscape-min.png'
import oregon from '../../public/img/oregonscape-min.png'
import Gallery from '../components/Gallery'

export default function PicturesPage() {

  const photos = [
    {
      id: 1,
      url: antique,
      caption: 'Antique store. Leucadia, California '
    },
    {
      id: 2,
      url: bridge,
      caption: 'Steel Bridge, Portland, Oregon'
    },
     {
      id: 3,
      url: crystal,
      caption: 'Portugese crystal hangs in the sunlight.'
    },
      {
      id: 4,
      url: land,
      caption: 'Image of landscape. Cascade Locks, Columbia River Gorge, National Scenic Area'
    },
       {
      id: 5,
      url: futbol,
      caption: 'Father and son playing with ball in park, Mexico City, Mexico'
    },
        {
      id: 6,
      url: oregon,
      caption: 'Image of bridge in Siuslaw River, Florence, Oregon'
    },
  ]
  return (
    <div>
      <Gallery photos={photos} />
    </div>
  )
}
