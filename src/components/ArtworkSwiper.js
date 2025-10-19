// // ArtworkSwiper.jsx
// import React, { useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "react-bootstrap";

// const swipeConfidenceThreshold = 100;
// const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

// const ArtworkSwiper = ({ artworks, currentIndex, setCurrentIndex }) => {
//   const directionRef = React.useRef(0);
//   const constraintsRef = useRef(null);

//   const paginate = (newDirection) => {
//     directionRef.current = newDirection;
//     setCurrentIndex((prev) => {
//       const newIndex = prev + newDirection;
//       if (newIndex < 0 || newIndex >= artworks.length) return prev;
//       return newIndex;
//     });
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5 },
//     },
//     exit: (direction) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8,
//       transition: { duration: 0.5 },
//     }),
//   };

//   return (
//     <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
//       <div ref={constraintsRef} className="absolute w-full h-full" />
//       <AnimatePresence initial={false} custom={directionRef.current}>
//         <motion.img
//           key={currentIndex}
//           src={artworks[currentIndex].url}
//           alt={artworks[currentIndex].name}
//           className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-lg object-contain"
//           custom={directionRef.current}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           drag="x"
//           dragConstraints={constraintsRef}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);
//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         />
//       </AnimatePresence>
//       <div className="absolute bottom-10 flex gap-8">
//         <Button
//           variant="secondary"
//           onClick={() => paginate(-1)}
//           disabled={currentIndex === 0}
//         >
//           ←
//         </Button>
//         <Button
//           variant="secondary"
//           onClick={() => paginate(1)}
//           disabled={currentIndex === artworks.length - 1}
//         >
//           →
//         </Button>
//       </div>
//       <div className="absolute top-4 text-center w-full text-white text-xl">
//         <h3>{artworks[currentIndex].name}</h3>
//         <p>{artworks[currentIndex].description}</p>
//       </div>
//     </div>
//   );
// };

// export default ArtworkSwiper;
