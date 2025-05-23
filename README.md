# Shopping Cart Application

This is an Angular-based shopping cart application that allows users to browse products, add them to a cart, and proceed to checkout.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Features

- Product listing with details
- Add products to cart with quantity selection
- View and manage shopping cart
- Update product quantities in cart
- Remove items from cart
- Checkout functionality

## Technologies Used

- Angular 19
- TypeScript
- RxJS
- CSS Grid and Flexbox for responsive layout

## Project Structure

- `src/app/components` - Contains all the application components
- `src/app/models` - Contains data models
- `src/app/services` - Contains services for data management

## How to Upload This Project to GitHub

### Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account. If not, sign up at [github.com](https://github.com/signup).
2. **Git Installation** (for Option 1): Git is not currently installed on your system. You'll need to install it to use Git commands.

### Option 1: Using Git CLI (Recommended for Developers)

1. **Install Git**:
   - Download Git from [git-scm.com](https://git-scm.com/downloads)
   - Run the installer and follow the installation instructions
   - After installation, open a new PowerShell or Command Prompt window

2. **Configure Git** (first-time setup):
   ```
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Initialize Git Repository**:
   - Open PowerShell or Command Prompt
   - Navigate to your project directory (C:\SRINI\ANGULAR\fullstack-app)
   - Run:
   ```
   git init
   ```

4. **Create a .gitignore File** (already exists in your project)

5. **Add Files to Staging**:
   ```
   git add .
   ```

6. **Commit the Changes**:
   ```
   git commit -m "Initial commit of Shopping Cart Application"
   ```

7. **Create a New Repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Enter a repository name (e.g., "shopping-cart-app")
   - Add a description (optional)
   - Choose public or private repository
   - Do NOT initialize with README, .gitignore, or license
   - Click "Create repository"

8. **Connect Local Repository to GitHub**:
   ```
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
   ```
   (Replace YOUR-USERNAME and YOUR-REPOSITORY-NAME with your actual GitHub username and repository name)

9. **Push Code to GitHub**:
   ```
   git push -u origin master
   ```
   (If you're using a newer Git version, you might need to use `main` instead of `master`)

### Option 2: Using GitHub Desktop (Recommended for Beginners)

1. **Download and Install GitHub Desktop**:
   - Get it from [desktop.github.com](https://desktop.github.com/)
   - Install and open the application
   - Sign in to your GitHub account

2. **Add Local Repository**:
   - Click "File" > "Add local repository"
   - Browse to your project folder (C:\SRINI\ANGULAR\fullstack-app)
   - If it's not already a Git repository, GitHub Desktop will offer to initialize it

3. **Create Repository on GitHub**:
   - After adding the repository, click "Publish repository"
   - Enter a name and description
   - Choose whether to keep the code private or make it public
   - Click "Publish repository"

### Option 3: Using GitHub Web Interface

1. **Create a New Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Enter a repository name and description
   - Choose public or private
   - Click "Create repository"

2. **Upload Files**:
   - On the repository page, click "uploading an existing file" link
   - Drag and drop your project files or use the file selector
   - Note: This method is not recommended for large projects like Angular applications
   - For large projects, consider compressing your project folder into a ZIP file first, then uploading it

### Troubleshooting

- **Git Not Recognized**: If you get "git is not recognized" after installation, try closing and reopening your terminal/PowerShell window or restarting your computer.
- **Authentication Issues**: GitHub now uses personal access tokens instead of passwords. If prompted for a password, create a token at GitHub Settings > Developer settings > Personal access tokens.
- **Large Files**: GitHub has a file size limit of 100MB. If you have large files, consider using Git LFS or excluding them from your repository.
