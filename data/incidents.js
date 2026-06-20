// This file stores cybersecurity incidents.
// Each incident has a userId so we know who reported it.

const incidents = [
  {
    id: 1,
    userId: 1,
    title: "Suspicious Login Attempt",
    category: "Authentication",
    severity: "High",
    status: "Open",
    description: "Multiple failed login attempts were detected for a user account.",
  },
  {
    id: 2,
    userId: 2,
    title: "Phishing Email Reported",
    category: "Email Security",
    severity: "Medium",
    status: "Investigating",
    description: "An employee reported a suspicious email asking for password information.",
  },
  {
    id: 3,
    userId: 3,
    title: "Malware Alert",
    category: "Endpoint Security",
    severity: "Critical",
    status: "Open",
    description: "Antivirus software detected possible malware on a workstation.",
  },
];
  
export default incidents;