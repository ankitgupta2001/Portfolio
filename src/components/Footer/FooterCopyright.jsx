import ScrollReveal from "../ScrollReveal";

const FooterCopyright = () => {
  return (
    <div className="flex items-center justify-between pt-10 mb-8">
      <ScrollReveal>
        <a href="/" className="logo">
          <img src={"/images/Logo.svg"} width={80} height={80} alt="Logo" />
        </a>
      </ScrollReveal>

      <ScrollReveal>
        <p className="text-zinc-500 text-sm">
          &copy; 2025 <span className="text-zinc-200">AnkitGupta</span>
        </p>
      </ScrollReveal>
    </div>
  );
};

export default FooterCopyright;
