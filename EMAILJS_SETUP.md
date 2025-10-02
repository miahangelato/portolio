# EmailJS Setup Guide

## 📧 How to Setup Email Functionality for Your Portfolio

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: Create a custom ID (e.g., `gmail_service`)
   - Connect your Gmail account (`to.miahangela@gmail.com`)
5. Save the service

### Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Template ID: Create a custom ID (e.g., `portfolio_contact`)
4. Use this template content:

```html
Subject: New Portfolio Contact - {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply-To: {{from_email}}
```

5. **Important**: In the template settings:
   - Set **To Email**: `to.miahangela@gmail.com,mmto@student.hau.edu.ph`
   - Set **Reply-To**: `{{reply_to}}`

### Step 4: Get Your Credentials
1. Go to **Account** → **General**
2. Copy your **Public Key**
3. Go back to **Email Services** and copy your **Service ID**
4. Go to **Email Templates** and copy your **Template ID**

### Step 5: Update Environment Variables
1. Open `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test Your Form
1. Run your development server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Check both email addresses for the message
4. Verify the reply-to functionality works

## 🔒 Security Notes
- Your EmailJS public key is safe to expose in frontend code
- The .env file should be added to .gitignore (already done)
- Free EmailJS account allows 200 emails/month
- Consider upgrading for higher limits if needed

## 🚀 Features Implemented
- ✅ Sends emails to both your addresses
- ✅ Proper reply-to functionality
- ✅ Loading states and error handling
- ✅ Form validation
- ✅ Success/error notifications
- ✅ Form reset after successful submission

## 📧 Email Addresses Configured
- Primary: `to.miahangela@gmail.com`
- Secondary: `mmto@student.hau.edu.ph`

## 🛠 Troubleshooting
1. **"EmailJS configuration is missing"**: Check your .env variables
2. **Emails not sending**: Verify service and template IDs
3. **Only receiving on one email**: Check template To Email field
4. **Emails going to spam**: Add your domain to EmailJS allowlist

Need help? Contact EmailJS support or check their documentation.