##  Introduction

As for the hiring task of Krypto - this is the Front-End Task to build an ecommerce website. The steps to run the application locally are mentioned in a later section.

**Frameworks  and Technologies  used:** React, NodeJS, TypeScript, Vite, Redux Toolkit and React Router Dom

**Section:**
[Running the Application](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#running-the-application-locally) | [Website Functionally and Features](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#website-functionally-and-features) |
[Other FAQs/Points](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#other-faqspoints)

 # Running the application Locally
 
Download the ZIP File from GitHub and open it in any code editor. Using the terminal at the location of the folder run the below command:

    npm i
    npm run server

![Output](https://imgur.com/DZBUBOu.png)
Open another terminal while keeping the earlier one running in background. Run the following command:

    npm run dev

The application will begin to run at the localhost. The link will also appear in the terminal.
![Output](https://imgur.com/w5fwloY.png)

## Website Functionally and Features

![Flowchart](https://imgur.com/abhe5jL.png)

The website is responsive in nature in all the above mentioned pages.

The HomePage / Product Page is the Front Page. It's accessible without login as well. Only the favourites feature isn't available to the user unless they are signed in. If you click favourite without login - it will prompt you to login.
- A grid of all the various products with their key features in it.
- Each product can further be opened for more details

![Homepage](https://i.imgur.com/qLqY4ea.png)

**Responsive Website Mobile Version:**

![Homepage Mobile](https://imgur.com/LerPfZa.png)

**Upon clicking login button:**
- Create Account - Ensure the password is strong in nature
- Login

![Login](https://i.imgur.com/5RHyOzQ.png)

**Favourties Tab:**
- This feature can only be utilised if logined.
- Add remove items from Favourite Tab.

![Login](https://imgur.com/ZsP19lP.png)

**Product Item:**
- Has the detailed description of the product
- Direct Buy Now which takes the person to the cart. Second, Add to cart, it only adds the item to the cart.

![Product Item](https://i.imgur.com/sClvXvX.png)

**Cart:**
- Auto Calculation of total amount.
- Add more items or remove them

![Cart](https://i.imgur.com/hfufkNe.png)
- When the cart has no items in the bag.
![Cart Empty](https://i.imgur.com/zMzYKPR.png)

##  Other FAQs/Points

**Are there any improvements you could make to your submission?**
 
 Concept Improvements:
- There is no option to enter discount code even though in the final calculation there is a category for calculating the discount.
- Options for users to write review comments after login.
- Categories within the application for different types of products.

Technology Improvements:
- Using an alternative to JSON Server for scalability such as ExpressJS
- Adding SEO to the website by using framework such as NextJS
- User would stayed logined on the device it previously logs into.

**What would you do differently if you were allocated more time?**

 - Adding a cache layer to reduce the load time.
 - Using Kubernetes for scalability and automatic load balancing.
  - Store and Select from various address saved for a user profile.
 -  Different lists within favourites.
 - Automatic redirects back to the original page upon required to login instead of the default homepage.

 **Original Boiler Plate/Task:** [Link here](https://github.com/gurukishore111/Ecommerce-boilerplate)

> Submission by Austin Jerry - austin.jerry2019@vitbhopal.ac.in
