function ImageSmall({ img }) {
  return (
    <div>
      <img
        src={img}
        alt="Home furniture image"
        className="rounded-3xl shadow-lg w-[109px] my-2 md:w-[300px] shadow-zinc-400"
      />
    </div>
  );
}

export default ImageSmall;
