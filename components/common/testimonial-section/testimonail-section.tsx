import { FaQuoteLeft } from "react-icons/fa";

export const data = [
  {
    id: "1",
    testimony:
      "I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO.",
  },
  {
    id: "2",
    testimony:
      "I love Wellfound (AngelList Talent). I got my current job at a startup entirely through the site last year - it's super easy to use and I love the UI.",
  },
  {
    id: "3",
    testimony:
      "I can't imagine my day to day without this platform. Life would be a lot more difficult.",
  },
  {
    id: "4",
    testimony:
      "Half of the offers I give are sourced from Wellfound (AngelList Talent). It's the best product for anyone looking for startup talent.",
  },
];
export const TestimonialSection = () => {
  return (
    <section>
      <div className="site-container grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-8 items-center lg:py-16 py-10">
        <div className="lg:col-span-2 text-center">
          <div className="uppercase text-lg font-semibold tracking-wider mb-4">
            DON'T JUST TAKE IT FROM US
          </div>
          <h2 className="text-4xl font-bold">From our users</h2>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="space-y-6 px-12 py-16 border border-gray-300 rounded-sm"
          >
            <div className="text-3xl text-gray-900">
              <FaQuoteLeft />
            </div>
            <p className="">{item.testimony}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
