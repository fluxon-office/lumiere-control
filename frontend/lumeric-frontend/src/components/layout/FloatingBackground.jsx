import { heroImage } from '../../assets/lumiereImages';

function FloatingBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[calc(100vh+8rem)] overflow-hidden">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[68%_18%] opacity-32" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,44,0.92)_0%,rgba(18,61,90,0.78)_22%,rgba(11,28,44,0.78)_54%,rgba(11,28,44,0.62)_76%,rgba(11,28,44,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.3)_0%,rgba(11,28,44,0.16)_42%,rgba(11,28,44,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_32%)]" />
        </div>
        <div className="absolute right-[-12rem] top-28 h-80 w-80 rounded-full bg-[rgba(212,175,55,0.14)] blur-3xl" />
        <div className="absolute left-[-10rem] top-[26rem] h-72 w-72 rounded-full bg-[rgba(19,47,76,0.12)] blur-3xl" />
      </div>
    </>
  );
}

export default FloatingBackground;
