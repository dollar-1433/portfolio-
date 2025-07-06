# Contact Form Setup Instructions

Your contact form is now ready to receive emails! Here's how to set it up:

## Option 1: Formspree (Recommended - Free & Easy)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint URL
5. In `index.html`, replace `YOUR_FORM_ID` in this line:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   with your actual Formspree form ID.

**Example:**
```html
<form id="contact-form" action="https://formspree.io/f/xpzgkqyw" method="POST">
```

## Option 2: Netlify Forms (If hosting on Netlify)

1. Add `netlify` attribute to your form:
   ```html
   <form id="contact-form" netlify name="contact" method="POST">
   ```
2. Deploy to Netlify - forms will work automatically!

## Option 3: EmailJS (Client-side email service)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Set up your email service
3. Replace the form submission logic in `script.js` with EmailJS code

## Current Features

✅ **Form Validation** - All fields are required
✅ **Loading States** - Shows spinner while sending
✅ **Success/Error Messages** - User feedback
✅ **Responsive Design** - Works on all devices
✅ **Proper Social Media Icons** - LinkedIn, GitHub, Instagram with brand colors

## Social Media Links

The social media buttons now have proper platform-specific icons and colors:
- **LinkedIn**: Professional blue gradient
- **GitHub**: Dark gradient 
- **Instagram**: Colorful gradient (pink/orange/yellow)

Update the URLs in the HTML to point to your actual social media profiles.

## Testing

Currently, the form uses a simulation for testing. Once you set up a real email service, replace the `simulateFormSubmission` function in `script.js` with actual form submission code.