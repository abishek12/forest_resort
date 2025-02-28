const ImageGrid = ({ images }) => {
  if (!images.length) return null;

  switch (images.length) {
    case 1:
      return (
        <div className="">
          <img
            src={images[0]}
            alt="Post content"
            className="tw-rounded-lg tw-w-full tw-object-cover tw-max-h-96"
          />
        </div>
      );

    case 2:
      return (
        <div className="tw-grid tw-grid-cols-2 tw-gap-1">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg"
            />
          ))}
        </div>
      );

    case 3:
      return (
        <div className="tw-grid tw-grid-cols-2 tw-gap-1">
          <img
            src={images[0]}
            alt="Post content 1"
            className="tw-w-full tw-h-[450px] tw-object-cover tw-rounded-lg"
          />
          <div className="tw-grid tw-grid-rows-2 tw-gap-1">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post content ${index + 2}`}
                className="tw-w-full tw-h-[224px] tw-object-cover tw-rounded-lg"
              />
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="tw-grid tw-grid-cols-2 tw-gap-1">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg"
            />
          ))}
        </div>
      );

    default:
      return (
        <div className="tw-grid tw-grid-cols-2 tw-gap-1">
          {images.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Post content ${index + 1}`}
              className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg"
            />
          ))}
          <div className="tw-grid tw-grid-cols-2 tw-gap-1 tw-col-span-2">
            {images.slice(2, 3).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post content ${index + 3}`}
                className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg"
              />
            ))}
            {images.length > 4 && (
              <div className="tw-relative tw-col-span-1">
                <img
                  src={images[3]}
                  alt={`Post content 4`}
                  className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg tw-brightness-50"
                />
                <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center tw-text-white tw-text-2xl tw-font-semibold">
                  +{images.length - 4}
                </div>
              </div>
            )}
          </div>
        </div>
      );
  }
};

export default ImageGrid;
