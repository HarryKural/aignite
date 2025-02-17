import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, ClockIcon, EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

function Booking() {
    /* state variables */
    const [selectedService, setSelectedService] = useState("");
    const [bookingDate, setBookingDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [email, setEmail] = useState("");

    /* modal state */
    const [showModal, setShowModal] = useState(false);

    /* function to handle form submission */
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowModal(true);
    };

    /* function to reset form */
    const handleReset = () => {
      setSelectedService("");
      setBookingDate(null);
      setStartTime(null);
      setEndTime(null);
      setEmail("");
    };

    /* function to close modal */
    const closeModal = () => {
      setShowModal(false);
      handleReset(); // reset form after closing modal
    };

    return (
      <section className="flex items-center justify-center px-6 mt-15">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 w-full max-w-lg">
          <h2 className="text-gray-800 text-3xl font-bold text-center">BOOKING</h2>
          <p className="text-gray-600 text-center mt-2">Schedule your appointment today</p>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

            {/* service selection */}
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg p-3 pl-3 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)} required>
                <option value="" disabled>Select a service</option>
                <option value="Business">Business</option>\
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Fitness & Nutrition">Fitness & Nutrition</option>
                <option value="Health">Health</option>
                <option value="Legal">Legal</option>
                <option value="Marketing">Marketing</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Personal Development">Personal Development</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Skincare">Skincare</option>
                <option value="Technology">Technology</option>
              </select>
            </div>

            {/* booking date */}
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                dateFormat="dd/MM/yyyy"
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                placeholderText="Select a date" required/>
            </div>

            {/* time selection */}
            <div className="flex gap-4">
              <div className="relative w-1/2">
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <DatePicker
                  selected={startTime}
                  onChange={(time) => setStartTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Time"
                  dateFormat="hh:mm aa"
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                  placeholderText="Start Time" required />
              </div>
              <div className="relative w-1/2">
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                <DatePicker
                  selected={endTime}
                  onChange={(time) => setEndTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={5}
                  timeCaption="Time"
                  dateFormat="hh:mm aa"
                  className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                  placeholderText="End Time" required />
              </div>
            </div>

            {/* email */}
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>

            {/* buttons */}
            <div className="flex gap-4">
              <div className="relative w-1/2">
                <button className="btn-primary w-full text-white text-lg font-semibold py-3 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]" type="submit">
                  Book Now
                </button>
              </div>
              <div className="relative w-1/2">
                <button className="w-full bg-[#DC2626] text-white text-lg font-semibold py-3 rounded-lg hover:bg-[#A70000] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#A70000]"
                        onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>

            <div className="relative text-center mt-6">
              <p className="italic">flat price $1.99 per minute</p>
            </div>

          </form>
        </div>

        {/* confirmation modal */}
        {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">

          <div className="flex justify-center mb-6">
            <div className="bg-green-100 rounded-full p-3">
              <CheckCircleIcon className="h-8 w-8 text-green-500" />
            </div>
          </div>

            <h3 className="text-3xl text-center font-bold text-gray-800">Booking Confirmed!</h3>
            <p className="text-lg mt-4 text-gray-600">Here are your booking details:</p>
            <ul className="mt-2 space-y-2">
              <li className="text-lg"><strong>Service:</strong> {selectedService}</li>
              <li className="text-lg"><strong>Date:</strong> {bookingDate ? bookingDate.toLocaleDateString() : ""}</li>
              <li className="text-lg"><strong>Start Time:</strong> {startTime ? startTime.toLocaleTimeString() : ""}</li>
              <li className="text-lg"><strong>End Time:</strong> {endTime ? endTime.toLocaleTimeString() : ""}</li>
              <li className="text-lg"><strong>Email:</strong> {email}</li>
            </ul>
            <p className="mt-4 text-gray-600 text-md">An email has been sent to <span className="font-bold">{email}</span> with your booking details.</p>
            
            <button onClick={closeModal} 
                    className="btn-primary text-lg font-semibold mt-6 w-full text-white py-3 rounded-lg hover:bg-[#1D4ED8] transition duration-300">
              Close
            </button>
          </div>
        </div>
      )}

      </section>
    );
}

export default Booking;
