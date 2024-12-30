import Accordion from "../components/Accordion";

const FAQ = () => {
  return (
    <div className="lg:pt-12 pt-8 pb-12">
      <div className="relative">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center text-center justify-center ">
                  <div className="h-4 w-1 bg-mainColor"></div>

                  <p className="ml-2 lg:text-lg font-semibold text-mainColor">
                    Got any doubts?
                  </p>
                </div>

                <div className="text-center mt-4">
                  <h3 className="lg:text-4xl text-2xl font-bold text-headingColor">
                    Frequently asked questions
                  </h3>
                </div>

                {/* <div className="text-gray-600 text-center">
                  <p>
                    Streamline your scheduling process with precision and ease,
                    leaving a lasting positive impression on clients and
                    stakeholders effortlessly.
                  </p>
                </div> */}
              </div>
              <div className="w-full flex justify-center items-center pt-8">
                <div className="md:w-5/6 w-full">
                  <Accordion
                    title="How can I manage all the bookings made in the booking software?"
                    answer="You can have complete control over all the bookings that are made in the system. You can set flexible business hours at both the staff and service levels, set a limit on the number of bookings that can be made per client, and choose how much in advance clients can book, reschedule, or cancel their appointments."
                  />
                  <Accordion
                    title="Can I sync my personal calendar with an online booking platform?"
                    answer="
                      Yes. Appointy offers a two-way sync with personal and work calendars like Google Calendar, iCal, Outlook, and more. You can export bookings from Syndèo to personal calendar, and also import bookings from your personal calendar to Syndèo to block those times."
                  />
                  <Accordion
                    title="Can different staff members have their own login?"
                    answer="Yes, Syndèo lets your staff members manage their bookings and schedule by enabling separate staff logins. The system allows the admin to automatically track staff schedules, productivity, etc."
                  />
                  <Accordion
                    title="How can our customers contact us for immediate guidance?"
                    answer="You can contact us through mail on syndèoservices@clouddatanetworks.com or go to the Contact page for further information. And we are ready to help."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
