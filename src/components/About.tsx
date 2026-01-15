import { FaUser } from "react-icons/fa6";
import CardStack from "./CardStack";

export default function About() {
  const aboutImages = [
    "https://picsum.photos/seed/about1/360/480",
    "https://picsum.photos/seed/about2/360/480",
    "https://picsum.photos/seed/about3/360/480",
    "https://picsum.photos/seed/about4/360/480",
    "https://picsum.photos/seed/about5/360/480",
  ];

  return (
    <section id="about" className="p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl">
        <div className="flex items-center space-x-2 mb-8">
          <FaUser className="text-sm" />
          <span>About Huzain</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="flex-1 lg:order-2 order-1">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-2 lg:order-1 pl-4">
            <CardStack images={aboutImages} />
          </div>
        </div>
      </div>
    </section>
  );
}
