"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useState } from "react";

const CARD_WIDTH = 360;
const CARD_HEIGHT = 480;
const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.15;
const SWIPE_DISTANCE = 100; // px dragged, in any direction, before the card leaves
const FLICK_VELOCITY = 500; // px/s: a quick flick also counts...
const FLICK_MIN_DISTANCE = 30; // ...as long as it moved at least this far
const VISIBLE_CARDS = 2;
const BEHIND_ROTATION = -10;
const BEHIND_X_OFFSET = 30;

const wrapperStyle: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "fit",
};

const cardWrapStyle: React.CSSProperties = {
  position: "relative",
  width: CARD_WIDTH + BEHIND_X_OFFSET,
  height: CARD_HEIGHT,
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const cardStyle: React.CSSProperties = {
  position: "absolute",
  width: CARD_WIDTH,
  height: CARD_HEIGHT,
  borderRadius: 20,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

interface Vector {
  x: number;
  y: number;
}

interface CardProps {
  url: string;
  index: number;
  total: number;
  onSwipedAway: () => void;
}

function Card({ url, index, total, onSwipedAway }: CardProps) {
  const isTop = index === 0;
  const isLast = total > 1 && index === total - 1;
  const hidden = index >= VISIBLE_CARDS;

  // Every card owns its motion values, so a card that becomes the top card
  // always starts from a clean drag state.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragRotate = useTransform(x, [-200, 200], [-15, 15]);
  const [flyTarget, setFlyTarget] = useState<Vector | null>(null);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const distance = Math.hypot(offset.x, offset.y);
    const speed = Math.hypot(velocity.x, velocity.y);
    const flicked = speed > FLICK_VELOCITY && distance > FLICK_MIN_DISTANCE;
    if (distance < SWIPE_DISTANCE && !flicked) return; // dragSnapToOrigin pulls it back

    // Keep flying in the direction it was dragged, far enough to clear any screen.
    const reach = Math.max(window.innerWidth, window.innerHeight) * 1.5;
    setFlyTarget({
      x: (offset.x / distance) * reach,
      y: (offset.y / distance) * reach,
    });
  };

  const handleFlightComplete = () => {
    setFlyTarget(null);
    onSwipedAway();
  };

  return (
    <motion.li
      style={{
        ...cardStyle,
        backgroundImage: `url(${url})`,
        cursor: isTop ? "grab" : "auto",
        x,
        y,
        rotate: isTop ? dragRotate : BEHIND_ROTATION,
      }}
      initial={false}
      animate={{
        top: index * -CARD_OFFSET,
        scale: 1 - index * SCALE_FACTOR,
        zIndex: total - index,
        opacity: hidden || flyTarget ? 0 : 1,
        x: flyTarget ? flyTarget.x : isTop ? 0 : BEHIND_X_OFFSET,
        y: flyTarget ? flyTarget.y : 0,
        rotate: isTop ? 0 : BEHIND_ROTATION,
        transition: flyTarget
          ? { duration: 0.3, ease: "easeInOut" }
          : isLast
            ? { duration: 0 } // the card just sent to the back snaps into place unseen
            : { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      drag={isTop && !flyTarget}
      dragSnapToOrigin
      onDragEnd={isTop ? handleDragEnd : undefined}
      onAnimationComplete={flyTarget ? handleFlightComplete : undefined}
      whileDrag={{ cursor: "grabbing" }}
    />
  );
}

interface CardStackProps {
  images: string[];
}

export default function CardStack({ images }: CardStackProps) {
  const [cards, setCards] = useState(images);

  // A swipe in any direction sends the top card to the back of the deck.
  const advance = () => setCards((prev) => [...prev.slice(1), prev[0]]);

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((url, index) => (
          <Card
            key={url}
            url={url}
            index={index}
            total={cards.length}
            onSwipedAway={advance}
          />
        ))}
      </ul>
    </div>
  );
}
