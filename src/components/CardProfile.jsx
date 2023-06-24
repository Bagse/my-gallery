function CardProfile() {
  return (
    <div className="py-2 flex flex-col items-center">
        <img src="./img/profilePhoto.png" className="rounded-2xl shadow-md w-28 h-28 md:w-40 md:h-40 md:shadow-lg" />
        <div className="font-mont font-semibold flex flex-col items-center py-2 gap-2">
            <h1 className="text-[#4E5150] text-[14px] md:text-2xl">Rodney Cotton</h1>
            <h2 className="text-[#A9A9A9] text-xs md:text-sm">Helsinki, Finland</h2>
        </div>
    </div>
  )
}

export default CardProfile