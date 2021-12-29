# mindful-tech-covid-app-backend

## Run backend in localhost

### Commands
***yarn install***: installing packeges

***yarn start***: start app

### Database
The *dbquery.sql* root file contains the structure of the required table.

The table is filled with data when first running the application. It's also automaticly refreshed every weekday at 7am with the latest data.

### .env file
Create a *.env* by copying the schema of *.env.example* file and enter your own environmental variables. 

## Deployed backend
http://mindful-tech-covid-app-backend.herokuapp.com/stats/

Please note that the app might be shut down by Heroku if it hasn't been used for while. In this case, running it for the first time could take longer. 
