import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const ActiveMember = () => {
    const [activeMember, setActiveMember] = useState(90);
    const [updateMember, setUpdateMember] = useState(0);

    useEffect(() => {
        if (updateMember < activeMember) {
            const timeout = setTimeout(() => {
                setUpdateMember((prev) => prev + 1);
            }, 40);
            return () => clearTimeout(timeout);
        }
    }, [updateMember, activeMember]);
    return (
        <motion.div className='tw-w-[285px] tw-h-[136px] tw-rounded-[20px] tw-absolute tw-bottom-44 tw-left-[54.5%] tw-backdrop-blur-sm tw-flex tw-flex-col tw-justify-between max-sm:tw-h-[100px] max-sm:!tw-w-[120px] max-sm:tw-ml-5 max-sm:tw-top-[350px]'
            style={{
                border: '4px solid white',
                background: 'rgba(133, 133, 133, 0.5)',
                color: 'white'
            }}
        >
            <div className='tw-relative tw-mb-3 tw-mt-3 tw-left-28 max-sm:tw-left-[70px] max-sm:tw-top-[-10px]'>
                <div className='tw-absolute -tw-left-[80px] max-sm:tw-left-[-65px] tw-z-10 tw-w-[40px] tw-h-[40px] tw-rounded-full tw-overflow-hidden max-sm:tw-w-8 max-sm:tw-h-8'

                    style={{
                        border: '2px solid white'
                    }}>
                    <img src="/img/owner/rajendra.png" alt="rajendra"
                        className="tw-w-full tw-h-full tw-object-cover" />
                </div>
                <div className='tw-absolute -tw-left-[47px] max-sm:tw-left-[-40px]  tw-z-20 tw-w-[40px] tw-h-[40px] tw-rounded-full tw-overflow-hidden max-sm:tw-w-8 max-sm:tw-h-8'

                    style={{
                        border: '2px solid white'
                    }}>
                    <img src="/img/owner/rajendra.png" alt="rajendra"
                        className="tw-w-full tw-h-full tw-object-cover" />
                </div>
                <div className='tw-absolute -tw-left-[17px] tw-z-30 tw-w-[40px] tw-h-[40px] tw-rounded-full tw-overflow-hidden max-sm:tw-w-8 max-sm:tw-h-8'

                    style={{
                        border: '2px solid white'
                    }}>
                    <img src="/img/owner/rajendra.png" alt="rajendra"
                        className="tw-w-full tw-h-full tw-object-cover" />
                </div>
                <div className='tw-absolute tw-left-[15px] max-sm:tw-left-[7px] tw-z-40 tw-w-[40px] tw-h-[40px] tw-rounded-full tw-overflow-hidden max-sm:tw-w-8 max-sm:tw-h-8'

                    style={{
                        border: '2px solid white'
                    }}>
                    <img src="/img/owner/rajendra.png" alt="rajendra"
                        className="tw-w-full tw-h-full tw-object-cover" />
                </div>
            </div>
            <p className='tw-font-semibold mx-auto tw-text-center tw-text-[30px] tw-leading-[45px] max-sm:tw-leading-[20px] max-sm:tw-text-sm tracking-[0.05em] tw-text-white/85 
                tw-ml-10'
            >
                {updateMember}
                <span className='tw-ml-3 tw-font-semibold tw-text-[15px] tw-leading-[22.5px]'>
                    Active Members
                </span>
            </p>
        </motion.div>
    )
}
export default ActiveMember;