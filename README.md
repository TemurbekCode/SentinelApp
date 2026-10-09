# Sentinel — Real-Time System Monitoring

**A developer-focused system monitoring dashboard designed to make system health, resource usage, and operational issues easier to understand.**

Sentinel is a work-in-progress monitoring project focused on presenting system metrics through a clean, dark, technical interface. The long-term goal is to build a lightweight Go-based agent that collects local system information and delivers it to a monitoring dashboard.

> **Project status:** In development. The current UI prototypes use simulated data. Real system monitoring, agent communication, and backend integration are planned development stages.

## Overview

Sentinel aims to provide a centralized view of system health and resource utilization.

The planned monitoring capabilities include:

* **CPU monitoring** — processor utilization and system load.
* **Memory monitoring** — RAM usage and availability.
* **Disk monitoring** — storage utilization and capacity.
* **Network monitoring** — network activity and traffic statistics.
* **Service health** — visibility into monitored services.
* **Alert management** — critical, warning, and informational events.
* **Activity history** — a record of monitoring events and changes.
* **Real-time dashboard** — continuously updated metrics and visualizations.

These capabilities represent the project roadmap; they are not all implemented yet.

## Design & Interface

Sentinel follows a dark, technical design language inspired by modern infrastructure monitoring tools.

The interface focuses on:

* Clear information hierarchy.
* Reusable UI components.
* Responsive layouts.
* Consistent status indicators.
* Data visualization and readable metrics.
* Subtle animations and accessible interactions.

## Technology Stack

| Technology           | Purpose                                     |
| -------------------- | ------------------------------------------- |
| HTML5                | Initial interface prototypes                |
| CSS3                 | Styling, responsive layouts, and animations |
| JavaScript           | Prototype interactions and simulated data   |
| React                | Planned component-based frontend            |
| Go                   | Planned system monitoring agent             |
| Backend technologies | To be determined during implementation      |

The technology stack will evolve as the project develops.

## Project Structure

```text
SentinelApp/
├── Agent/            # Planned Go system monitoring agent
├── Authentication/   # Welcome and identity interface
├── Backend/          # Planned backend services
├── Frontend/         # Monitoring dashboard
├── Landing/          # Public landing page
└── README.md
```

Each directory represents a separate part of the project. Implementation details may evolve during development.

## Getting Started

### Prerequisites

* Node.js and npm for React-based applications.
* Git for version control.
* A modern web browser.

Go will be required when development of the monitoring agent begins.

### Development

The frontend applications are maintained separately. To start an application, navigate to its directory and install its dependencies if needed.

Example:

```bash
cd Landing
npm install
npm run dev
```

For Authentication or Frontend, use the same workflow from the corresponding directory once its React application is configured.

> Commands depend on the current state of each subproject and its `package.json`.

## Development Roadmap

* [x] Create the initial Sentinel dashboard prototype.
* [x] Create the initial landing page prototype.
* [x] Design the authentication and welcome flow.
* [ ] Convert the landing page to React.
* [ ] Convert the authentication interface to React.
* [ ] Build the monitoring dashboard with reusable React components.
* [ ] Implement simulated real-time metric updates.
* [ ] Develop the Go system monitoring agent.
* [ ] Implement secure communication between the agent and backend.
* [ ] Integrate real system metrics into the dashboard.
* [ ] Add monitoring alerts, history, and error handling.
* [ ] Test and document the complete application.

Checklist items should be updated as the corresponding work is completed.

## Current Limitations

* The initial interfaces are prototypes and may not represent the final architecture.
* Dashboard metrics may be simulated rather than collected from a real machine.
* The Go monitoring agent and backend integration are planned features.
* The current welcome flow is not a production authentication system.
* No production deployment or security guarantees are implied.

## Project Goals

Sentinel is being developed to explore system monitoring, frontend architecture, Go-based system information collection, and integration between local agents and web applications.

The project also serves as a practical software development and portfolio project.

## Contributing

This project is currently under active personal development.

Suggestions, bug reports, and improvement ideas are welcome through GitHub Issues and Pull Requests.

Please describe proposed changes clearly and keep contributions focused on the project's monitoring goals.

## License

No license has been selected yet. Unless a license is added, the repository should not be assumed to grant permission to reuse, modify, or redistribute its code.

---

**Sentinel** — Your infrastructure, under constant watch.
