import { ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const RevealOnScroll = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const el = ref.current;
    if (!el) return;

    const getInitialTransform = () => {
      switch (direction) {
        case "up":
          return "translateY(60px)";
        case "down":
          return "translateY(-60px)";
        case "left":
          return "translateX(60px)";
        case "right":
          return "translateX(-60px)";
        case "fade":
          return "none";
        default:
          return "translateY(60px)";
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // important: delay state change to next frame (prevents jerk on reload)
        requestAnimationFrame(() => {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, 0);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [pathname, direction]);

  const initialTransform = (() => {
    switch (direction) {
      case "up":
        return "translateY(60px)";
      case "down":
        return "translateY(-60px)";
      case "left":
        return "translateX(60px)";
      case "right":
        return "translateX(-60px)";
      case "fade":
        return "none";
      default:
        return "translateY(60px)";
    }
  })();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : initialTransform,
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;