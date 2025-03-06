import futsal1 from "/img/fsa_image/futsal2.webp";
import swim1 from "/img/fsa_image/swim1.webp";
import swim2 from "/img/fsa_image/swim2.webp";
import interior from "/img/fsa_image/futsal.webp";

const HomeAboutIndex = () => {
  const sections = [
    {
      img: futsal1,
      title: "FUTSAL",
      description:
        "Bring your friends and play futsal. Whether you're looking to join a match or just play for fun, Forest Sports and Recreation Centre has the perfect spot for you.",
    },
    {
      img: swim1,
      title: "SWIMMING",
      description:
        "Biggest Swimming Pool with Training Facilities. With professional instructors and a safe, clean environment, it’s ideal for both beginners and seasoned swimmers.",
    },
    {
      img: swim2,
      title: "SWIMMING",
      description:
        "Biggest Swimming Pool with Training Facilities. With professional instructors and a safe, clean environment, it’s ideal for both beginners and seasoned swimmers.",
    },
    {
      img: interior,
      title: "RESTAURANT",
      description:
        "Enjoy delicious meals in a cozy atmosphere. Our restaurant offers a variety of cuisines prepared by top chefs, perfect for a post-game meal or a casual dining experience.",
    },
  ];

  return (
    <section className="default-padding px-4 md:px-[75px]">
      <div className="container text-center">
        <div className="row">
          {sections.map((section, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
              <div
                className="w-full overflow-hidden shadow-lg rounded"
                style={{ height: "400px" }} 
              >
                <img
                  src={section.img}
                  alt={section.title.toLowerCase()}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-black font-bold text-2xl md:text-[30px] leading-[45px] tracking-[0.02em] mt-3">
                {section.title}
              </p>
              <p className="text-black/85 w-full font-bold text-sm md:text-[12px] leading-[25px] tracking-[0.02em]">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutIndex;
