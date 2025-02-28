const Follow = () => {
    const pics = [
        {
            img: '/img/follow/f1.png'
        },
        {
            img: '/img/follow/f2.png'
        },
        {
            img: '/img/follow/f3.png'
        },
        {
            img: '/img/follow/f4.png'
        },
        {
            img: '/img/follow/f5.png'
        },
    ]
    return (
        <section className="default-padding tw-px-[75px]">
            <p className="tw-font-bold tw-text-[22px] tw-leading-[25px] tracking-[0.02em] tw-mb-10">Follow @forest_sports_arena</p>
            <div className="tw-flex tw-w-full tw-justify-between tw-gap-4">
                {
                    pics.map((items, index) => {
                        return (
                            <div key={index} className="tw-w-[243px] tw-h-[243px] tw-cursor-pointer">
                                <img src={items.img} alt='forest images' className="tw-w-full tw-h-full"></img>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
export default Follow;