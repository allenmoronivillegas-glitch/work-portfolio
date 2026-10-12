# work-portfolio

Personal portfolio hosted on GitHub Pages.

## Files
- `index.html` - the website (design, sections, form logic)
- `site-data.js` - **the file you edit** for projects, achievements and EmailJS keys
- `.github/workflows/deploy-pages.yml` - publishes the site when you push to `main`

## Add or edit a project
Open `site-data.js`, find `PROJECTS`, and copy one `{ ... }` block. Fill in the fields (leave `""` for a placeholder), keep the comma between blocks. Delete a block to remove a project. Put screenshots in an `images/` folder and set `image: "images/name.png"`.

## Add or edit an achievement
Same idea with `ACHIEVEMENTS`. `category` must match one of the names in `ACHIEVEMENT_CATEGORIES`. Remove `placeholder: true` once you add real details. Use `link` for a certificate or verification URL and `image` for a certificate picture.

## Set up EmailJS (contact form)
1. Create a free account at https://www.emailjs.com and log in.
2. **Email Services** > Add New Service > pick Gmail (or another) > connect your inbox. Copy the **Service ID**.
3. **Email Templates** > Create New Template. Set **To Email** to your own address. Use these variables in the subject/body:
   - Subject: `{{subject}}`
   - Body: `From: {{from_name}} ({{reply_to}})` and `{{message}}`
   - Set **Reply-To** to `{{reply_to}}`.
   Save, then copy the **Template ID**.
4. **Account** > General: copy your **Public Key**.
5. In `site-data.js`, replace the three `YOUR_EMAILJS_...` values in `EMAILJS_CONFIG`.
6. In EmailJS > Account > Security, you can restrict the key to `allenmoronivillegas-glitch.github.io`.
7. Push to GitHub, open the live site, send yourself a test message, and confirm it arrives.

Until all three values are replaced, the form keeps using the existing Web3Forms setup. Only the public key goes in the website. Never put a private key or SMTP password in these files.

## Publish
Commit and push to `main` (or upload the changed files on github.com > Add file > Upload files). The workflow redeploys automatically; check the Actions tab, then refresh https://allenmoronivillegas-glitch.github.io/work-portfolio/ (use Ctrl+F5).
