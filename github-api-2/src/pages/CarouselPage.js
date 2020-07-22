import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import useSelect from "../lib/useSelect";
import { Punchcard, IssuesList } from "../components";
import { listDupPRIssues, listOrphanIssues, listUsersScores } from "../ducks";

function ScoresA() {
  const scores = useSelect(listUsersScores);

  return useMemo(() => {
    const half = scores.slice(0, scores.length / 2);
    return <Punchcard scores={half} />;
  }, [scores]);
}

function ScoresB() {
  const scores = useSelect(listUsersScores);

  return useMemo(() => {
    const half = scores.slice(scores.length / 2);
    return <Punchcard scores={half} />;
  }, [scores]);
}

function DupPRPage() {
  const issues = useSelect(listDupPRIssues);

  return (
    <>
      <Container>
        <h1>PRs with multiple Issues</h1>
      </Container>

      <IssuesList issues={issues} />
    </>
  );
}

function Orphans() {
  const issues = useSelect(listOrphanIssues);

  return (
    <>
      <Container>
        <h1>Issues without PR</h1>
      </Container>

      <IssuesList issues={issues} />
    </>
  );
}
export function CarouselPage() {
  const dups = useSelect(listDupPRIssues);
  const orphans = useSelect(listOrphanIssues);

  let [index, setIndex] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIndex(index + 1), 20000);
    return () => clearInterval(i);
  });

  const Views = [
    ScoresA,
    ScoresA,
    ScoresB,
    dups.length && DupPRPage,
    orphans.length && Orphans
  ].filter(Boolean);
  const Current = Views[index % Views.length];

  return <Current />;
}
