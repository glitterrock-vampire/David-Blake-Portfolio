import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TransferableSkillsSection() {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);
  const orangeBaseRef = useRef(null);
  const orangeSideRef = useRef(null);
  const orangeBehindRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        quoteRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1 }
      )
        .fromTo(
          authorRef.current,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.55"
        )
        .fromTo(
          imageWrapRef.current,
          { y: 70, opacity: 0, scale: 0.94 },
          { y: 0, opacity: 1, scale: 1, duration: 1.15 },
          "-=0.95"
        )
        .fromTo(
          orangeBehindRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=1"
        )
        .fromTo(
          orangeBaseRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=1"
        )
        .fromTo(
          orangeSideRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.9"
        );

      gsap.to(imageRef.current, {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(orangeBehindRef.current, {
        yPercent: -10,
        xPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(orangeBaseRef.current, {
        xPercent: 3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-0 bg-black overflow-hidden">
      <motion.div className="relative w-full bg-black">
        <div className="relative w-full bg-black min-h-[760px] md:min-h-[880px] overflow-hidden">
          {/* Orange geometric base shape */}
          <div
            ref={orangeBaseRef}
            className="absolute bottom-0 left-[7%] w-[73%] h-[110px] md:h-[155px] bg-[#F7934C] z-[1]"
          />

          {/* Orange right block behind image */}
          <div
            ref={orangeSideRef}
            className="absolute bottom-0 right-0 w-[22%] md:w-[20%] h-[230px] md:h-[285px] bg-[#F7934C] z-[1]"
          />

          <div className="relative z-[3] grid grid-cols-1 md:grid-cols-[0.95fr_1.15fr] min-h-[760px] md:min-h-[880px]">
            {/* Left quote block */}
            <div className="flex items-center justify-center md:justify-start px-8 sm:px-10 md:pl-[7.5vw] md:pr-10 pt-20 md:pt-0">
              <div className="max-w-[470px]">
                <blockquote
                  ref={quoteRef}
                  className="text-white font-sans font-extrabold leading-[0.92] tracking-[-0.055em] text-[2.3rem] sm:text-[3rem] md:text-[4.35rem] will-change-transform"
                >
                  <span className="block">“Transferable skills</span>
                  <span className="block">are the bridge to</span>
                  <span className="block">sustainable futures,</span>
                  <span className="block">connecting our past</span>
                  <span className="block">experiences to new</span>
                  <span className="block">opportunities”</span>
                </blockquote>

                <p
                  ref={authorRef}
                  className="mt-8 md:mt-10 text-white font-sans font-extrabold tracking-[-0.04em] text-[1.7rem] sm:text-[2rem] md:text-[3rem] will-change-transform"
                >
                  –David Blake
                </p>
              </div>
            </div>

            {/* Right image block */}
            <div className="relative flex items-center justify-center md:justify-end px-6 md:px-0">
              <div
                ref={orangeBehindRef}
                className="absolute bottom-[110px] md:bottom-[155px] right-0 w-[82%] md:w-[78%] h-[58%] md:h-[64%] bg-[#F7934C] z-[1]"
              />

              <div
                ref={imageWrapRef}
                className="relative z-[3] w-full max-w-[640px] md:w-[82%] aspect-[0.84/1] md:mr-[2.5vw] mt-8 md:mt-0 overflow-hidden will-change-transform"
              >
                <img
                  ref={imageRef}
                  src="/photos/david-blake-portrait.jpg"
                  alt="David Blake portrait"
                  className="w-full h-[108%] object-cover object-center will-change-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}