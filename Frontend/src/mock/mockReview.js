// Placeholder review result. Replace this with the real API response
// once the backend / model integration is wired up.
const mockReview = {
  summary: 'Found 3 issues across correctness, security and performance.',
  sections: [
    {
      key: 'issues',
      icon: '🔍',
      title: 'Issues Found',
      items: [
        'Loose equality (==) used instead of strict equality (===) on line 4.',
        'The loop keeps running after a match is found, which does unnecessary work.',
        'No handling for the case where "id" does not match any user.',
      ],
    },
    {
      key: 'whyItMatters',
      icon: '⚠️',
      title: 'Why It Matters',
      items: [
        'Loose equality can silently match values of different types, causing hard-to-trace bugs.',
        'Scanning the full array every time hurts performance as the user list grows.',
      ],
    },
    {
      key: 'recommendedFix',
      icon: '✅',
      title: 'Recommended Fix',
      code: `function getUser(id) {\n  return users.find((u) => u.id === id) ?? null;\n}`,
    },
    {
      key: 'improvements',
      icon: '💡',
      title: 'Improvements',
      items: [
        'Use Array.prototype.find to express intent more clearly.',
        'Return a explicit fallback (null) so callers can handle a missing user.',
      ],
    },
    {
      key: 'security',
      icon: '🔒',
      title: 'Security',
      items: ['No security issues detected in this snippet.'],
    },
    {
      key: 'performance',
      icon: '⚡',
      title: 'Performance',
      items: [
        'find() exits as soon as a match is found, unlike forEach, which always scans every item.',
      ],
    },
    {
      key: 'testing',
      icon: '🧪',
      title: 'Testing',
      items: [
        'Add a test for an id that exists.',
        'Add a test for an id that does not exist, and assert the fallback value.',
      ],
    },
  ],
}

export default mockReview
