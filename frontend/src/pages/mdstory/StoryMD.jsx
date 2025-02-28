import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";

const StoryMD = () => {
  return (
    <>
      <HeaderV1 headerClass="dark" style={{ marginBottom: 30 }} />
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          padding: "20px",
          marginTop: "150px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <img
          loading="lazy"
          src="/img/owner/rajendra.png"
          alt="Rajendra"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>
            My name is Rajendra Baral, and I am the owner of Forest Sports and
            Recreation Center, a dream I brought to life in 2020. But this story
            isn’t just about the joy and excitement that come with running a
            sports and recreation center. It's also a story of resilience, grit,
            and a constant fight against the odds.
          </p>

          <p>
            The idea of Forest Sports and Recreation Center began as a simple
            dream: a place where people could escape their everyday stresses,
            whether by kicking a ball on the futsal court, taking a refreshing
            dip in the pool, or simply unwinding at our bar and café. I
            envisioned it as a haven of activity and relaxation, nestled amidst
            the tranquility of nature. But what started as a dream quickly
            turned into a challenge that tested every ounce of my determination.
          </p>

          <p>
            We opened our doors in 2020, right when the world was in the grips
            of the COVID-19 pandemic. It was a time when everything was
            uncertain, when fear and isolation were the new normal. Establishing
            a sports and recreation center at such a time felt like swimming
            against a tidal wave. The lockdowns meant empty courts and an eerily
            silent pool. The café chairs remained stacked, and the bar counters
            gathered dust. I watched as months of planning, investment, and hard
            work were overshadowed by a global crisis.
          </p>

          <p>
            Financially, it was devastating. Like many others, I had put
            everything on the line for this venture. I had taken loans, dipped
            into my savings, and even asked for help from friends and family to
            turn this vision into a reality. As the pandemic stretched on, it
            was not just a matter of losing money; it was the fear of losing the
            dream itself. There were days when I sat alone in the empty
            facility, the silence amplifying my doubts and fears. Was this the
            right decision? Had I made a mistake by pushing forward amidst such
            uncertainty?
          </p>

          <p>
            But giving up was never an option. Despite the financial recession
            that hit the country and the continuous setbacks, I had to find ways
            to keep the dream alive. We adapted. The futsal courts, which were
            once filled with the laughter and energy of players, were repurposed
            to meet the safety guidelines. We introduced smaller, private
            training sessions, ensuring that people could still enjoy sports in
            a safe environment. We also pivoted the café to offer takeout
            services and made use of every opportunity to engage the community,
            even if it meant taking a financial hit.
          </p>

          <p>
            The struggle wasn't just professional; it was deeply personal. I
            remember the sleepless nights, the endless calculations to stretch
            every rupee, and the countless times I questioned my own decisions.
            But I also remember the small victories. The first time a group of
            kids returned to play futsal, the laughter that once again echoed
            across the fields, and the first family that enjoyed a safe meal at
            our café post-lockdown. These moments, however small, were the fuel
            that kept me going.
          </p>

          <p>
            It’s now 2024, and while the challenges haven't disappeared, the
            storm has passed, leaving behind lessons of resilience and the
            unbreakable spirit of community. Forest Sports and Recreation Center
            is still standing, not just as a business, but as a testament to
            what we can achieve when we refuse to surrender to circumstances.
            Our futsal courts are alive with the spirit of the game, our
            swimming pool is once again a place of joy, and our bar and café
            have become gathering spots where people share not just food and
            drinks, but stories of survival and hope.
          </p>

          <p>
            This journey has taught me that success isn’t about avoiding the
            storms but about learning to navigate through them. It's about the
            late nights spent worrying about payroll, the mornings waking up to
            uncertainty, and still choosing to fight for what you believe in.
            The Forest Sports and Recreation Center is more than just a business
            to me. It’s a reminder that even in the darkest times, there is a
            path forward. We just have to be willing to keep walking, one step
            at a time.
          </p>
        </div>
      </div>
      <FooterV1 />
    </>
  );
};

export default StoryMD;
