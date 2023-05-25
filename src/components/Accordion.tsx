"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

export default function Accordion({}: Props) {
  const [opened, setOpened] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setHeight] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (contentRef.current) {
        //@ts-ignore
        setHeight(contentRef.current.clientHeight);
      }
    }, 200);
  });
  return (
    <div className={`overflow-hidden transition-all`}>
      <div
        className="text-3xl font-bold cursor-pointer"
        onClick={() => setOpened(!opened)}
      >
        Click me
      </div>
      {opened && (
        <motion.p
          ref={contentRef}
          initial={{ height: 0 }}
          whileInView={{ height: contentHeight + "px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam eos,
          reiciendis suscipit accusantium cupiditate impedit obcaecati earum
          asperiores error deleniti saepe ex, enim fugit eius ratione. Quaerat
          minima sapiente reprehenderit enim praesentium laborum culpa fugit?
          Aliquid ullam dolores placeat tempora modi, dolore maiores id velit
          voluptatum nam cum. Hic debitis eligendi, expedita repellendus placeat
          impedit dolorem quasi dignissimos. Dicta libero quae accusantium
          minima, nobis unde possimus praesentium repellendus, amet omnis aut
          necessitatibus, cupiditate quo quas eligendi? Temporibus, sed minus
          impedit soluta, aliquid ipsam maiores nesciunt exercitationem magni
          fugit ab? Assumenda necessitatibus, sed voluptatum consectetur totam
          omnis, sint, quae labore neque exercitationem culpa? Optio voluptate
          possimus beatae incidunt nihil quos debitis sint molestias atque quas
          at, ipsum iure quia sunt quis facere temporibus necessitatibus aut,
          rerum reiciendis laboriosam sapiente dolores. Velit laboriosam eos
          pariatur eum, tenetur amet. Sint ut, atque soluta odio, dicta
          excepturi veniam doloremque enim, voluptatem harum ex itaque
          dignissimos non nesciunt est repudiandae. Odio eum, vero accusamus
          rerum sapiente placeat dolorem. Tempore quae, quis, quibusdam iste
          corporis sequi maiores ab dolorum doloremque enim tempora beatae modi
          aut blanditiis adipisci ullam illo possimus debitis, expedita repellat
          necessitatibus ducimus omnis. Quasi distinctio repudiandae eveniet at
          cupiditate molestiae suscipit tempora facilis!
        </motion.p>
      )}
    </div>
  );
}
