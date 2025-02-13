import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

function Contact() {
    return (
      <>
        <title>AIgnite - Contact</title>
        <meta name="description" content="Book AI experts in health, tech, legal, and more." />
        <section className="text-white flex flex-col md:flex-row items-start justify-start px-8 md:px-18 py-10 gap-30">
        {/* left Side */}
        <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold">Get in Touch</h1>
            <p className="mt-4 text-xl">Have questions, need support, or want to learn more? We're here to help!</p>

            <div className="mt-10">
              <label htmlFor="name" className="text-xl font-semibold">Name</label>
              <input type="text" placeholder="Name" autoComplete="name" required className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#205AFA]" />
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="text-xl font-semibold">Email</label>
              <input type="email" placeholder="Email" autoComplete="email" required className="mt-2 w-full p-3 border border-gray-300 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#205AFA]" />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="text-xl font-semibold">Message</label>
              <textarea name="message" id="message" placeholder="Message" required rows="4" class="mt-2 w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#205AFA]"></textarea>
            </div>
            <button className="btn-primary flex items-center space-x-2 mt-6 text-lg font-semibold px-6 py-3 rounded-full transition-colors duration-200 ease-in-out">
                <span>Submit</span>
                <PaperAirplaneIcon className="w-5 h-5" />
            </button>
        </div>

        {/* right side - text */}
        <div className="md:w-1/2 flex flex-col items-left text-left mt-6 md:mt-0">
          <div className="w-full h-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11201.472623315181!2d-75.688015928064!3d45.42207948137245!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDI1JzIwLjkiTiA3NcKwNDAnNDcuOSJX!5e0!3m2!1sen!2sca!4v1739413831033!5m2!1sen!2sca"
                    width="550" height="400" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className='rounded-lg'></iframe>
          </div>
          <div className="mt-6">
            <p className="mt-2 text-xl"><span className='font-semibold'>Address:</span> 452 Flied Street, Ottawa, ON L2F9DI</p>
            <p className="mt-2 text-xl"><span className='font-semibold'>Call:</span> (987) 654-3210</p>
            <p className="mt-2 text-xl"><span className='font-semibold'>Monday-Friday:</span> 8:30am - 5:00pm EST</p>
            <p className="mt-2 text-xl"><span className='font-semibold'>Email:</span> info@aignite.com</p>
          </div>
        </div>
        </section>
      </>
    );
  }
  
  export default Contact;
  