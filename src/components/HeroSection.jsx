import playIcon from "../assets/Play.png";

function HeroSection({ bannerImage }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#d7dcf6] px-5 py-2.5 text-sm font-semibold text-brand-500">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccb9ff]">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
          </span>
          New: AI-Powered Tools Available
        </p>
        <h1 className="max-w-lg text-4xl font-extrabold leading-tight text-slate-800 sm:text-5xl">
          Supercharge Your Digital Workflow
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-500">
          Access premium AI tools, design assets, templates, and productivity
          software all in one place. Start creating faster today.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="btn rounded-full border-none bg-brand-gradient px-6 text-white hover:opacity-90">
            Explore Products
          </button>
          <button className="btn rounded-full border-2 border-brand-500 bg-white px-6 text-brand-500 hover:bg-brand-50">
            <img src={playIcon} alt="Play icon" className="mr-2 h-5 w-5" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className="justify-self-center">
        <img
          className="w-full max-w-md rounded-2xl object-cover shadow-soft"
          src={bannerImage}
          alt="Digital workflow banner"
        />
      </div>
    </section>
  );
}

export default HeroSection;
