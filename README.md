# Welcome to Blip!!!

## Local Development

If you feel adventurous and want to set up the project:

### Setup

To clone this repo to your desktop and run it locally, execute the following:

```
npm install
```

### Development
Create a new branch or develop in `non-prod`
```
git checkout new-branch
```

To compile and hot-reload for development:


```
npm run dev
```
Running the above command will open a new browser tab pointing to `https://localhost:8000`.

### Production Build

To compile and minify for production:
```
npm run build
```
This command ensures all assets and files are bundled and minified correctly.

## Release Process

### 1. Automatic Deployment to `non-prod`

Upon updating the `non-prod` branch, an automatic deployment to the non-production environment is triggered. This usually completes within a few minutes.

### 2. Merging to `master` Branch

If all goes well in the non-production environment, you can merge the changes from `non-prod` into the `master` branch.

> **Note:** Always test in the `non-prod` environment before merging to `master` to ensure stable production releases.

## Troubleshooting Release Issues

For build logs, refer to AWS Amplify in the `us-east2` region.