const AboutOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-28 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-4 flex flex-col justify-center">
                <div className="flex md:justify-start justify-center">
                  <h1 className="md:text-4xl text-3xl font-bold tracking-tight">
                    Our <span className="text-colorFour">Story</span>
                  </h1>
                </div>
                <div className="text-gray-600 text-base space-y-2 flex flex-col md:justify-start justify-center">
                  <p className="md:text-start text-center">
                    We've been solving scheduling problems since 2008, with our
                    first app, WhenIsGood. YouCanBookMe launched in 2011 and is
                    self-funded, profitable, and privately owned.
                  </p>
                  <p className="md:text-start text-center">
                    We pride ourselves on being product-led and customer
                    focused. Our customers and yours! YCBM is optimized to help
                    you create the best booking experience for the people who
                    schedule time with you.
                  </p>
                  <p className="md:text-start text-center">
                    We're good at what we do, some of the biggest names in our
                    industry use and validate our tool, and our customers love
                    us.
                  </p>
                  <p className="md:text-start text-center">
                    And we've done all this while being deliberately small,
                    nimble, and fully remote — we're a tiny company that does
                    big things.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://25078520.fs1.hubspotusercontent-eu1.net/hub/25078520/hubfs/2022/imagery/people/about-us-1.png?width=800&name=about-us-1.png"
                  alt=""
                  className="w-3/4"
                />
              </div>
            </div>

            <div className="mt-20 bg-slate-100 rounded space-y-4 md:h-60">
              <div className="text-center md:pt-8 pt-6">
                <h1 className=" text-4xl font-bold tracking-tight">Syndèo in numbers</h1>
              </div>
              <div className="mx-auto max-w-[800px] md:pb-2 pb-6">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="text-colorFour text-5xl font-bold tracking-tight">
                      <h1>2023 </h1>
                    </div>
                    <div className="text-gray-600">
                      <p>Year Founded</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="text-colorFour text-5xl font-bold tracking-tight">
                      <h1>180+</h1>
                    </div>
                    <div className="text-gray-600">
                      <p>Countries Availability</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-1">
                    <div className="text-colorFour text-5xl font-bold tracking-tight">
                      <h1>24/7</h1>
                    </div>
                    <div className="text-gray-600">
                      <p>Application Usage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <div className="text-center md:pt-8 pt-6">
                <h1 className=" text-4xl font-bold tracking-tight">Our Company Values</h1>
              </div>
              <div className="text-center text-gray-500 md:text-xl">
                <p>
                  Our company values and behaviors are important to us. They are
                  defined by core principles, which will be the same whether the
                  company is 1 or 1,000 people strong.
                </p>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8 mx-auto max-w-[1400px]">
                <div className="relative flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/excellence-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Commitment to excellence</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Commit to excellence. Embrace a clean machine mentality,
                        if it's worth doing, do it right, and pursue quality
                        over quantity.
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[-8px] bg-colorFour top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                </div>

                <div className="relative flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/share-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Curiosity and optimism</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Anything is possible. Learn, innovate, and have a desire
                        to find things out while enjoying the journey.
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[-8px] bg-colorFour top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                </div>
                <div>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/curiosity.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Find and share the solution</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Enjoy the process. Work together to spot and solve
                        problems, and feel satisfied by problems being solved,
                        no matter by whom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8 mx-auto max-w-[1400px]">
                <div className="relative flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/transparency.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Confidence in transparency</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Be instinctively open. Listen, learn, adapt, and
                        document your journey.
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[-8px] bg-colorFour top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                </div>

                <div className="relative flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/simple.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Simple is beautiful</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Empower others through clarity. Seek strong, simple, and
                        elegant solutions.
                      </p>
                    </div>
                  </div>
                  <div className="absolute right-[-8px] bg-colorFour top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                </div>
                <div>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <div>
                      <img
                        src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/2022/icons/company-values/respect-1.svg"
                        alt=""
                      />
                    </div>
                    <div className="text-center md:text-2xl text-xl font-semibold text-colorFour">
                      <h1>Tolerance and respect</h1>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">
                        Positively tolerate everyone. Respect all cultures,
                        faiths, and freedoms, and don't oppress people with
                        dogma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto px-6 lg:px-8 pt-20 pb-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-xl lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-colorFour sm:text-4xl">
                      Subscribe to our Syndèo.
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-500">
                      And we will look after everything. You just need not to
                      worry.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                      <label for="email-address" class="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autocomplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-colorOne px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-colorTwo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <div className="rounded-md text-colorFour p-2 ring-1 ring-white/10">
                        <svg
                          class="h-6 w-6 text-colorTwo"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                          />
                        </svg>
                      </div>
                      <dt className="mt-4 font-semibold text-colorTwo">
                        Weekly Updates
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-500">
                        We are initiating the weekly updates which contains
                        in-depth information on bug free experience.
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="rounded-md text-colorFour p-2 ring-1 ring-white/10">
                        <svg
                          class="h-6 w-6 text-colorTwo"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                          />
                        </svg>
                      </div>
                      <dt className="mt-4 font-semibold text-colorTwo">
                        No Spam
                      </dt>
                      <dd className="mt-2 leading-7 text-gray-500">
                        We are spam free and we try to understand the user
                        privacy and their data security.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
