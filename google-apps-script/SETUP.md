# Google Sheets + Apps Script Setup Guide

## Step 1: Create the Google Sheet

1. Go to [sheets.new](https://sheets.new) (creates a new Google Sheet)
2. Rename the sheet to **SprintX Form Submissions**
3. Rename the default tab to **Startups** and create two more tabs: **Mentors**, **Investors**

### Column Headers for each tab:

**Startups tab:**
| Timestamp | Full Name | Email | Startup Name | Stage | Sector | Other Sector | City | Description |

**Mentors tab:**
| Timestamp | Full Name | Email | Role/Org | Expertise | Other Expertise | LinkedIn | Contribution |

**Investors tab:**
| Timestamp | Full Name | Email | Org Name | Investor Type | Other Investor Type | Sectors of Interest | Anything Else |

## Step 2: Add the Apps Script

1. In the sheet, go to **Extensions → Apps Script**
2. Delete any default code
3. Paste the contents of `Code.gs` into the editor
4. Click **Save** (💾 icon) and name the project **SprintX Form Handler**

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Choose type: **Web app**
3. Set:
   - **Description**: `SprintX Form Handler`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**
5. **Copy the Web App URL** (looks like `https://script.google.com/macros/s/.../exec`)
6. Close the dialog

> ⚠️ If you update the script later, click **Deploy → Manage deployments** → Edit ✏️ → **New version** → Deploy

## Step 4: Update the Frontend

1. Open `src/config.js`
2. Replace the placeholder URL with your actual Web App URL:
   ```js
   export const GOOGLE_SHEETS_WEB_APP_URL = 'YOUR_WEB_APP_URL_HERE'
   ```
3. Save the file and rebuild/deploy the frontend

## How it works

- Each form submission sends a POST request to the Apps Script web app
- The script reads `formType` to determine which sheet tab to write to
- All form fields (including conditional "other" fields) are saved
- A timestamp is added automatically
