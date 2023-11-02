# Bravegirl Server

## Getting Started

Before you start contributing, make sure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- NPM (Node Package Manager): Included with Node.js installation
- Postgresql: [Download Postgresql](https://www.postgresql.org/download/) and install it on your machine.

### Installing Postgresql


#### Step 1: Install PostgreSQL on Ubuntu


If you don't have PostgreSQL installed on your Ubuntu machine, follow these steps:

- Open a terminal on your Ubuntu system.

- Update the package list to ensure you have the latest information about available packages:

```bash
sudo apt update
Install PostgreSQL with the following command:
```


```bash
sudo apt install postgresql
```


- During the installation process, PostgreSQL will be automatically set up as a system service and will start running.

#### Step 2: Create a PostgreSQL Database


- Open a terminal on your Ubuntu system.

- Log in to PostgreSQL as the superuser (usually "postgres"):

```bash
Copy code
sudo -i -u postgres
In the PostgreSQL shell, create a new database (replace your-database-name with your desired database name):
```


```postgresql
CREATE DATABASE your-database-name;
```


- You can exit the PostgreSQL shell by typing:

```sql
\q
```


#### Step 3: Connect the Database to Your Project

- Open your project and locate the .env or configuration file where the DATABASE_URL is defined.

- Update the DATABASE_URL to connect to the PostgreSQL database you just created. Replace the placeholders with the appropriate values:

```makefile
DATABASE_URL="postgresql://your-username:your-password@localhost:5432/your-database-name"
```


your-username: Your PostgreSQL username (usually "postgres").
your-password: Your PostgreSQL password.
localhost: The hostname where PostgreSQL is running.
5432: The PostgreSQL port (default is 5432).
your-database-name: The name of the database you created.
Save the changes in your project's configuration file.

#### Step 4: Verify the Connection

- Start your project or application.

- Verify that your project can successfully connect to the PostgreSQL database you created.

That's it! You have successfully set up a PostgreSQL database and connected it to your project on Ubuntu.

If you encounter any issues during this setup, please refer to the PostgreSQL documentation for troubleshooting tips specific to Ubuntu (Feel free to reach out to help troubleshoot).
