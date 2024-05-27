# Multi-Page Form Application

## Description

This is a multi-page form application built with Vite, React, and TypeScript. The application allows users to fill in their contact details, salary details, and review their information before submission. It includes components built with Shadcn, form validation using Zod, and unit testing with Vitest.

## Features

- Multi-step form navigation
- Form validation with Zod
- Progress bar indicating form completion with Shadcn
- Unit testing with Vitest
- User feedback on form submission

## Screenshot

![App Screenshot](/public/Screenshot%202024-05-27%20at%2016.43.36.png)

## Installation

To install and run this application locally, follow these steps:

1. **Clone the repository**

    git clone https://github.com/yourusername/multi-page-form.git
    cd multi-page-form

2. **Install Dependencies**

    npm install

3. **Start the development server**

    npm run dev



## Usage

  Once the development server is running, you can access the application in your browser at http://localhost:3000.

  **Form Steps**

    Contact Details

      - Full Name
      - Email
      - Phone Number
      - Salary Details

    Salary Range

    Review Details
      - Review and confirm the entered information

  **Navigation**

      - Use the Next button to proceed to the next step.
      - Use the Back button to go back to the previous step.
      - On the final review step, submit the form to receive a success message.


## Testing

  This project uses Vitest for unit testing. To run the tests, use the following command:

    npm test
