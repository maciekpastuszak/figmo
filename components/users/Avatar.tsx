import React from "react";
import styles from "./Avatar.module.css";

const IMAGE_SIZE = 48;

export function Avatar({ name, otherStyles }: { src: string; name: string }) {
  return (
    <div className={styles.avatar} data-tooltip={name}>
      <img
        src={`https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className={styles.avatar_picture}
      />
    </div>
  );
}