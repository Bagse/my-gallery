function ImageBig({img}) {
  return (
    <div>
        <img src={img} alt="Home furniture image" className="rounded-3xl shadow-lg w-[108px] h-auto my-2 lg:h-[605px] md:w-[297px] shadow-zinc-400" />
    </div>
  )
}

export default ImageBig