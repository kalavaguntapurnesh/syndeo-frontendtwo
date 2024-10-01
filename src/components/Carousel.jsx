import Accordion from "../components/Accordion";

const Carousel = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4">
                <div className="pt-4">
                  <h1 className="mx-auto max-w-[800px] text-center md:text-5xl text-3xl font-bold tracking-tight">
                    Scheduling for entrepreneurs, freelancers, and leaders
                  </h1>
                </div>

                <div className="text-center">
                  <p className="text-xl text-gray-600">
                    Syndeo's made for teams of all sizes.{" "}
                    <a href="/pricing" className="text-blue-500">
                      {" "}
                      Compare plans
                    </a>
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4T0cBbXXIQ3CRWIaQlGxBD/0879f3b9df1ef3a4cd13bdcf910344e5/Frame_4104_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-3xl text-colorTwo font-bold">
                            Individuals
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Keep your calendar in order and book meetings with
                            clients and teammates faster.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4YzizdfYjYbQzK1UqnWXeN/20ae4c6430d4d3fce733b638c280750b/Frame_4103_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold">
                            Teams
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Add teammates to invites and booking pages and use
                            shared calendars.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-colorFour font-semibold py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4IqbCNJne6WmRSe7XdEM7w/6d1fc73b3d5fc612bdb484a64598a7c7/Frame_4102_2x.png?w=1078&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold">
                            Enterprise
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Manage your entire organization’s scheduling needs
                            securely.
                          </p>
                        </div>

                        <div className="flex justify-center">
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 font-semibold text-colorFour py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-20">
                <div className="pt-4">
                  <h1 className="text-4xl font-bold tracking-tight text-center">
                    Fits seamlessly into the way{" "}
                    <span className="text-colorFour">you work</span>
                  </h1>
                </div>

                <div className="pt-4 text-center">
                  <p className="text-xl text-gray-600">
                    Syndeo offers many integrations to save you time, reduce
                    duplication and boost your productivity.
                  </p>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-3 md:gap-8 gap-6 md:pt-12 pt-8">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/google-cal.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/zoom.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/outlook.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/gmail.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/zapier.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/google-meet.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/chrome-48.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/stripe.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/ms-teams.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/linkedin-icon.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/fastmail.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/facebook-icon.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/google-analytics.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/office365.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/instagram-icon.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center pt-8">
                  <button class="border-[1px] border-colorFour bg-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-white py-2 px-6 rounded-full">
                    See all the Integrations
                  </button>
                </div>
              </div>

              <div className="pt-20">
                {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-12">
                  <div className="flex flex-col justify-start">
                    <div className="w-full flex justify-center items-center pt-6">
                      <div className="w-full">
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

                    <div className="flex lg:justify-start justify-center items-center pt-8">
                      <a
                        href="/login"
                        className="bg-colorFour hover:bg-[#14a800] font-semibold outline-none
              rounded-3xl hover:shadow-form transition duration-1000 ease-in-out md:text-base text-sm text-white px-8 md:py-3 py-2 text-center ml-2"
                      >
                        Sign up to Syndèo
                      </a>
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/illustrations/features/appointmenttypes@2x.png"
                      alt=""
                    />
                  </div>
                </div> */}

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-12">
                  <div className="space-y-2">
                    <div className="lg:hidden block">
                      <h1 className=" text-4xl font-bold text-center">
                        Cancel & reschedule in just a{" "}
                        <span className="text-colorFour">few clicks</span>
                      </h1>
                    </div>
                    <div className="lg:hidden block pt-2">
                      <p className="text-center font-normal text-base">
                        It can be done using the following steps:
                      </p>
                    </div>
                    <div className="lg:block hidden">
                      <h1 className="font-bold md:text-5xl text-4xl">
                        Cancel & reschedule in just a{" "}
                        <span className="text-colorFour">few clicks</span>
                      </h1>
                    </div>
                    <div className="lg:block hidden pt-2">
                      <p className=" font-normal text-lg">
                        It can be done using the following steps:
                      </p>
                    </div>

                    <div className="flex md:justify-start justify-center flex-col mt-8">
                      <div className=" mb-3">
                        <div className="grid grid-cols-6 ">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl text-colorFour">
                              1
                            </h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-start">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                First, select the desired eSports product in the
                                product overview and open it in our 3D
                                configurator
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl text-colorFour">
                              2
                            </h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-start">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Then you can choose between different custom
                                eSports jersey designs, which you can then
                                refine according to your own preferences.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl text-colorFour">
                              3
                            </h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                You can add patterns and colour gradients to
                                give your eSports jersey an extra special touch.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" mb-4">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl text-colorFour">
                              4
                            </h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Team logos, badges, player numbers and names can
                                be easily added via drag & drop or via the menu
                                bar.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className=" mb-3">
                        <div className="grid grid-cols-6">
                          <div className="flex justify-center items-center col-span-1">
                            <h1 className="font-semibold text-4xl text-colorFour">
                              5
                            </h1>
                          </div>
                          <div className="col-span-5 flex justify-start items-center">
                            <div>
                              <h1 className="text-gray-900 text-base">
                                Once you've designed your custom eSports jersey,
                                you can use our voting function to have your
                                friends choose their favourite eSports jersey
                                design.
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center items-start">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hub/25078520/hubfs/2022/illustrations/howitworks/calendar_bookings@2x.png?width=800&name=calendar_bookings@2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
