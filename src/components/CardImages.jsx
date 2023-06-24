import ImageBig from "./ImageBig";
import ImageNormal from "./ImageNormal";
import ImageSmall from "./ImageSmall";

function CardImages() {
  return (
    <div className="py-10 flex flex-wrap justify-center">
      <div className="flex gap-2 md:gap-4">
        <ImageSmall img="./img/photo1.png" />
        <ImageNormal img="./img/photo2.png" />
      </div>
      <div className="flex gap-2 md:gap-4">
        <div>
          <ImageNormal img="./img/photo3.png" />
          <div className="flex gap-2 md:gap-4">
            <ImageSmall img="./img/photo5.png" />
            <ImageSmall img="./img/photo6.png" />
          </div>
        </div>
        <ImageBig img="./img/photo_4.png" />
      </div>
    </div>
  );
}

export default CardImages;
