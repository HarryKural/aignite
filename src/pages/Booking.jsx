import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon, ClockIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function Booking() {
    const [selectedService, setSelectedService] = useState("");
    const [bookingDate, setBookingDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [email, setEmail] = useState("");

    return (
      <section className="flex items-center justify-center px-6 mt-15">
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12 w-full max-w-lg">
          <h2 className="text-gray-800 text-3xl font-bold text-center">BOOKING</h2>
          <p className="text-gray-600 text-center mt-2">Schedule your appointment today</p>

          {/* Form */}
          <form className="mt-6 space-y-4">

            {/* service selection */}
            <div className="relative">
              <select
                className="w-full border border-gray-300 rounded-lg p-3 pl-3 focus:outline-none focus:ring-2 focus:ring-[#205AFA]"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)} required>
                <option value="" disabled>Select a service</option>
                <option value="Health">Health</option>
                <option value="Technology">Technology</option>
                <option value="Skincare">Skincare</option>
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
                <option value="Education">Education</option>
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

          </form>
        </div>
      </section>
    );
}

export default Booking;
