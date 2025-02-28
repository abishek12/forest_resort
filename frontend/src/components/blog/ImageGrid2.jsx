const ImageGrid2 = ({ images }) => {
  if (!images.length) return null;

  const renderImages = () => {
    switch (images.length % 2 === 0) {
      case true:
        return (
          <div className="mt-4 tw-grid tw-grid-cols-2 tw-gap-1">
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

      case false:
        return (
          <div className="mt-4 tw-grid tw-grid-cols-2 tw-gap-1">
            {images.slice(0, 1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Post content ${index + 1}`}
                className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg tw-col-span-2"
              />
            ))}
            <div className="tw-grid tw-grid-cols-2 tw-gap-1 tw-col-span-2">
              {images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Post content ${index + 3}`}
                  className="tw-w-full tw-h-72 tw-object-cover tw-rounded-lg"
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return renderImages();
};

export default ImageGrid2;
