# JC's Portfolio!
  * React app created with Vite
  * Deployed using Netlify
## Top Navigation Bar
  * Fully responsive - Nav links shrink to hamburger menu on smaller screens.
## About Me:
  * 2/22/23 - This has not been set up yet.

## Projects:
# Woodworker's Project Manager - Full Stack
  * Node, Express, React, Postgres - Deployed using Heroku
  * Originally created for woodworker's to manage their projects, and evolved to include a CRM system.
  * This app is further meant to be distributed by local lumber yards to their customers.
    * As customers use the app the lumber yard admin will be able to update wood pricing, add new woods, view non-personal data compiled from their users in effort to track their hardwood needs and aid in ordering inventory, and mass-email their users for marketing.
  * User Features:
    * Can register, sign in, and sign out
    * Can view/edit tiles of all of their current projects and create new ones
    * Clicking on a project tile will bring them to a show page with all project information including:
      * Customer name, destination, description, quantity
      * Estimated retail pricing per item based on user's settings for wood waste, labor, and retail markup
      * An array of uploaded images and their descriptions powered by React DropZone and AWS S3.
    * User settings include three options:
      * Wood waste - This is a percentage value that describes the amount of waste a woodworker can expect from milling.  iI is used to automatically increase the amount of board feet needed for hardwoods in their project.  For instance, if they add 3 board feet of Black Walnut, and their wood waste is set to 10%, the project will show 3.3 board feet needed.  All pricing calculations will be adjusted as well.
      * Labor rate - Straight forward ... this is their hourly rate
      * Retail Markup - This is a percentage value, and relates to the retail markup on their project after including all material and labor costs.
    * CRM sytem
      * View a table of all customers they've added to the CRM system along with name, phone, email, and status.
      * Click status to reveal a dropdown list of different statuses from "prospect" to "delivered"
      * Click the customer's cell phone number to reveal a pop up that asks them to enter an SMS message.  This uses Twilio's API to send texts to the customer directly from the CRM system.
      * Send emails to customer using the EmailJS API, however this functionality has not yet been set up.
      * Click a customer to reveal a table of notes.
        * Add new notes and view them in chronological order.
  * Admin Features:
    * Can sign in and out.
    * Will see a bar graph data visuaization of the top hardwoods users have added to their projects based on the amount of board feet.
    * Can add and delete hardwoods from the list, and edit their pricing.
      * They can NOT delete a hardwood if it has been added to ANY user's project.  A message will appear reminding them.
    * Can send a message to all user emails in one click through EmailJS API
# Car Show App - Full Stack
  * Node, Express, React, Postgres - Deployed using Heroku
  * Made for participants of a car show to register their vehicle and pay the fee via paypal
  * User Features:
    * Can register, sign in and sign out
    * While signed in they can add as many vehicles to their profile as they'd like
    * They have the option to delete one of their vehicles or register it for the show
    * A Paypal form opens upon cicking "register" so the user can pay via Paypal or credit card
    * Upon successful registration the app will auto-generate a registration number for the user.
  Admin User Features:
    * Can sign in and out
    * Can view a table of all vehicles added by users along with each user's information
    * Year, make, mode, name, and email columns are all sortable by clicking their heading
    * They have the option to click "pay cash" next to anyone's vehicle that isn't already registered for the show.  This manually registers them and auto-generates their registration number.  A column shows whether a participant has paid with cash or credit.
## Contact:
  * Uses EmailJS to send emails to my personal email address whenever someone submits a form.
    * 2/22 - No validation besies generic email checking yet
    * Credentials are stored as environment variables kept off Github


