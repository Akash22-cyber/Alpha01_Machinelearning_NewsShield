# NewsShield

### Table of Contents
- [NewsShield](#newsshield-ai)
    - [Table of Contents](#table-of-contents)
  - [System Overview](#system-overview)
    - [High-Level Concept](#high-level-concept)
  - [Architecture Components](#architecture-components)
    - [1. Frontend Layer](#1-frontend-layer)
    - [3. Core Backend](#3-core-backend)
    - [4. AI & ML Integration](#4-ai--ml-integration)
    - [5. Data Storage](#5-data-storage)
  - [Technical Stack](#technical-stack)
    - [Frontend Technologies](#frontend-technologies)
    - [Backend Technologies](#backend-technologies)
    - [I Integration](#i-integration)
  - [Core Features](#core-features)
  - [Data Flow & Security](#data-flow--security)
  - [Setup & Deployment](#setup--deployment)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Architecture Diagram](#architecture-diagram)
  - [Expected Outcomes](#expected-outcomes)
  - [Required Skills](#required-skills)

---

## System Overview

NewsShield is a web-based platform designed to detect fake news using machine learning. Users can input a news headline or full article, and the system analyzes the content to classify it as **Fake or Real**.

The system also provides a **confidence score** and a **basic explanation** (keywords or patterns) to help users understand the reasoning behind the prediction.

### High-Level Concept
Imagine having an AI assistant that instantly verifies news authenticity and tells you whether the information is trustworthy—that’s NewsShield!

---

## Architecture Components

### 1. Frontend Layer
- **UI Interface**: Allows users to input news headlines or articles
- Displays prediction results (Fake/Real)
- Shows confidence score and explanation

### 3. Core Backend
- **Server (Node.js/Express)**: Handles API requests and responses
- **Inference Engine**: Processes input text
- **Prediction Module**: Returns Fake/Real classification with confidence score

### 4. AI & ML Integration
- **ML Models**: Trained on fake news datasets
- **NLP Processing**:
  - Text cleaning
  - Tokenization
  - Feature extraction (TF-IDF / embeddings)
- **Models Used**:
  - Logistic Regression / Naive Bayes / Deep Learning models

### 5. Data Storage
- Stores trained models
- Optional logging of inputs for future improvements

---

## Technical Stack

### Frontend Technologies
 - **framework**: HTML, CSS, JavaScript
- **styling**: CSS

### Backend Technologies
  - **framework**: Node.js / Express
  - **language**: JavaScript
  - **ML/NLP**: Scikit-learn, TensorFlow / PyTorch

### I Integration

  - **Model Serving**: API-based inference
  - **processing**: Real-Time Prediction

---

## Core Features

### 1. News Input
- Users can enter news headline or article text

### 2. Fake/Real Classification
- ML model predicts whether news is Fake or Real

### 3. Confidence Score
- Displays probability score for prediction

### 4. Explanation of Result
- Highlights keywords or patterns influencing prediction

### 5. Backend Integration
- Seamless connection between frontend and ML model

### 6. Real-Time Analysis
- Instant prediction with minimal delay

---

## Data Flow & Security

```mermaid id="oq197j"
sequenceDiagram
    %% Define Participants
    participant U as User
    participant F as Frontend
    participant B as Backend
    participant AI as AI Services
    participant D as Data Storage

    %% Interaction Flow
    U->>F: Request/ View Content
    F->>B: Forward Request
    B->>AI: Analyze Content
    AI->>B: Display False Output
    B->>F: Deliver Results
    F->>U: Display Balanced Insights
```
---

## Setup & Deployment

### Frontend Setup
Go to frontend/index.html
Right-click → Open with Live Server

 
```
```

### Backend Setup

*Install Dependencies:*
```bash
cd backend
npm install
```

---



*Setup environment variables:*
  - add .env file in `/backend`directory.
  - add following environment variable in your .env file.
  ```
    GEMINI_API_KEY=<your api key>
    PORT=5000
    
  ```

*Run backend:*
```bash
cd backend
npm install
node server.js

```

---

## Architecture Diagram


```mermaid
graph TB
    %% Define Subgraphs with Colors and Text Styles
    subgraph Client Side
        style UI fill:#FFDDC1,stroke:#FF6600,stroke-width:2px,color:#000,font-weight:bold
        UI[html,css UI]
    end

    subgraph Server Side
        style API fill:#D1E8FF,stroke:#005BBB,stroke-width:2px,color:#000,font-weight:bold
        style Analyzer fill:#D1E8FF,stroke:#005BBB,stroke-width:2px,color:#000,font-weight:bold
        style CNEngine fill:#D1E8FF,stroke:#005BBB,stroke-width:2px,color:#000,font-weight:bold
        style Context fill:#D1E8FF,stroke:#005BBB,stroke-width:2px,color:#000,font-weight:bold
        API[Google Gemini API]
        Analyzer[Content Analyzer]
        CNEngine[Counter-Narrative Engine]
        Context[Context Manager]

    end

    subgraph AI & NLP Layer
        style LLM fill:#E6FFCC,stroke:#66BB66,stroke-width:2px,color:#000,font-weight:bold
      
        LLM[LLM Service]
    end

    subgraph Data Storage
        style VectorDB fill:#FFDDEE,stroke:#CC3366,stroke-width:2px,color:#000,font-weight:bold
        VectorDB[(Vector Database)]
    end

    %% Define Connections with Labels
    style Browser fill:#FFFF99,stroke:#FFAA00,stroke-width:2px,color:#000,font-weight:bold
    Browser -->|User Interaction| UI
    UI -->|Requests| API
    API -->|Process| Analyzer
    Analyzer -->|Analysis| CNEngine
    CNEngine -->|Generates| LLM
    API -->|Manages| Context
    CNEngine -->|Stores| VectorDB
    API -->|Responses| UI

```

---

## Contributers
- **Akash Jadhav**
- **Vaibhav Karhale**
- **Abhishek Bhabad**
- **Vedant Pandit**
- **Vinod Choudhary**







