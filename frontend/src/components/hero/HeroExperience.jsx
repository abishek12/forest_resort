import thread from '../../assets/icons/thread.svg';
import { HashLink as Link } from "react-router-hash-link";
import ActiveMember from './ActiveMember';
const HeroExperience = () => {
    return (
        <section className="tw-w-full tw-h-[775px] tw-relative tw-overflow-hidden"
            style={{
                backgroundColor: 'rgba(191, 234, 121, 1)'
            }}
        >
            <div className="tw-px-[73px] tw-py-16">
                <div className="tw-w-[359px] tw-h-[70px] tw-rounded-[40px] tw-flex tw-gap-3 tw-items-center tw-justify-between tw-p-3"
                    style={{
                        backgroundColor: 'rgba(65, 227, 235, 0.9)'
                    }}
                >
                    <div className="tw-rounded-[40px] tw-bg-[#3D3D3D] tw-w-[200px] tw-h-auto tw-p-3 tw-flex tw-items-center tw-justify-center tw-text-white">
                        Get Active
                    </div>
                    <span className="tw-text-[14px] tw-leading-[21px] tw-font-semibold">
                        Elevate your game at Forest Sports Arena
                    </span>
                </div>
                <h1 className="tw-font-bold tw-text-[60px] tw-leading-[90px] text-black tw-w-[410px] tw-mt-8">
                    Experience Sports Like Never Before
                </h1>
                <h2 className="tw-text-[14px] tw-leading-[21px] tw-font-semibold tw-w-[417px] tw-mt-8">
                    Join us for thrilling futsal matches and invigorating swimming sessions in Pokhara.
                </h2>
                <button className="tw-text-[16px] tw-leading-[24px] tw-font-bold tw-bg-[#41E3EBE5] tw-mt-7" >
                    <Link to="/services-details/1/#Reserve">
                        Join a Futsal Match
                    </Link>
                </button>
            </div>
            {/* image tilted */}
            <div className='tw-absolute -tw-right-12 -tw-top-36 tw-rotate-[31deg] tw-w-[550px] tw-h-[700px] tw-rounded-[210px] tw-overflow-hidden'>
                <img src="/img/fsa_image/swim-about.png" alt="swimming" className='tw-w-full tw-h-full tw-object-cover' />
            </div>

            {/* ownwer image */}
            <div className="tw-w-[100px] tw-h-[100px]
             tw-rounded-full tw-absolute tw-bottom-14 tw-overflow-hidden tw-left-1/3 tw-z-10"
                style={{
                    border: '3px solid white'
                }}
            >
                <img src="/img/owner/rajendra.png" alt="rajendra"
                    className="tw-w-full tw-h-full tw-object-cover" />
            </div>
            {/* thread line */}
            <img src={thread} alt="line" className='tw-absolute tw-bottom-20 tw-left-[22%] tw-z-0' />

            {/* active members */}
            <ActiveMember />
        </section>
    )
}
export default HeroExperience;