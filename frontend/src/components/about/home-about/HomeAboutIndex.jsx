import futsal1 from "/img/fsa_image/futsal2.webp";
import swim1 from "/img/fsa_image/swim1.webp";
import swim2 from "/img/fsa_image/swim2.webp";
import interior from "/img/fsa_image/futsal.webp";

const HomeAboutIndex = () => {
    return (
        <section className='default-padding tw-px-[75px]'>
            <div className='tw-flex tw-justify-between tw-w-full tw-max-h-[759px] tw-gap-5' >
                <div className='tw-text-center tw-w-[640px] tw-flex tw-flex-col tw-gap-4'>
                    <div className='tw-w-full tw-h-[640px] tw-overflow-hidden tw-shadow-lg tw-rounded-md '>
                        <img src={futsal1} alt="futsal" className='tw-w-full tw-h-full tw-object-cover hover:tw-scale-105 tw-transition' />
                    </div>
                    <p className=' tw-text-black tw-font-bold tw-text-[30px] tw-leading-[45px] tw-tracking-[0.02em]'>FUTSAL</p>
                    <p className='-tw-mt-4 tw-text-black/85 tw-w-[594px] tw-font-bold tw-text-[12px] tw-leading-[25px] tw-tracking-[0.02em]'>Bring your friends and play futsal. Whether you're looking to join a match or just play for fun,
                        Forest Sports and Recreation Centre has the perfect spot for you.</p>
                </div>
                <div className='tw-text-center tw-w-[640px] tw-flex tw-flex-col tw-gap-4'>
                    <div className='tw-w-full tw-h-[640px] tw-overflow-hidden tw-shadow-lg tw-rounded-md'>
                        <img src={swim1} alt="swimming pool" className='tw-w-full tw-h-full tw-object-cover  hover:tw-scale-105 tw-transition' />
                    </div>
                    <p className=' tw-text-black tw-font-bold tw-text-[30px] tw-leading-[45px] tw-tracking-[0.02em]'>SWIMMING</p>
                    <p className='-tw-mt-4 tw-text-black/85 tw-w-[594px] tw-font-bold tw-text-[12px] tw-leading-[25px] tw-tracking-[0.02em]'>Biggest Swimming Pool with Training Facilities. With professional instructors and a safe, clean environment,
                        it’s ideal for both beginners and seasoned swimmers.</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAboutIndex;
