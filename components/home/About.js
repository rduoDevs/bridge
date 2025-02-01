export default function About({ aboutRef }) {
  return (
    <>
      <div className="flex justify-between mt-24" ref={aboutRef}>
        <div>
          <h2 className="text-4xl text-primary font-bold">About Us</h2>
          <div className="text-lg text-accent mt-12 md:mr-3 lg:mr-12">
            <p>
            we do this            </p>
            <p className="mt-8">
            we also do this            </p>
            <p className="mt-8">
            we are actually pretty cool
            </p>
          </div>
        </div>
        <img
          src="/aboutim.jpg"
          alt="Illustration"
          height={1000}
          width={500}
          className="hidden lg:block"
        />
      </div>
    </>
  );
}
