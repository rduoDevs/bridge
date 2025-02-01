import React, { useState } from "react";
import Head from "next/head";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import projects from "../data/outreach.json";
import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [showMore, setShowMore] = useState(Array(projects.length).fill(false));
  const toggleButton = (index) => {
    let arr = showMore;
    arr[index] = !arr[index];
    setShowMore([...arr]);
  };
  return (
    <>
      <head>
  <meta charset="UTF-8" />
  <title>B.R.I.D.G.E. – Home</title>
  <link rel="stylesheet" href="style.css" />
  <!-- Google Font Example -->
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
</head>
<body>
  <div class="container home-container">
    <h1 class="main-title">B.R.I.D.G.E.</h1>
    <h2 class="subtitle">Better Real-time Interactions for Diagnosis &amp; General Evaluation</h2>

    <div class="button-row">
      <!-- Button to patient info form -->
      <a href="patient-info.html" class="button-link">Patient Information</a>
      <!-- Placeholder button -->
      <button class="button-link placeholder" onclick="alert('Coming Soon!')">
        Placeholder
      </button>
    </div>
  </div>

  <footer class="footer">
    <p>
      <strong>Attribution / Credits:</strong><br />
      <a href="https://github.com/your-github" target="_blank" rel="noopener">GitHub</a> |
      <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener">LinkedIn</a>
    </p>
  </footer>
</body>
</html>

  );
}
