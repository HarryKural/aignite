function About() {
    return (
      <>
        <title>AIgnite - About</title>
        <meta name="description" content="Book AI experts in health, tech, legal, and more." />
        <section className="flex flex-col md:flex-row items-start justify-start px-8 md:px-18 py-10 gap-20">
        {/* left Side - text content */}
        <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold">About AIgnite</h1>
            <p className="mt-4 text-xl">At AIgnite, we're committed to providing expert advice through cutting-edge AI technology.
              Whether you need health advice, tech support, or legal insights, our bots are here to help you achieve success.</p>

            <div className="mt-10">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-3 text-xl">Booking a session with an AI expert is easy. <br /> Here's how it works:</p>
            </div>

            <div className="space-y-6 text-left mt-6">
            <div>
                <h3 className="text-xl font-semibold">Step 1: Connect with an AI Expert</h3>
                <p>Choose from a variety of fields like Health, Tech, <br /> Legal, and more.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Step 2: Consult & Get Solutions</h3>
                <p>Ask your questions and receive personalized <br /> answers from our AI experts.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold">Step 3: Conquer Your Goals</h3>
                <p>Walk away with clear insights and actionable steps <br /> for success.</p>
            </div>
            </div>
        </div>

        {/* right side - text */}
        <div className="md:w-1/2 flex flex-col items-left text-left mt-6 md:mt-0">
            <h2 className="md:mt-54 text-3xl font-bold">Why Choose Us?</h2>
            <h3 className="mt-2 text-xl">Why AIgnite?</h3>
            <p className="mt-2 text-xl">With AIgnite, you get fast, reliable, and expert-driven solutions. Our AI bots are trained to deliver personalized advice in real-time, so you can move forward with confidence.</p>
            <h2 className="mt-10 text-3xl font-bold">Our Technology</h2>
            <p className="mt-2 text-xl">Our AI bots use state-of-the-art models and natural language processing to deliver human-like responses, ensuring you receive the best insights tailored to your needs.</p>
        </div>
        </section>
      </>
    );
  }
  
  export default About;
  