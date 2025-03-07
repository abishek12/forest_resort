import futsal1 from "/img/fsa_image/futsal2.webp";
import swim1 from "/img/fsa_image/swim1.webp";

const HomeAboutIndex = () => {
  let data = [
    {
      title: "FUTSAL",
      description:
        "Bring your friends and play futsal. Whether you're looking to join a match or just play for fun, Forest Sports and Recreation Centre has the perfect spot for you.",
      image: futsal1,
    },
    {
      title: "SWIMMING",
      description:
        "Enjoy a refreshing swim in our top-notch swimming facilities. Perfect for all skill levels.",
      image: swim1,
    },
  ];

  return (
    <div className="container my-5">
      <div className="row g-4">
        {" "}
        {/* Added spacing between columns */}
        {data.map((item, index) => (
          <div key={index} className="col-12 col-md-6">
            <img
              src={item.image}
              alt={item.title}
              className="img-fluid rounded w-100"
              style={{
                width: 400,
                height: 400,
              }}
            />
            <p className="h3 my-3 text-center text-md-start">{item.title}</p>
            <p className="text-black-50 text-center text-md-start px-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeAboutIndex;
