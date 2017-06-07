# Super invention!

This is a mock project which uses some REST endpoints to update configuration and call the "deploy" endpoint to publish the changes.

The API doesn't actually do anything here, it's simply a thing I can develop this tool against.

## Summary of the workflow:
Read a file containing the customerIds to update.
Get all the appIds for the customers we want to update.
Update the apps as appropriate.
Deploy the updated apps.

## Running the project

Launch the mock api by cd'ing into `mock-api` where you need to install dependencies with `npm install` and run with `npm start`.
Once the mock api is running, you can run the utility from the root of the project by installing dependencies with `npm install` then running with `npm start`