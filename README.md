# Resume App
I created this app since most of the nicer resume creation tools out there don't work well with standard resume parsers ( such as lever's: https://resume-parser.vercel.app/). It was also a good excuse to learn typescript and become more familiar with React as an opportunity to write a CRUD app.

# Next MAJOR Change
Issues from node update. Start fresh with `npx create-react-app my-app --template typescript` and `npm install react-step-builder`. Then copy over all the necessary components...

## ToDos
- change the mapping for the current job entries so they don't use the job name (will have issues if two positions share the same title)
- set up GH actions to make sure it actually builds
- find way to generate the info from overleaf resume programmatically and have export as pdf
