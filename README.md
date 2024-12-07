# Expense Tracker

A React-based web app to track incomes and expenses, featuring Google Sign-In and Firebase integration. Styled using Tailwind CSS and standard CSS, it enables users to manage finances with real-time updates.

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

# Expense Tracker

## Demo

You can view a live demo of the Expense Tracker app here:

[Live Demo](https://your-demo-link.com)

Alternatively, here's a short GIF showcasing the app in action:

![Demo GIF](https://your-image-link.com/demo.gif)

## Tech Stack

- **React**: JavaScript library used for building the user interface and managing state.
- **Firebase**: Provides authentication (Google Sign-In) and real-time Firestore database for storing user data.
- **Tailwind CSS**: Utility-first CSS framework for fast and responsive UI development.
- **CSS**: Used alongside Tailwind CSS for custom styling to enhance the UI.

## Features

- Google Sign-In: Users can sign up and log in using their Google account for seamless authentication.
- User Profile: Displays the user's profile picture and name fetched from their Google account.
- Income and Expense Tracking: Easily add income sources (e.g., salary) and expenses (e.g., haircut), with real-time balance updates.
- Real-Time Data Updates: All data, including income, expenses, and balance, is stored in Firebase and updated in real time.
- Firebase Integration: Utilizes Firebase for user authentication and data storage, ensuring secure and efficient management of user data.
- Responsive UI: Designed with Tailwind CSS and custom CSS for an intuitive and user-friendly interface.

## Installation

To get started with the **Expense Tracker** project, follow these steps:

1. **Clone the repository**  
    Clone the project to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

   **Navigate to the project directory**

Move into the project folder:

```
cd expense-tracker
```

**Install dependencies**

Install the necessary dependencies using npm:

```
npm install
```

**Set up Firebase**

Create a Firebase project on Firebase Console.
Obtain the Firebase configuration object and add it to your project:
Replace the firebaseConfig in src/firebase.js with your Firebase credentials.
Run the app locally
After setting up, start the development server:

```
npm start
```

The app should now be running on http://localhost:3000.

## Usage/Examples

1. **Sign Up/Login**

   - When you open the app, you will see a Google Sign-In button. Click on it to log in using your Google account.
   - After logging in, the app will display your profile picture, name, and a list of your income and expense data.

2. **Adding Income**

   - On the dashboard, you will see a form to add income. For example, if you want to add your salary, enter the amount (e.g., $2000) and select "Income" from the category options.
   - Click "Add", and the amount will be added to your balance.

3. **Adding Expense**

   - Similarly, you can add expenses by entering the amount and selecting the category (e.g., "Haircut" for $20).
   - Click "Add", and the expense will be subtracted from your balance.

4. **Real-Time Updates**

   - All updates to income and expense data are saved in Firebase and will reflect in real-time on your dashboard.

5. **Balance**
   - Your current balance is shown at the top of the dashboard and is updated automatically as you add income or expenses.

## API Reference (Firebase)

The project utilizes Firebase services to manage authentication and data storage

## Authors

- **Arshad Khan** - _Initial work_ - [YourGitHub](https://github.com/Arshad-Khan-12)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues, feel free to open an issue on the GitHub repository or contact me directly.

## Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository and submit a pull request with your proposed changes.
