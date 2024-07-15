"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Fragment, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

const ChildWithDynamicPanels = () => {
  const [extra, setExtra] = useState(2);
  return (
    <>
      {Array.from({ length: extra }).map((_, i) => (
        <Fragment key={i}>
          {i !== 0 && <PanelResizeHandle />}
          <Panel id={`extra-${i}`} order={i}>
            <div
              style={{
                width: "100%",
                background: colors[i % colors.length],
              }}
            >
              {i}
            </div>
          </Panel>
        </Fragment>
      ))}
      <button onClick={() => setExtra((e) => e + 1)}>Add</button>
    </>
  );
};

const Working = () => {
  const [extra, setExtra] = useState(2);
  return (
    <PanelGroup direction="horizontal">
      {Array.from({ length: extra }).map((_, i) => (
        <Fragment key={i}>
          {i !== 0 && <PanelResizeHandle />}
          <Panel id={`extra-${i}`} order={i}>
            <div
              style={{
                width: "100%",
                background: colors[i % colors.length],
              }}
            >
              {i}
            </div>
          </Panel>
        </Fragment>
      ))}
      <button onClick={() => setExtra((e) => e + 1)}>Add</button>
    </PanelGroup>
  );
};

export function Example1() {
  return (
    <>
      <h5>
        Works to drag first 2. When adding a new panel they all reset to 1/n of
        the width
      </h5>
      <Working />

      <h5>
        Works to drag first 2. When adding a new panel nothing resets and when
        dragging after adding a new panel it resets. When dragging a second time
        it works
      </h5>
      <PanelGroup direction="horizontal">
        <ChildWithDynamicPanels />
      </PanelGroup>
    </>
  );
}
