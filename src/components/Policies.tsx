import React, { useState } from "react";
import Image from "next/image";
export default function Policies({
  data: { selectedTab, setSelectedTab },
}: {
  data: any;
}) {
  const [isAccepted, setAccepted] = useState(false);
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                YOU’VE GOT A FRIEND CHAT AND MENTORING SERVICE
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mission Statement
              </h1>
              <p className="mt-6 text-lg italic leading-8 text-gray-500">
                {"“"}To be neutral but caring listeners and helpers to whoever
                we are serving to the best of our professional abilities. To
                hold the space for our clients to vent or share any of their
                life’s problems in a supportive atmosphere.
                <br />
                We are committed to helping people get out of their ruts which
                are holding them back from creating a better life for themselves
                {"’’"}
              </p>
            </div>
          </div>
        </div>
        <div className="p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            width={1600}
            height={1200}
            className="rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/assets/policies.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-600 lg:max-w-lg">
              <p>
                We are so glad that you have joined You’ve Got a Friend Chat and
                Mentoring Service, where we like to say, Life Coaching with a
                Twist!
                <br />
                <br />
                We are excited to work with you in whatever capacity you so wish
                whether that be just someone to talk to if you so desire or
                whether you would like our help to assist you on goals to get
                out of the circumstances that are not serving you to a better
                more productive place. We also have a drawer chest of different
                healing exercises we can draw from to help you should you want
                your session to include that to help you destress and calm any
                anxieties you may be experiencing.
                <br />
                <br />
                You let us know what you would like your session to best help
                you with that day. You have the choice, you have the option. We
                are all about giving our clients the option to choose what they
                would like for their sessions. That is where we are different
                than most coaching services, but we also believe in making it
                affordable so more people in the world can benefit from
                accessing more help and support.
                <br />
                <br />
                Below are the policies which need to be read and agreed to upon
                commencing your sessions. The policies are first and then after
                you have signed off on your agreement, there will be an Intake
                form for you to fill out, which is essentially a personality
                profile which will help your coach to get a better idea of you
                and therefore how to best be of service and maximize all of your
                mentoring/coaching sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] lg:w-[90%] mx-auto flex flex-col space-y-3">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          POLICIES FOR CHATTING/ MENTORING/ COACHING{" "}
        </h2>
        <p className="mt-6 text-gray-600">
          We don’t anticipate that some of the following conditions will happen
          but also understand that there are so many people out there with
          different mind sets that we want to include those policies should
          those circumstances transpire. Herein below will also include how our
          Satisfaction Guarantee works. After you have read the policies, please
          indicate your agreement by checking the appropriate box below the
          policies.
        </p>
        <ol className="list-decimal list-inside flex flex-col space-y-3 text-gray-500 w-[90%] py-6">
          <li>
            At You’ve Got a Friend Chat and Mentoring Service, we are here to
            lend a compassionate, non-judgemental and neutral ear to your
            concerns. Any information you share with your mentor/coach will be
            held in the strictest confidence and not shared to anyone or any 3rd
            party.
          </li>

          <li>
            We are not trained Therapists so cannot help with complex
            psychiatric problems, nor can we recommend medications. Please ask
            your Doctor or Psychiatrist if you have one about that if that is a
            concern.
          </li>

          <li>
            We are not a suicide prevention line so if you are at a point where
            you may be wanting to do harm to yourself or to others, we recommend
            you contact your local suicide prevention line as they are better
            trained to help assist people encountering that crisis. However with
            that being said, if you are in a trauma situation and feel desperate
            for someone to talk to but not in the condition as described in
            previous sentence, we are definitely here for you. Just go to our
            website at www.ygafmentoring.com and book a session with us. Our
            goal is to be readily available for our clients however, keep in
            mind that availability is based upon your mentor/coach’s schedule.
          </li>

          <li>
            Your mentor/coach will do her best to be that compassionate person
            to help with any trials you may be facing or even if you just need
            someone to talk to about anything that ails you. Sometimes, a
            solution may not even be there to the issue you are facing in the
            moment, but you just need someone to hold that space for you during
            your call. We will be there for you to hold that space. There also
            could be times that there is a solution if we dig deep enough to
            find one and your mentor/coach will be there to assist you in that
            way as well. In that there are so many different personalities out
            there with different ways each of us views the world, there may be
            times that you and your mentor/ coach may not agree with how you
            both view the world. We are not here to engage in any heated debates
            over differing points of views. If there is such a case, as your
            professional mentor/coach, we will remain neutral. Our main
            objective is to be that caring ear for you. Also, as your
            coach/mentor, we will be that person to hold you accountable towards
            your goals and action steps towards positive changes in your life if
            that is what you are needing.
          </li>

          <li>
            If a client is being overly aggressive towards their mentor/coach to
            the point where they are yelling or using swear words, your
            mentor/coach has the right to end the call. If it ever gets to that
            point, the procedure will be your mentor/coach will issue one
            warning. If the behaviour continues, she has the right to politely
            end the call. Any remaining time on that call will be lost at the
            client’s expense as a warning was given but aggressive behaviour did
            not cease. After the session, if you have future sessions booked
            with us, the procedure will be your mentor/coach will reach out to
            you via email to see how you are feeling about continuing with your
            remaining calls. At that point, if during this follow up, it has
            been agreed by you or your mentor/coach to not carry on with your
            remaining sessions, then a refund will be issued for any remaining
            ones less a 20% fee taken off of the refund amount for
            administrative costs associated with processing the refund.
          </li>

          <li>
            Using sexual innuendos or conversations especially directed towards
            your mentor/coach will not be tolerated. Your calls could consist of
            talks about your relationships and that could include talking about
            your sexual relations if you so desire, however, it would need to be
            kept to a discreet and professional level in terms of the
            information shared. If the sexual discussion gets more graphic or
            outside of professional standards or is directed towards your
            mentor/coach, then the procedure will be the same as described in
            the previous section above.
          </li>

          <li>
            In your calls, we will endeavour to steer clear of anything of a
            political nature as once again due to the varying different points
            of views everyone has when it comes to how you view the world and
            politics, it is better to steer clear of this topic. Again, if the
            client wants to bring up political views, we as professionals will
            remain neutral on this subject. With that being said, in your
            chatting sessions, we do not mind discussing world events as long as
            it doesn’t get too political.
          </li>
        </ol>
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          Refunds and Satisfaction Guarantee{" "}
        </h2>
        <p className="text-gray-500 w-[90%]">
          We will strive to give the very best service to each and every one of
          our clients, however we understand that we may not be able to please
          every person we serve. We therefore have a satisfaction guarantee in
          place. If you have purchased more than one session with us. If for any
          reason you are not satisfied with your service, then you are entitled
          to a refund for the remaining sessions booked. The procedure in these
          cases will be that you will need to email us at info@ygafchatandmentor.com
          with your reason for wanting a refund. Your opinions are important to
          us so we will use that as feedback to help to continually better and
          improve our services. We will refund you for any remaining sessions
          less a 20% fee taken off of the refund amount for administration fees
          associated with processing the refund. Refunds are issued within 3
          days after we receive your email. Check with your bank for their
          processing times for when you will receive it into your bank account.
        </p>
        <div>
          <div className="flex items-center pt-4 py-12">
            <input
              checked={isAccepted}
              onClick={() => setAccepted(!isAccepted)}
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              onClick={() => setAccepted(!isAccepted)}
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree to the Coaching policies of
              <span className="text-purple-600">
                {" "}
                YOU’VE GOT A FRIEND CHAT AND MENTORING SERVICE
              </span>
            </label>
          </div>
          <button
            disabled={!isAccepted}
            className={`py-2 px-6 rounded bg-purple-700 text-white font-medium mr-3 ${isAccepted ? "opacity-100" : "opacity-40"
              }`}
            onClick={() => setSelectedTab(2)}
          >
            Continue
          </button>
          <button className="py-2 px-6 rounded bg-gray-300 font-medium">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
