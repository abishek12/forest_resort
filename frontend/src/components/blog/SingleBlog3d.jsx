
import Arrow from '../../assets/icons/Arrow.svg';

export function SingleBlog3d({ id, image, title, date, author }) {

  return (
    <div className="tw-bg-yellow-400 tw-h-auto tw-w-auto tw-shadow-lg tw-border-[3px] tw-border-white tw-overflow-hidden"
      style={{ backgroundColor: 'rgba(181, 222, 76, 0.12)' }}
    >
      <div className="tw-w-full tw-overflow-hidden tw-h-[310px] tw-bg-slate-700 ">
        <img src={image} className="tw-w-full tw-h-full tw-object-cover hover:tw-scale-105 tw-transition" />
      </div>
      <div className="tw-text-black tw-p-7 tw-flex tw-flex-col tw-justify-between tw-w-full tw-h-[250px]"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: '3px',
          borderRight: 'white',
          borderLeft: 'white',
          borderBottom: 'white'
        }}
      >
        <div className='' >
          <p className="tw-font-bold tw-text-[15px] tw-leading-[10px] tw-tracking-[0.05em] tw-opacity-85">{author}</p>
          <p className="tw-font-semibold tw-text-[12px] tw-leading-[10px] tw-tracking-[0.05em] tw-opacity-70">{date}</p>
        </div>
        <div>
          <p className="tw-font-bold tw-text-[16px] tw-leading-[25px] tw-tracking-[0.02em]">{title}</p>
        </div>
        <div className="tw-opacity-70 tw-flex tw-items-center tw-gap-2 tw-cursor-pointer hover:tw-text-green-700">
          <span className="tw-font-bold tw-text-[16px] tw-tracking-[0.02em]">Continue Reading</span>
          <img src={Arrow} alt="" className="tw-h-4 tw-w-4 tw-fill-current" />
        </div>
      </div>
    </div>
  );
}

// {/* <CardContainer className="pb-2 tw-rounded-md tw-bg-[#def7f7] tw-bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
//   <CardBody className="relative">
//     <CardItem translateZ="100">
//       {/* <img
//             loading="lazy"
//             src={`/img/blog/${thumb}`}
//             className="tw-rounded-t-lg"
//             alt="thumbnail"
//           /> */}
//       <ImageGrid images={images} />
//       <div className="tags">
//         <Link to={void 0}>{category}</Link>
//       </div>
//     </CardItem>
//     <div className="tw-px-2 tw-pt-4">
//       <CardItem translateZ="80">
//         <ul>
//           <li>
//             <Link to={void 0}>{author}</Link>
//           </li>
//           <li>{dateTimeFormat(createdAt)}</li>
//         </ul>
//       </CardItem>
//       <CardItem as="h3" translateZ="60" className="post-title">
//         <Link to={`/blog-single/${_id}`}>{title}</Link>
//       </CardItem>
//       <CardItem
//         translateZ="60"
//         as={Link}
//         to={`/blog-single/${_id}#`}
//         target="__blank"
//         className="text-neutral-500 text-sm max-w-sm post-title tw-flex tw-items-center tw-gap-2"
//       >
//         Continue Reading <FaArrowRight />
//       </CardItem>
//     </div>
//   </CardBody>
// </CardContainer> */}
