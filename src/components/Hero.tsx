function Hero() {
  return (
    <div
      className="
      container mx-auto py-12
      flex justify-between items-center"
    >
      <div className="space-y-12">
        <h1
          className="
        capitalize text-6xl
        font-heading font-extrabold"
        >
          build your ideal <br />
          <span className="text-transparent bg-clip-text bg-brand-gradient">
            development stack
          </span>
        </h1>
        <p className="text-(--color-para) text-xl w-2/3">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="space-x-4">
          <button className="capitalize text-white btn bg-brand-gradient-2 rounded-(--btn-radius)">
            explore technologies
          </button>
          <button className="px-16 capitalize btn bg-transparent rounded-(--btn-radius)">
            learn more
          </button>
        </div>
      </div>

      <img src="/banner-stack.png" alt="devstack banner" />
    </div>
  );
}

export default Hero;
