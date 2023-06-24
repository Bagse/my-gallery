import Button from "./Button";

function CardInfo() {
  return (
    <div className="flex justify-center gap-2 md:gap-6">
      <Button number="100" label="posts" />
      <Button number="2,242" label="followers" />
      <Button number="1,432" label="following" />
    </div>
  );
}

export default CardInfo;
