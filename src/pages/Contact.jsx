import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mblyykez");

  if (state.succeeded) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center bg-green-50">
        <div className="text-center p-6 bg-white rounded-md shadow-md">
          <div className="text-green-600 text-4xl mb-4 flex justify-center">
            <FaCheckCircle />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h2>
          <p className="text-gray-600">Your message has been sent successfully. We’ll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-blue-50 p-6 rounded-lg shadow-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Write your message..."
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className={`bg-blue-600 text-white px-6 py-2 rounded-md transition ${
              state.submitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
