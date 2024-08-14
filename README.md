# Implementing Authentication and RBAC in a Next.js App Using Descope

This repository demonstrates how to add authentication and RBAC in a Next.js application using the the Descope Next.js SDK.

This is a starter template. Check out the full code in the `main` branch.

## Running the Project Locally

To run the project locally, you need to have the following:

-   [Node.js v18](https://nodejs.org/en/download) installed on your local machine
-   [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your local machine
-   A [Descope account](https://www.descope.com/sign-up)

Having met the prerequisites, follow these steps:

1. Create a project on Descope.

    - Under "Who uses your application?", select **Consumer**:

        ![Selecting the target audience](https://i.imgur.com/MsCgvJ5.png)

    - For "Which authentication methods do you want to use?", select **Magic Link**:

        ![Selecting the authentication method](https://i.imgur.com/vMWW4Ak.png)

    - Skip the MFA method step and click **Go ahead without MFA**:

        ![Skipping MFA method step](https://i.imgur.com/6wiRdtL.png)

    - Generate the flows:

        ![The flows that will be generated](https://i.imgur.com/i6IIy1h.png)

2. Obtain the project ID:

    ![Obtaining the project ID](https://i.imgur.com/CPT2QWk.png)

3. Generate a management key:

    ![Generating a management key](https://i.imgur.com/uAIrcbH.png)

4. Clone the project to your local machine:

    ```bash
    git clone --single-branch -b main https://github.com/kimanikevin254/descope-nextjs-auth-rbac.git
    ```

5. Navigate into the project directory and install all the dependencies:

    ```bash
    cd descope-nextjs-auth-rbac && npm i
    npm i @descope/nextjs-sdk
    ```

6. Rename `.env.example` to `.env` and replace the placeholder values with the values you obtained in the previous steps.

7. Run prisma migration:

    ```bash
    npx prisma migrate dev --name init
    ```

8. Open `app/layout.js` and replace `<YOUR-PROJECT-ID>` with the necessary value.

9. Run the application using the command `npm run dev` and navigate to "http://localhost:3000". You'll be redirected to the signup page. Complete the auth process.

10. Go to the Descope console, select **Authorization** from the sidebar, and click the **+ Role** button. In the "Add Role" modal, provide "editor" as the name and "Can write posts and submit them for approval" as the description. Then click the **Add** button.

    ![Adding a role](https://i.imgur.com/nl5ylFG.png)

    Repeat the same process to create a role for the admin. Provide "admin" as the role and "Can toggle a post's published status as the description".

11. Assign the editor role to the user and go back to the application. You'll be able to write posts and submit them for approval but you can't toggle their published status.

12. On the Descope console and assign the admin role to the user. Go back to the application, reload it, and you'll be able to toggle a post's published status.
