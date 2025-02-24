import heroImage from '../assets/images/hero-image-robo.jpeg';
import { useNavigate } from 'react-router-dom';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

function Home() {
  /* state variable */
  const navigate = useNavigate();

  /* function to handle CTA button */
  const handleCTAButton = () => {
    navigate("/booking");  // navigate to booking page
  };

  return (
    <>
      <title>AIgnite</title>
      <meta name="description" content="Book AI experts in health, tech, legal, and more." />
      <section className="text-white flex flex-col md:flex-row items-start justify-start px-8 md:px-18 py-10 gap-15">
        {/* left Side - text content */}
        <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold">Connect. Consult.</h1>
            <h1 className="text-5xl font-bold">Conquer with AIgnite</h1>
            <p className="mt-4 text-2xl">Personalized consultations across a wide range of fields.</p>

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

        {/* right side - image, text & button */}
        <div className="md:w-1/2 flex flex-col items-center text-center mt-6 md:mt-0">
            <img src={heroImage} alt="ChatBot" className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" />
            <h2 className="mt-4 text-3xl">Ready for expert advice?</h2>
            <p className="mt-2">Start your AI consultation today.</p>
            <button onClick={handleCTAButton}
                    className="btn-primary cursor-pointer flex items-center space-x-2 mt-6 text-2xl font-semibold px-6 py-3 rounded-full transition-all duration-200 ease-in-out hover:scale-105">
                <span>Get Started</span>
                <ChevronDoubleRightIcon className="w-6 h-6" />
            </button>
        </div>
     </section>
    </>
  );
}

export default Home;
