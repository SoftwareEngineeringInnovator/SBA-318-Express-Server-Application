// This file stores comments/updates related to incidents.
// The incidentId connects each comment to one incident.

const comments = [
  {
    id: 1,
    incidentId: 1,
    userId: 3,
    body: "Account was temporarily locked while the login activity is reviewed.",
  },
  {
    id: 2,
    incidentId: 2,
    userId: 1,
    body: "Email headers need to be reviewed before closing this report.",
  },
  {
    id: 3,
    incidentId: 3,
    userId: 2,
    body: "The affected workstation was disconnected from the network.",
  },
];

export default comments;