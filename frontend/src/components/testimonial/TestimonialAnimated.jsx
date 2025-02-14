import { cn } from "../../utils/cn";
import { Spotlight } from "../ui/aceternity_ui/spotlight";
import BoxReveal from "../ui/magic_ui/box-reveal";
import Marquee from "../ui/magic_ui/marquee";

const reviews = [
  {
    name: "Rajib Gautam",
    designation: "Chief Executive Officer, Tuna",
    body: "Amazing Facility for All Ages! Forest Sports and Recreation Center has become our go-to spot for weekend activities. The swimming pool is clean and well-maintained, perfect for both beginners and seasoned swimmers. My kids love the futsal courts too – they're spacious and safe. The friendly staff makes the experience even better!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Saurav Dhakal",
    designation: "Chief Executive Officer, Golden",
    body: "Great Atmosphere and Fantastic Amenities!I’ve been coming to Forest Sports for their futsal leagues, and it’s been a blast. The courts are high quality, and the atmosphere is always full of energy. After a great game, I can cool off with a swim in their well-kept pool. Highly recommend this place for anyone looking to stay active!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Puskal Koirala",
    designation: "Head of Marketing",
    body: "Top-notch Experience Every Time! Whether I’m doing laps in the pool or playing futsal with friends, Forest Sports Center never disappoints. The facilities are excellent, and they keep everything in top shape. Plus, the environment is so welcoming that it makes each visit something to look forward to!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Govinda Bhattarai",
    designation: "Chief Executive Officer, LeetHall",
    body: "Perfect for Family Fun! Forest Sports and Recreation Center is a fantastic spot for family outings. My kids adore the swimming lessons here, and my husband and I enjoy playing futsal with our friends. The staff is helpful and the amenities are well-organized. A great place for family fun and fitness!",
    img: "https://avatar.vercel.sh/jane",
  },
];

const firstRow = reviews.slice(0, reviews.length);
// const secondRow = reviews.slice(reviews.length / 2);

export const ReviewCard = ({ img, name, designation, body }) => {
  return (
    <figure
      className={cn(
        "tw-relative tw-w-64 md:tw-w-96 tw-cursor-pointer tw-overflow-hidden tw-rounded-xl tw-border tw-p-4",
        // light styles
        "tw-border-gray-950/[.1] tw-bg-[#228b22]/[0.9]",
        // dark styles
        "dark:tw-border-gray-50/[.1] tw-bg-[#228b22]/[0.9]"
      )}
    >
      <div className="tw-flex tw-flex-row tw-items-center tw-gap-2">
        <img
          loading="lazy"
          className="tw-rounded-full tw-bg-[#d2f6d2]"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="tw-flex tw-flex-col">
          <figcaption className="tw-text-sm tw-font-medium tw-text-white">
            {name}
          </figcaption>
          <p className="tw-text-xs tw-font-medium tw-text-white/40">
            {designation}
          </p>
        </div>
      </div>
      <blockquote className="tw-mt-2 tw-text-sm tw-text-white">
        {body}
      </blockquote>
    </figure>
  );
};

export const TestimonialMarquee = () => {
  return (
    <>
      <div className="testimonialsbg tw-relative tw-flex tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden tw-border tw-py-20 md:tw-shadow-xl">
        <Spotlight
          className="-tw-top-40 tw-left-0 sm:tw-left-64 md:tw-left-[200px] lg:tw-left-[700px] md:-tw-top-20"
          fill="yellow"
        />
        <Spotlight className="md:tw-left-96" fill="orange" />
        <Spotlight className="md:tw-left-96" fill="white" />
        <div className="site-heading">
          <h2 className="title tw-text-white ">
            <BoxReveal boxColor={"#d2f6d2"}>What people say</BoxReveal>
          </h2>
        </div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.designation} {...review} />
          ))}
        </Marquee>
        {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.designation} {...review} />
          ))}
        </Marquee> */}
        <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-left-0 tw-w-1/3 md:tw-bg-gradient-to-r tw-from-[#316C31]"></div>
        <div className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-w-1/3 md:tw-bg-gradient-to-l tw-from-[#316C31]"></div>
      </div>
    </>
  );
};
