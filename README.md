# Cybersecurity Incident Tracker (SBA 318)

## About This Project
Welcome to the **Cybersecurity Incident Tracker**. This backend web application was built from scratch as part of the **SBA 318: Express Server Application** assessment. 

The main goal of this project is to showcase core server-side engineering concepts using Node.js and Express. It acts as a mock incident response control center where security analysts can log new cybersecurity incidents, view a live tracker dashboard, update ticket fields, filter logs by severity or status, and leave follow-up comments. 

To keep the application light and focused entirely on server mechanics, data manipulation is handled using structured, in-memory JavaScript arrays instead of a persistent database engine.

---

## Key Features & Rubric Requirements Covered

This app hits all the core technical objectives outlined in the rubric:

* **Three Distinct Data Categories:** Fully supports structured relationship workflows across `users`, `incidents`, and `comments`.
* **Full RESTful CRUD Implementation:** Models strict REST standards with dedicated handlers for resource operations.
  * `GET` routes fetch exposed data logs for all categories.
  * `POST` routes allow creation of new data via client requests.
  * `PATCH` routes allow on-the-fly manipulation of records.
  * `DELETE` routes handle clean removal of records.
* **Dynamic Parameter Tracking:** Leverages standard Route Parameters (like `/:id`) for specific record targets, alongside Query Parameters (like `?severity=High`) to filter results down dynamically.
* **Custom Middleware Stack:** Implements multiple custom middleware layers, including an automated request logger and input parsing validation.
* **Centralized Error-Handling Middleware:** Features a custom fallback middleware pipeline (`(err, req, res, next)`) to gracefully handle 404s and 500 exceptions without crashing the server process.
* **Dynamic EJS Templating & Forms:** Renders a clean monitoring view engine using EJS, which captures native HTML form inputs to send backend `POST` commands.
* **Static File Architecture:** Delivers look-and-feel stylesheet visuals using Express's built-in static file utility (`express.static`).
* **File Download Engine:** Implements a handy utility route using `res.download()` that wraps an incident log as a downloadable `.txt` file for forensic evidence capture.

---

## Tech Stack
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Template Engine:** EJS (Embedded JavaScript)
* **Styling:** Custom CSS3
* **Testing Client:** Thunder Client (VS Code)
* **Version Control:** Git & GitHub

---

## Project Structure
```text
SBA-318_Express_Server_Application/
│
├── data/                    
│   ├── comments.js          
│   ├── incidents.js         
│   └── users.js             
│
├── public/                  
│   ├── css/
│   │   └── style.css        
│   └── images/
│       └── logo.png
│
├── routes/                  
│   ├── comments.js          
│   ├── incidents.js         
│   └── users.js             
│
├── utilities/               
│   └── error.js             
│
├── views/                   
│   ├── dashboard.ejs       
│   └── error.ejs           
│
├── index.js                
├── package.json            
└── README.md
```
## Author

Fredy Chilito
Software Engineering Student
Created as part of the Per Scholas Software Engineering Program.
Project: Cybersecurity Incident Tracker