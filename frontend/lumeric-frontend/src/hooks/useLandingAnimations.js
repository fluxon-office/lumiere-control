import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function useLandingAnimations({ heroCardRef, rootRef, serviceCarouselStart, serviceCarouselTrackRef }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-text]',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: 'power3.out' },
      );

      gsap.fromTo(
        heroCardRef.current,
        { y: 36, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out', delay: 0.15 },
      );

      gsap.to('[data-float-card]', {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 82%' },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [heroCardRef, rootRef]);

  useEffect(() => {
    if (!serviceCarouselTrackRef.current) {
      return undefined;
    }

    const cards = serviceCarouselTrackRef.current.querySelectorAll('[data-service-slide]');
    const animation = gsap.fromTo(
      cards,
      { y: 20, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      },
    );

    return () => animation.kill();
  }, [serviceCarouselStart, serviceCarouselTrackRef]);
}

export default useLandingAnimations;
