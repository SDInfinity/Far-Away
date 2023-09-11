# Far Away - Travel Packing List App

Far Away is a simple and intuitive React app designed to help you keep track of items while traveling by creating and managing a packing list. Whether you're planning a vacation, a weekend getaway, or a business trip, Far Away makes it easy to stay organized and ensure you don't forget anything important.

## Preview the Live Site

![Screenshot (49)](https://github.com/SDInfinity/Far-Away/assets/102734212/80d9117b-c479-4899-a059-2fd720d37590)



## Features

- **Add Items**: Easily add items to your packing list by typing them into the input field and clicking the "Add" button.

- **Delete Items**: Remove items from your list by clicking the delete button next to each item.

- **Check Off Packed Items**: Mark items as packed by clicking the checkbox next to each item. This helps you keep track of what's already in your luggage.

- **Sort Items**: Sort your items based on different criteria, including input order, description, and packed status. This allows you to arrange your list in a way that makes the most sense to you.

- **Clear All Items**: Clear your entire list with a single click. This is handy when you want to start fresh for a new trip.

- **Footer Stats**: The app displays helpful statistics in the footer, showing you the total number of items in your list and the number and percentage of items that are already packed.

## Components

Far Away is built with a modular structure, utilizing multiple components to keep the code organized and maintainable:

- **Header**: The header component contains the app's title and provides an overview of its purpose.

- **Form**: This component handles the input field for adding new items to the list and the necessary logic for adding items.

- **List**: The list component displays your items and provides options for deleting items and checking them off.

- **Stats**: The stats component shows the statistics of your packing progress, including the total number of items and the percentage of packed items.

- **Item (Reusable)**: Items in the list are rendered using a reusable Item component. This component is dynamically generated through the map function, ensuring consistent rendering for each item.

## Responsive Design

Far Away is designed to be responsive and accessible across all devices. Whether you're using it on your desktop, tablet, or smartphone, you can enjoy a seamless experience.

## State Management

The app efficiently manages state using the useState hook from React. This allows for real-time updates and interactions as you add, delete, and check off items on your packing list.

## CRUD Operations

Far Away utilizes higher-order array methods in JavaScript to implement CRUD (Create, Read, Update, Delete) operations on your packing list. This ensures efficient and effective data manipulation.



