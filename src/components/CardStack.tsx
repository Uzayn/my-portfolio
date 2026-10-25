"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const MAX_CARD_WIDTH = 360;
const MIN_CARD_WIDTH = 200;
const CARD_ASPECT = 4 / 3; // height relative to width
const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.15;
const SWIPE_DISTANCE = 100; // px dragged left or right before the card leaves
const FLICK_VELOCITY = 500; // px/s: a quick flick also counts...
const FLICK_MIN_DISTANCE = 30; // ...as long as it moved at least this far
const VISIBLE_CARDS = 2;
const BEHIND_ROTATION = -10;
const BEHIND_X_OFFSET = 30;

interface CardProps {
  url: string;
  index: number;
  total: number;
  width: number;
  height: number;
  onSwipedAway: () => void;
}

function Card({ url, index, total, width, height, onSwipedAway }: CardProps) {
  const isTop = index === 0;
  const isLast = total > 1 && index === total - 1;
  const hidden = index >= VISIBLE_CARDS;

  // Every card owns its motion value, so a card that becomes the top card
  // always starts from a clean drag state.
  const x = useMotionValue(0);
  const dragRotate = useTransform(x, [-200, 200], [-15, 15]);
  // Where the card flies to once released, or null while it is in the deck.
  const [flyX, setFlyX] = useState<number | null>(null);
  const flying = flyX !== null;

  // Drag is locked to the x axis, so vertical touches scroll the page.
  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const distance = Math.abs(offset.x);
    const flicked =
      Math.abs(velocity.x) > FLICK_VELOCITY && distance > FLICK_MIN_DISTANCE;
    if (distance < SWIPE_DISTANCE && !flicked) return; // dragSnapToOrigin pulls it back

    // Keep flying the way it was dragged, far enough to clear any screen.
    setFlyX(Math.sign(offset.x) * window.innerWidth * 1.5);
  };

  const handleFlightComplete = () => {
    setFlyX(null);
    onSwipedAway();
  };

  return (
    <motion.li
      style={{
        position: "absolute",
        width,
        height,
        borderRadius: 20,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${url})`,
        cursor: isTop ? "grab" : "auto",
        x,
        rotate: isTop ? dragRotate : BEHIND_ROTATION,
      }}
      initial={false}
      animate={{
        top: index * -CARD_OFFSET,
        scale: 1 - index * SCALE_FACTOR,
        zIndex: total - index,
        opacity: hidden || flying ? 0 : 1,
        x: flying ? flyX : isTop ? 0 : BEHIND_X_OFFSET,
        rotate: isTop ? 0 : BEHIND_ROTATION,
        transition: flying
          ? { duration: 0.3, ease: "easeInOut" }
          : isLast
            ? { duration: 0 } // the card just sent to the back snaps into place unseen
            : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      drag={isTop && !flying ? "x" : false}
      dragSnapToOrigin
      onDragEnd={isTop ? handleDragEnd : undefined}
      onAnimationComplete={flying ? handleFlightComplete : undefined}
      whileDrag={{ cursor: "grabbing" }}
    />
  );
}

interface CardStackProps {
  images: string[];
}

export default function CardStack({ images }: CardStackProps) {
  const [cards, setCards] = useState(images);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(MAX_CARD_WIDTH);

  // Fit the deck to its column so it never overflows a narrow screen.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const fit = () =>
      setCardWidth(
        Math.max(
          MIN_CARD_WIDTH,
          Math.min(MAX_CARD_WIDTH, Math.floor(el.clientWidth - BEHIND_X_OFFSET))
        )
      );
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cardHeight = Math.round(cardWidth * CARD_ASPECT);

  // A swipe left or right sends the top card to the back of the deck.
  const advance = () => setCards((prev) => [...prev.slice(1), prev[0]]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ul
        style={{
          position: "relative",
          width: cardWidth + BEHIND_X_OFFSET,
          height: cardHeight,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {cards.map((url, index) => (
          <Card
            key={url}
            url={url}
            index={index}
            total={cards.length}
            width={cardWidth}
            height={cardHeight}
            onSwipedAway={advance}
          />
        ))}
      </ul>
    </div>
  );
}
