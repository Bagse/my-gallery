function Footer() {
  return (
    <div className="font-mont text-[#B9BDCF] flex gap-1 justify-center pt-6 text-sm md:text-lg">
      Created by{" "}
      <a
        href="https://github.com/Bagse"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-orange-400"
      >
        Bagse
      </a>{" "}
      -{" "}
      <a
        href="https://devchallenges.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold hover:text-orange-400"
      >
        devChallenges.io
      </a>
    </div>
  );
}

export default Footer;
