export const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">About This Project</h1>
      
      <p className="mb-4 text-lg">
        🌍 <span className="font-semibold text-blue-600">Country Info Explorer</span> is a web app where you can search and explore information about any country in the world.
      </p>

      <p className="mb-4">
        It uses a public API to fetch live country data including capital, population, languages, flags, timezones, and more — all displayed in a clean and user-friendly interface.
      </p>

      <p className="mb-4">
        This app is built using <span className="font-medium">React</span>, <span className="font-medium">React Router</span>, and <span className="font-medium">Tailwind CSS</span> to deliver fast performance and modern design.
      </p>

      <p className="text-gray-600 italic">
        Made with ❤️ by Akshay Sawant — to practice React and help users easily explore the world, one country at a time.
      </p>
    </section>
  );
};
