function ImageNormal({ img }) {
  return (
    <div>
      <img
        src={img}
        alt="Home furniture image"
        className="rounded-3xl shadow-lg w-[229px] my-2 md:w-[629px] shadow-zinc-400"
      />
    </div>
  );
}

export default ImageNormal;
