---
sidebar_position: 1
---

# Wesago

- Wesago is a modern forum for students and teachers at the University of Aveiro. It is a place where you can ask questions about your department, subjects, or anything else that you want to know. You can, **and should**, help others by answering their questions.

- This platform aims to enhance the academic experience of all members of the University of Aveiro community by providing a space for sharing knowledge and experiences.

## Functional Requirements

- **Create categories:** Create categories with an unlimited number and depth of subcategories.

- **Create public threads:** Create public threads and start a discussion with the community.

- **Create private threads:** Create private threads and talk with your friends privately.

- **Create pools:** Create pools and ask the community about their opinion.


- **Follow user:** Follow users and get notifications when they create a new thread.


- **Easy search:** Search for threads, categories, and users with a simple and easy search.

## Non-Functional Requirements

- **Availability:** The system should be available most of the time.

- **Security:** The system should encrypt all communication and implement a role-based access control mechanism to restrict access to sensitive data.

- **Maintainability:** The system should be modular and follow the SOLID principles to facilitate future changes. The code should be well-documented, and the system should have automated tests to ensure its correctness.

- **Usability:** The system should have an intuitive user interface to provide a good user experience.

- **Scalability:** The system should be able to handle a large number of users and threads, never compromising its performance.

## Software and key technologies

- **Django** is the framework used to build the web application. It is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

- **NGINX** is used as a reverse proxy to handle incoming HTTP requests and act as a load balancer to distribute incoming traffic across multiple Django application instances.

- **PostgreSQL** is the database used to store the data. It is a powerful, open source object-relational database system.

- **Celery** is used to handle asynchronous tasks. It is a distributed task queue that is used to handle a vast number of messages or tasks. It can be scaled horizontally to handle a large number of messages.

- **Redis** is used as a cache and message broker for Celery.

- **Docker** is used to containerize the application and its dependencies.


:::info

New technologies will be added as the project progresses, for example, **Gunicorn**, **Rsyslog**, **Kubernetes**, etc.

:::

## Initial Architecture

![Wesago Architecture](../static/img/wesago_architecture_original.png)

## Components