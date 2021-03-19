## AWS Consumer

Small Node.js server integrated with handlebars that receives text and returns the tone of said text -e.g: confident, fearfull, etc-


## Getting started
```sh
npm install
npm run start
```

## Dependencies

This project uses an IBM Cloud Foundry service to do the tone analyzer requests. Said cloud foundry service was deployed with the following repository: https://github.com/alfonso46674/ToneAnalyzer_IBMCloud

## Endpoints



| Method | Endpoint    | Description |
|--------|-------------|-------------|
| GET    | /autor    |   Returns a JSON with the name of the autor         |
