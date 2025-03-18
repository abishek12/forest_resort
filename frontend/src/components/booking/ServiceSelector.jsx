import React from "react";

const ServiceSelector = ({ service, setService }) => {
  const handleServiceChange = (event) => setService(event.target.value);

  return (
    <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 tw-pb-6">
      <div className="tw-flex tw-place-items-center tw-gap-2">
        <input type="radio" name="service" value="swimming" onChange={handleServiceChange} />
        <label>Swimming Pool</label>
      </div>
      <div className="tw-flex tw-place-items-center tw-gap-2">
        <input type="radio" name="service" value="futsal" onChange={handleServiceChange} />
        <label>Futsal</label>
      </div>
    </div>
  );
};

export default ServiceSelector;