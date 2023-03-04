import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src=https://ntvb.tmsimg.com/assets/assets/73227_v9_bb.jpg?w=270&h=360"
      alt="kenan"
      width={500}
      height={500}
    />
  )
}
