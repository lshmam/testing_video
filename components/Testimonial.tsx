import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
  <div className="flex justify-center mb-8 bg-white">
    <Image
      src="/EV_Driving/images/google_review.png"
      alt="Sarah J."
      width={150}
      height={150}
      className="flex justify-center items-center"
    />
  </div>
  <div className="container px-4 md:px-6 text-textColor1 mx-auto">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">
      What Our Students Say
    </h2>
    <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-textColor1 text-center mb-8">
      Don't just take our word for it. Here's what some of our successful
      students have to say about their experience with EastVan Driving Academy.
    </p>
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
      <Card>
        <CardContent className="p-6 h-full">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
              <img
                src="/EV_Driving/images/student1.jpeg"
                alt="Julia Chow"
                className="rounded-lg w-full md:w-auto max-w-[300px]"
              />
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-textColor1">
                    Adrian R.
                  </h3>
                  <p className="text-sm text-textColor1">Passed First Time</p>
                </div>
                <p className="text-textColor1">
                  "
                  <span className="font-extrabold">
                    East Van Driving Academy
                  </span>{" "}
                  is fantastic! Harkomal is an excellent instructor who made
                  driving lessons straightforward and relaxing. His clear
                  instructions and flexible scheduling helped me
                  <span className="font-extrabold text-textColor1">
                    {" "}
                    pass my road test
                  </span>{" "}
                  with ease. I highly recommend this driving school!"
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 h-full">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
              <img
                src="/EV_Driving/images/student2.jpeg"
                alt="Julia Chow"
                className="rounded-lg w-full md:w-auto max-w-[300px]"
              />
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-textColor1">
                    Souravpreet Singh Sandhu
                  </h3>
                  <p className="text-sm text-textColor1"> Passed First Time</p>
                </div>
                <p className="text-textColor1">
                  "I had a{" "}
                  <span className="font-extrabold text-textColor1">
                    {" "}
                    great experience
                  </span>{" "}
                  with my instructor at EastVan Driving Academy! They were
                  incredibly patient and helped me build confidence behind the
                  wheel. Each lesson was tailored to my learning pace, making
                  the process smooth and enjoyable. The car was well-maintained,
                  and my instructor’s knowledge of Vancouver’s roads and test
                  routes really helped me feel prepared. Thanks to their
                  guidance, I passed my road test with ease. Highly recommend
                  EastVan Driving Academy if you’re looking for a skilled and
                  supportive instructor!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 h-full">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
              <img
                src="/EV_Driving/images/student3.jpeg"
                alt="Julia Chow"
                className="rounded-lg w-full md:w-auto max-w-[300px]"
              />
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-textColor1">John C.</h3>
                  <p className="text-sm text-textColor1">Passed First Time</p>
                </div>
                <p className="text-textColor1">
                  "My experience with Harkomal was exceptional. As an
                  instructor, he offers maximum flexibility to learners, which I
                  truly appreciate. This approach helped me feel comfortable and
                  confident throughout the learning process. I{" "}
                  <span className="font-extrabold text-textColor1">
                    {" "}
                    highly recommend
                  </span>{" "}
                  this school to others seeking a great road test experience.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 h-full">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col xl:flex-row items-center gap-4 justify-center">
              <img
                src="/EV_Driving/images/student5.jpeg"
                alt="Julia Chow"
                className="rounded-lg w-full md:w-auto max-w-[300px]"
              />
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-textColor1">
                    Sanjeev K.
                  </h3>
                  <p className="text-sm text-textColor1">Passed First Time</p>
                </div>
                <p className="text-textColor1">
                  "I had a fantastic experience with{" "}
                  <span className="font-extrabold text-textColor1">
                    East Van Driving academy!
                  </span>{" "}
                  The instructors were incredibly patient, professional, and
                  supportive throughout the entire learning process. They
                  tailored the lessons to fit my needs and worked with me on
                  areas where I needed extra practice, helping me build
                  confidence and master skills for the ICBC road test. Their
                  approach to teaching safe driving habits was practical and
                  effective, making me feel fully prepared. Scheduling was easy,
                  and they were accommodating with my availability. I highly
                  recommend East Van Driving School to anyone looking for
                  high-quality instruction and an encouraging learning
                  environment
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>;
