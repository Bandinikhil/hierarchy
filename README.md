# Hierarchy UI - Assignment

[Hierarchy WebApp Link](https://hierarchyy.netlify.app/)


![image](https://github.com/Bandinikhil/hierarchy/assets/105233916/509e5462-6660-46ab-a79e-8e7d95924344)


## Screenshot

![Screenshot (349)](https://github.com/Bandinikhil/hierarchy/assets/105233916/bb554703-4971-4dd9-a46d-d961a4cace2e)


## Employee Details

For each employee, the following details are stored:
- Name
- ID
- Phone Number
- Email ID

## Functionality added

1. Display the position name with the employee name.
2. Add a new team member.
3. Change the team of a team member (within the same department).
4. Remove a team member.
5. Update employee information.
6. Create a new team or edit an existing one.
7. Filter employees by name, phone number, or email ID.

## Bonus Functionalities added

1. Ensure two teams cannot have the same name.
2. Select a team/head and view all employees under them.
3. Promote each employee one level up and remove the employee from the previous level.

## Data Persistence

Data is stored locally in the browser, mimicking database persistence. Reopening the app will retain the hierarchy structure.

## Tech Stack

- **React**: For building the user interface.
- **Tailwind CSS**: For styling the components.
- **Redux**: For state management.
- **Jest**: For unit testing.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bandinikhil/hierarchy.git
   cd hierarchy-ui

   2. npm install

   3. npm run dev
