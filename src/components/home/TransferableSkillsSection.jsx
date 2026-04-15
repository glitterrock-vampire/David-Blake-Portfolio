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
  const orangeStepRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        quoteRef.current,
        { y: 56, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          authorRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          imageWrapRef.current,
          { y: 48, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.05 },
          "-=0.8"
        )
        .fromTo(
          orangeBaseRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          "-=0.9"
        )
        .fromTo(
          orangeStepRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85 },
          "-=0.75"
        );

      gsap.to(imageRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(orangeBaseRef.current, {
        xPercent: 2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(orangeStepRef.current, {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black/70 overflow-hidden">
      <motion.div className="relative w-full bg-black/80">
        <div className="relative w-full min-h-[680px] md:min-h-[820px] bg-black/75 overflow-hidden">
          {/* ORANGE GEOMETRY — aligned stepped corner */}
          <div
            ref={orangeBaseRef}
            className="absolute left-[7.5%] right-[20%] bottom-0 h-[70px] md:h-[110px] bg-[#F7934C] z-[1]"
          />

          {/* Orange right block behind image */}
          <div
            ref={orangeSideRef}
            className="absolute bottom-[-50px] right-[0%] w-[30%] md:w-[35%] h-[230px] md:h-[285px] bg-[#F7934C] z-[1]"
          />

          <div
            ref={orangeStepRef}
            className="absolute right-0 bottom-0 w-[20%] h-[170px] md:h-[240px] bg-[#F7934C] z-[2]"
          />

          {/* CONTENT */}
          <div className="relative z-[4] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] min-h-[680px] md:min-h-[820px]">
            {/* TEXT */}
            <div className="flex items-center justify-center md:justify-start px-8 sm:px-10 md:pl-[12.5vw] md:pr-6 pt-16 md:pt-0">
              <div className="max-w-[340px] md:max-w-[360px]">
                <blockquote
                  ref={quoteRef}
                  className="
                    text-white font-sans font-extrabold
                    leading-[1.05] tracking-[-0.035em]
                    text-[1.65rem]
                    sm:text-[1.9rem]
                    md:text-[2.75rem]
                    lg:text-[3rem]
                    will-change-transform
                  "
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
                  className="
                    mt-6 md:mt-7
                    text-white font-sans font-extrabold
                    tracking-[-0.025em]
                    text-[1.15rem]
                    sm:text-[1.3rem]
                    md:text-[1.75rem]
                    will-change-transform
                  "
                >
                  –David Blake
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative flex items-center justify-center md:justify-end px-6 md:px-0">
              <div
                ref={imageWrapRef}
                className="
                  relative z-[5]
                  w-full max-w-[480px]
                  md:w-[65%]
                  aspect-[0.86/1]
                  md:mr-[0]
                  mt-4 md:mt-0
                  overflow-hidden
                "
              >
                <img
                  ref={imageRef}
                  src="/photos/david-blake-portrait.jpg"
                  alt="David Blake portrait"
                  className="w-full h-[106%] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}