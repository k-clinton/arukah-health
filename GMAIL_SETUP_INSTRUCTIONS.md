# Gmail Setup Instructions for Contact Form

Follow these steps to enable your contact form to send emails to **arukahealthke@gmail.com**.

## Step 1: Enable 2-Step Verification on Gmail

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Follow the prompts to enable 2-Step Verification (if not already enabled)

## Step 2: Generate an App Password

1. After enabling 2-Step Verification, go back to **Security**
2. Under "How you sign in to Google", click on **App passwords**
   - Direct link: https://myaccount.google.com/apppasswords
3. You may need to sign in again
4. In the "Select app" dropdown, choose **Mail**
5. In the "Select device" dropdown, choose **Other (Custom name)**
6. Enter a name like: `Arukah Health Website`
7. Click **Generate**
8. Google will display a 16-character password (e.g., `abcd efgh ijkl mnop`)
9. **Copy this password** - you'll need it in the next step

## Step 3: Add the App Password to Your Project

1. Open the file `.env.local` in your project root
2. Replace `your-gmail-app-password-here` with the 16-character password you just copied
3. Remove any spaces from the password
4. Your `.env.local` file should look like this:

```env
EMAIL_USER=arukahealthke@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

**Important:** Keep this file secure and never commit it to version control (it's already in .gitignore).

## Step 4: Restart Your Development Server

1. Stop your Next.js development server (Ctrl+C)
2. Start it again:
```bash
npm run dev
```

## Step 5: Test the Contact Form

1. Go to your website's contact page: http://localhost:3000/contact
2. Fill out and submit the form
3. Check the inbox of **arukahealthke@gmail.com** for the message

## Troubleshooting

### "Invalid credentials" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify there are no spaces in the password in `.env.local`
- Ensure 2-Step Verification is enabled

### Emails not arriving
- Check the Gmail spam folder
- Verify the EMAIL_USER in `.env.local` matches your Gmail address exactly
- Try generating a new App Password

### "Less secure app" warning
- You should NOT use "Allow less secure apps" - use App Passwords instead
- App Passwords are the secure, recommended method by Google

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard:
   - `EMAIL_USER=arukahealthke@gmail.com`
   - `EMAIL_PASSWORD=your-16-character-app-password`

2. Never commit `.env.local` to your repository

## Security Notes

- The App Password is specific to this application
- You can revoke it anytime from https://myaccount.google.com/apppasswords
- Each app should have its own unique App Password
- Your main Gmail password remains secure

---

Need help? Contact your development team or refer to Google's official documentation:
https://support.google.com/accounts/answer/185833
