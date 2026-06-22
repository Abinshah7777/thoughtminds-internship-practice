import React from 'react';

/**
 * Generates a lightweight, on-brand cover for a project card using only
 * the accent palette — no external image hotlinks that can break or feel
 * disconnected from the actual project.
 */
export default function ProjectCover({ label }) {
  return (
    <svg viewBox="0 0 600 340" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="600" height="340" fill="#FAFAF7" />
      <rect width="600" height="340" fill="url(#grid)" opacity="0.5" />
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 0H30V30" fill="none" stroke="#E4E3DD" strokeWidth="1" />
        </pattern>
      </defs>
      <circle cx="300" cy="170" r="86" fill="#E9ECFC" />
      <text
        x="300"
        y="178"
        textAnchor="middle"
        fontFamily="JetBrains Mono, monospace"
        fontSize="20"
        fill="#3548E0"
      >
        {label}
      </text>
    </svg>
  );
}
