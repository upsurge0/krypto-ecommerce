##  Introduction

**Frameworks  and Technologies  used:** React, NodeJS, TypeScript, Vite, Redux Toolkit and React Router Dom

**Section:**
[Running the Application](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#running-the-application-locally) | [Website Functionally and Features](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#website-functionally-and-features) |
[Other FAQs/Points](https://github.com/upsurge0/krypto-ecommerce/blob/main/README.md#other-faqspoints)

 # Running the application Locally
 
Clone the repo and run the following commands.

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

The Home / Product Page is the landing page. It's accessible without login as well. The favourites feature isn't available to the user unless they are signed in. If you click favourite without login - it will prompt you to login.
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
- This feature can only be utilised if logged in.
- Add remove items from Favourite Tab.

![Login](https://imgur.com/ZsP19lP.png)

**Product Item:**
- Has the detailed description of the product
- Direct Buy Now which takes the person to the cart. Second, Add to cart, it only adds the item to the cart.

![Product Item](https://i.imgur.com/sClvXvX.png)

**Cart:**
- Auto Calculation of total amount.
- Add, update and remove items

![Cart](https://i.imgur.com/hfufkNe.png)
- When the cart has no items in the bag.
![Cart Empty](https://i.imgur.com/zMzYKPR.png)

##  Other FAQs/Points

**Are there any improvements you could make to your submission?**
 
 Concept Improvements:
- Add discount code functionality at checkout.
- Add option for users to write reviews after login.
- Categories within the application for different types of products.

Technology Improvements:
- Using an alternative to JSON Server for scalability such as ExpressJS
- Adding SEO to the website by using framework such as NextJS
- Add stay logged in feature.

**What would you do differently if you were allocated more time?**

 - Adding a cache layer to reduce the load time.
 - Store and select from various address saved for a user profile.
 - Different lists within favourites.
 - Automatic redirects back to the original page login instead of the default homepage.
