"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { useState } from "react";

const CARD_WIDTH = 360;
const CARD_HEIGHT = 480;
const CARD_OFFSET = 40;
const SCALE_FACTOR = 0.15;
const SWIPE_THRESHOLD = 100;
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

interface CardStackProps {
  images: string[];
}

export default function CardStack({ images }: CardStackProps) {
  const [cards, setCards] = useState(images);
  const [flyDirection, setFlyDirection] = useState<"left" | "right" | null>(
    null
  );

  const moveToEnd = () => {
    setCards([...cards.slice(1), cards[0]]);
  };

  const moveToStart = () => {
    setCards([cards[cards.length - 1], ...cards.slice(0, cards.length - 1)]);
  };

  const handleAnimationComplete = () => {
    if (flyDirection === "left") {
      moveToEnd();
    } else if (flyDirection === "right") {
      moveToStart();
    }
    setFlyDirection(null);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo,
    setFlyDirection: (direction: "left" | "right" | null) => void,
    x: { set: (value: number) => void }
  ) => {
    if (
      offset.x < -SWIPE_THRESHOLD ||
      (velocity.x < -SWIPE_THRESHOLD && Math.abs(offset.x) > 30)
    ) {
      setFlyDirection("left");
    } else if (
      offset.x > SWIPE_THRESHOLD ||
      (velocity.x > SWIPE_THRESHOLD && Math.abs(offset.x) > 30)
    ) {
      setFlyDirection("right");
    } else {
      // Snap back if not exceeding threshold
      x.set(0);
    }
  };

  // Create individual motion values for each card position
  const card0X = useMotionValue(0);
  const card0Rotate = useTransform(card0X, [-200, 200], [-15, 15]);
  const card1X = useMotionValue(0);
  const card1Rotate = useTransform(card1X, [-200, 200], [-15, 15]);
  const card2X = useMotionValue(0);
  const card2Rotate = useTransform(card2X, [-200, 200], [-15, 15]);
  const card3X = useMotionValue(0);
  const card3Rotate = useTransform(card3X, [-200, 200], [-15, 15]);
  const card4X = useMotionValue(0);
  const card4Rotate = useTransform(card4X, [-200, 200], [-15, 15]);

  const motionValues = [card0X, card1X, card2X, card3X, card4X];
  const rotateValues = [
    card0Rotate,
    card1Rotate,
    card2Rotate,
    card3Rotate,
    card4Rotate,
  ];

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((url, index) => {
          const isTop = index === 0;
          const x = motionValues[index];
          const rotate = rotateValues[index];

          const cardOpacity =
            index >= VISIBLE_CARDS ? 0 : isTop && flyDirection ? 0 : 1;
          const cardRotate = index === 0 ? 0 : BEHIND_ROTATION;
          const cardX = index === 0 ? 0 : BEHIND_X_OFFSET;

          return (
            <motion.li
              key={url}
              style={{
                ...cardStyle,
                backgroundImage: `url(${url})`,
                cursor: isTop ? "grab" : "auto",
                x: isTop ? x : cardX,
                rotate: isTop ? rotate : cardRotate,
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
                opacity: cardOpacity,
                x:
                  isTop && flyDirection
                    ? flyDirection === "left"
                      ? -window.innerWidth
                      : window.innerWidth
                    : isTop
                    ? 0
                    : cardX,
                rotate: isTop ? 0 : cardRotate,
                transition:
                  isTop && flyDirection
                    ? { duration: 0.3, ease: "easeInOut" }
                    : index === 1 && flyDirection
                    ? {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        delay: 0.1,
                      }
                    : { duration: 0 },
              }}
              drag={isTop && !flyDirection ? "x" : false}
              dragSnapToOrigin
              onDragEnd={
                isTop
                  ? (e, info) => handleDragEnd(e, info, setFlyDirection, x)
                  : undefined
              }
              onAnimationComplete={
                isTop && flyDirection ? handleAnimationComplete : undefined
              }
              whileDrag={{ cursor: "grabbing" }}
            />
          );
        })}
      </ul>
    </div>
  );
}
