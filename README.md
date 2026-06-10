# RideStory mini site

Static promotional, support and privacy website prepared for App Store review.

The repository includes an official GitHub Pages deployment workflow. Every push to `main` publishes the site.

## URLs

- Promotional website: `https://pakyapps.github.io/ridestory/`
- Support URL: `https://pakyapps.github.io/ridestory/contacts/`
- Privacy policy: `https://pakyapps.github.io/ridestory/privacy/`

## Local preview

```sh
npm run dev
```

Open `http://localhost:4173`.

## Validation

```sh
npm run check
```

## Before publishing

1. Replace `77pask@gmail.com` with dedicated support and privacy mailboxes when available.
2. Replace “RideStory” in the privacy controller paragraph with the legal company name and add its registered postal address. This is important for GDPR and UK GDPR transparency.
3. Compare the policy’s data categories with the final app and App Store privacy questionnaire. Remove categories the app does not collect and add any missing SDKs or processing.
4. Confirm the app’s actual minimum age and account deletion flow.
5. Point the `ridestory.com` domain to the chosen static host. Netlify and Vercel configuration files are included.
