import React, { useState, useCallback } from "react";
import { Button, Collapse } from "react-bootstrap";

export function ShowSource({ source }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <Button onClick={toggle}>{open ? "Hide" : "Show"} source</Button>
      <Collapse in={open}>
        <pre>{JSON.stringify(source, null, 2)}</pre>
      </Collapse>
    </>
  );
}
