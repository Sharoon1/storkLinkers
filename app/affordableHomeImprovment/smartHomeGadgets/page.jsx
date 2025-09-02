import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import React from "react";

const faqs = [
  {
    question:
      "Q: Can I install these smart home gadgets without technical skills?",
    answer:
      "A: Absolutely. Most smart home gadgets on Amazon come with step-by-step setup guides or video tutorials.",
  },
  {
    question: "Q: Are these gadgets compatible with Alexa and Google Home?",
    answer:
      "A: Yes, the gadgets listed are chosen for their compatibility with major voice assistants.",
  },
  {
    question: "Q: Will I need a separate hub for each device?",
    answer:
      "A: Not always. Many modern smart devices work independently via Wi-Fi or Bluetooth.",
  },
  {
    question: "Q: Can I control everything from my phone?",
    answer:
      "A: Yes. Every device listed has a mobile app that allows full control from anywhere.",
  },
  {
    question: "Q: Are smart gadgets secure?",
    answer:
      "A: Most trusted brands offer encrypted connections and frequent security updates. Always change default passwords.",
  },
];

function SmartHomeGadgets() {
  return (
    <div className="m-8 sm:m-20 space-y-10">
      <div className="text-3xl">
        <div className="mb-12">
          {/* Main Title */}
          <h1 className="text-4xl font-extrabold mb-2">
            Smart Home Gadgets for Home Improvement Lovers: The Ultimate 2025
            Guide
          </h1>

          {/* Meta Description */}
          <p className="text-lg text-gray-600 mb-8">
            Discover the best smart home gadgets on Amazon to upgrade your
            living space effortlessly.
          </p>

          {/* Table of Contents */}
          <h2 className="text-3xl font-bold text-teal-700 mb-4">
            📌 Table of Contents
          </h2>
          <ul className="list-disc list-inside space-y-2  text-base">
            <li>
              <a
                href="#why-smart-gadgets"
                className="hover:underline text-teal-700 font-medium"
              >
                Why Smart Home Gadgets Are a Must for Home Improvement Lovers
              </a>
            </li>
            <li>
              <a
                href="#top-10-gadgets"
                className="hover:underline text-teal-700 font-medium"
              >
                Top 10 Smart Home Gadgets on Amazon (2025 Edition)
              </a>
            </li>
            <li>
              <a
                href="#comparison-table"
                className="hover:underline text-teal-700 font-medium"
              >
                Comparison Table: Best Smart Gadgets by Category
              </a>
            </li>
            <li>
              <a
                href="#pro-tips"
                className="hover:underline text-teal-700 font-medium"
              >
                Pro Tips: Getting the Most Value from Your Smart Devices
              </a>
            </li>
            <li>
              <a
                href="#usage-areas"
                className="hover:underline text-teal-700 font-medium"
              >
                Where to Use Smart Home Gadgets in Your Home
              </a>
            </li>
            <li>
              <a
                href="#installation-guide"
                className="hover:underline text-teal-700 font-medium"
              >
                Installation & Maintenance Made Easy
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="hover:underline text-teal-700 font-medium"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#final-thoughts"
                className="hover:underline text-teal-700 font-medium"
              >
                Final Thoughts & Call to Action
              </a>
            </li>
          </ul>
        </div>

        <div id="why-smart-gadgets" className="mb-16">
          {/* Section Heading */}
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Why Smart Home Gadgets Are a Must for Home Improvement Lovers
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Home improvement has evolved beyond paint and furniture—now it’s
            about integrating smart technology to make your life easier, safer,
            and more efficient. From voice-controlled lighting to automated
            security systems,
            <span className="font-semibold text-teal-700">
              {" "}
              smart home gadgets on Amazon{" "}
            </span>
            are revolutionizing how we live.
          </p>

          {/* Benefits List */}
          <h3 className="text-xl font-semibold text-teal-700 mb-3">
            Benefits for Homeowners:
          </h3>
          <ul className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-2 mb-6">
            <li>Increased convenience and comfort</li>
            <li>Remote control and automation of household devices</li>
            <li>Energy and cost savings</li>
            <li>Enhanced home security</li>
            <li>
              Compatibility with voice assistants like Alexa and Google Home
            </li>
          </ul>

          {/* Closing Note */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            If you’re a DIY enthusiast, budget-savvy renter, or first-time
            homeowner, investing in these gadgets can completely transform your
            space
            <span className="font-medium text-teal-700">
              {" "}
              without a major renovation.
            </span>
          </p>
        </div>
        <div className="mb-12">
          {/* Section Heading */}
          <h2 id="top-10-gadgets" className="text-2xl font-bold  mb-4">
            Top 10 Smart Home Gadgets on Amazon (2025 Edition)
          </h2>

          {/* Description */}
          <p className="text-base text-gray-700 mb-6">
            Here are our hand-picked, budget-friendly smart home gadgets on
            Amazon that offer high functionality and great value:
          </p>

          {/* Gadgets List */}
          <div className="space-y-6 text-base text-gray-800">
            <div>
              <strong>1. Echo Show 8 (3rd Gen)</strong> – Smart Display with
              Alexa
              <br />
              Touchscreen, video calling, and smart control hub
              <br />
              <em>Great for:</em> Kitchen counters or workspaces
              <br />
              <strong>Price:</strong> ~$129
              <br />
              ⭐ Best For: Centralizing your smart home
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>2. Wyze Cam v3 with Color Night Vision</strong>
              <br />
              Smart indoor/outdoor camera with motion alerts
              <br />
              <em>Great for:</em> Weatherproof, budget security
              <br />
              <strong>Price:</strong> ~$35
              <br />
              ⭐ Best For: Home security on a budget
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>3. TP-Link Kasa Smart Plug Mini</strong>
              <br />
              Compact Wi-Fi outlet, voice and app-controlled
              <br />
              <em>Great for:</em> Automating lamps, fans, or coffee makers
              <br />
              <strong>Price:</strong> ~$24 (2-pack)
              <br />
              ⭐ Best For: Energy savings and automation
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>4. Ring Video Doorbell (2nd Gen)</strong>
              <br />
              1080p HD video, two-way talk, motion detection
              <br />
              <strong>Price:</strong> ~$99
              <br />
              ⭐ Best For: Front door monitoring
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>5. Govee Smart LED Strip Lights (16.4ft)</strong>
              <br />
              App and voice control, syncs to music
              <br />
              <strong>Price:</strong> ~$22
              <br />
              ⭐ Best For: Stylish lighting
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>6. August Wi-Fi Smart Lock (4th Gen)</strong>
              <br />
              Control your door remotely, easy install
              <br />
              <strong>Price:</strong> ~$199
              <br />
              ⭐ Best For: Smart access control
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>7. Google Nest Learning Thermostat (3rd Gen)</strong>
              <br />
              Learns your preferences, saves energy
              <br />
              <strong>Price:</strong> ~$249
              <br />
              ⭐ Best For: Efficient climate control
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>8. iRobot Roomba 694 Robot Vacuum</strong>
              <br />
              Wi-Fi connected, self-charging
              <br />
              <strong>Price:</strong> ~$179
              <br />
              ⭐ Best For: Hassle-free cleaning
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>9. Meross Smart Garage Door Opener Remote</strong>
              <br />
              App and voice control, compatible with Alexa & Google Assistant
              <br />
              <strong>Price:</strong> ~$49
              <br />
              ⭐ Best For: Garage automation
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>

            <div>
              <strong>10. BLACK+DECKER Smart Under Cabinet Lighting Kit</strong>
              <br />
              Motion-activated, remote-controlled LED strips
              <br />
              <strong>Price:</strong> ~$39
              <br />
              ⭐ Best For: Kitchen, bathroom, or workspace lighting
              <br />
              🔗{" "}
              <a href="#" className="text-teal-700 hover:underline">
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto my-12">
          <h2 id="comparison-table" className="text-2xl font-bold  mb-4">
            Comparison Table: Best Smart Gadgets by Category
          </h2>
          <table className="min-w-full bg-white border border-gray-200 text-base text-gray-700">
            <thead className="bg-teal-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Best Gadget</th>
                <th className="px-4 py-2 text-left">Key Feature</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Smart Hub</td>
                <td className="border px-4 py-2">Echo Show 8</td>
                <td className="border px-4 py-2">
                  Voice + touchscreen control
                </td>
                <td className="border px-4 py-2">~$129</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Security</td>
                <td className="border px-4 py-2">Wyze Cam v3</td>
                <td className="border px-4 py-2">Color night vision, alerts</td>
                <td className="border px-4 py-2">~$35</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Lighting</td>
                <td className="border px-4 py-2">Govee LED Strip Lights</td>
                <td className="border px-4 py-2">Music sync & app control</td>
                <td className="border px-4 py-2">~$22</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Cleaning</td>
                <td className="border px-4 py-2">Roomba 694</td>
                <td className="border px-4 py-2">Auto-clean & self-charging</td>
                <td className="border px-4 py-2">~$179</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Climate</td>
                <td className="border px-4 py-2">Google Nest Thermostat</td>
                <td className="border px-4 py-2">Learns & saves energy</td>
                <td className="border px-4 py-2">~$249</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Access Control</td>
                <td className="border px-4 py-2">August Smart Lock</td>
                <td className="border px-4 py-2">Remote unlock</td>
                <td className="border px-4 py-2">~$199</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Power Management</td>
                <td className="border px-4 py-2">Kasa Smart Plugs</td>
                <td className="border px-4 py-2">Compact, voice-controlled</td>
                <td className="border px-4 py-2">~$24 (2-pack)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border px-4 py-2">Entry Monitoring</td>
                <td className="border px-4 py-2">Ring Video Doorbell</td>
                <td className="border px-4 py-2">1080p video</td>
                <td className="border px-4 py-2">~$99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-10 space-y-8 text-base text-gray-800">
          <div>
            <h2 className="font-bold text-2xl mb-3">
              Pro Tips: Getting the Most Value from Your Smart Devices
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Bundle smart gadgets for a better ecosystem experience (e.g.,
                Alexa + Kasa + Ring).
              </li>
              <li>
                Check compatibility with your voice assistant before buying.
              </li>
              <li>
                Use smart routines to automate daily tasks like turning lights
                off at bedtime.
              </li>
              <li>Schedule your devices via mobile apps to conserve energy.</li>
              <li>
                Look for deals on Amazon Prime Day, Black Friday, and holiday
                sales.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-2xl mb-3">
              Where to Use Smart Home Gadgets in Your Home
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-teal-600">Kitchen:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Use smart displays (like Echo Show) for recipes, timers, or
                    video calls.
                  </li>
                  <li>
                    Under-cabinet lighting adds a modern look and improves
                    visibility.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-teal-600">Living Room:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Automate lighting and entertainment with smart plugs and
                    strip lights.
                  </li>
                  <li>Use a smart thermostat for year-round comfort.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-teal-600">Bedroom:</h3>
                <ul className="list-disc pl-5">
                  <li>Add voice-controlled lamps or a fan.</li>
                  <li>
                    Set routines to wake up gently with smart lights and music.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-teal-600">
                  Garage & Entryways:
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Install a smart door lock or garage opener for secure,
                    keyless entry.
                  </li>
                  <li>Monitor with cameras and doorbells while you’re away.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-teal-600">Outdoors:</h3>
                <ul className="list-disc pl-5">
                  <li>
                    Use weatherproof smart cameras to keep your yard secure.
                  </li>
                  <li>
                    Control outdoor lighting and sprinklers from your phone.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-2xl mb-3">
              Installation & Maintenance Made Easy
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Most devices are plug-and-play or require a simple app pairing.
              </li>
              <li>
                Use manufacturer apps for setup and control (like Kasa, Wyze,
                Alexa, Google Home).
              </li>
              <li>
                Update firmware regularly for optimal performance and security.
              </li>
              <li>
                Clean devices (like cameras or sensors) periodically for best
                results.
              </li>
              <li>
                Store user manuals and passwords in a secure app or notebook.
              </li>
            </ul>
          </div>
        </div>
        {/* fqs */}
        <div className="w-full  mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">❓ FAQs</h2>
          {/* question */}
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-4"
              >
                <AccordionTrigger className="text-lg font-semibold bg-gray-100 p-4 rounded-2xl shadow-md">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-white p-4 rounded-b-2xl shadow-md border-t">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="my-10 space-y-6 text-base text-gray-800">
          <div>
            <h2 className="font-semibold text-2xl mb-3">
              Final Thoughts & Call to Action
            </h2>
            <p>
              Whether you're enhancing comfort, improving security, or saving
              time, these smart home gadgets on Amazon are a game-changer for
              modern living. You don’t need to break the bank to enjoy a
              smarter, more efficient home.
            </p>
          </div>

          <div>
            <p className="font-medium">
              🎯 Ready to upgrade your home the smart way?
            </p>
            <p>
              👉 Click the links above to explore these gadgets on Amazon, read
              user reviews, and grab the best deals today.
            </p>
          </div>

          <div>
            <p className="italic text-gray-700">
              Every product you purchase through these links helps us keep
              providing value-packed guides like this—thank you for your
              support!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartHomeGadgets;
