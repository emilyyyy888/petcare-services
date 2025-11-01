# 🚀 Quick Setup Guide

This guide will help you get PetCare Services up and running quickly.

## Step 1: Install Dependencies

### Install Node.js

Download and install Node.js from [nodejs.org](https://nodejs.org/)

**Verify installation:**

```bash
node --version
npm --version
```

### Install MongoDB

- **macOS**: `brew tap mongodb/brew && brew install mongodb-community`
- **Linux**: Follow instructions at [mongodb.com/docs](https://www.mongodb.com/docs/manual/administration/install-on-linux/)
- **Windows**: Download installer from [mongodb.com](https://www.mongodb.com/try/download/community)

**Verify installation:**

```bash
mongod --version
```

## Step 2: Clone the Repository

```bash
git clone https://github.com/yourusername/petcare-services.git
cd petcare-services
```

## Step 3: Install Project Dependencies

### Backend

```bash
cd server
npm install
```

### Frontend

```bash
cd ../client
npm install
```

## Step 4: Configure Environment

Create `server/.env` file:

```bash
cd ../server
touch .env
```

Add this content to `.env`:

```env
PASSPORT_SECRET=your_super_secret_key_change_this_in_production
```

**Generate a secure key:**

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## Step 5: Start MongoDB

### macOS (Homebrew)

```bash
brew services start mongodb-community
```

### macOS/Linux (Manual)

```bash
mkdir -p ~/data/db
mongod --dbpath ~/data/db
```

### Windows

```bash
md C:\data\db
mongod --dbpath C:\data\db
```

**Keep MongoDB running in a terminal!**

## Step 6: Start the Application

### Open 3 Terminal Windows

**Terminal 1: MongoDB** (if not running as service)

```bash
mongod --dbpath ~/data/db
```

**Terminal 2: Backend Server**

```bash
cd path/to/petcare-services/server
node index.js
```

You should see:

```
Connected to MongoDB...
Backend server listening on port 8080...
```

**Terminal 3: Frontend Client**

```bash
cd path/to/petcare-services/client
npm start
```

You should see:

```
Compiled successfully!
```

The browser will automatically open to `http://localhost:3000`

## Step 7: Verify Installation

1. Navigate to `http://localhost:3000`
2. You should see the PetCare Services homepage
3. Click "Register" to create an account
4. Select account type:
   - Pet Owner (student)
   - Service Provider (instructor)
5. Complete registration
6. Login with your credentials

## Common Issues

### MongoDB Connection Error

**Error:** `Operation users.findOne() buffering timed out`

**Solution:**

- Make sure MongoDB is running
- Check if the correct database path is set
- Verify no firewall blocking port 27017

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::8080`

**Solution:**

```bash
# Find the process using the port
lsof -i :8080  # macOS/Linux
netstat -ano | findstr :8080  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Module Not Found

**Error:** `Cannot find module 'xxx'`

**Solution:**

```bash
# In both client and server directories
rm -rf node_modules package-lock.json
npm install
```

### Environment Variable Issues

**Error:** `PASSPORT_SECRET is not defined`

**Solution:**

- Make sure `server/.env` file exists
- Verify `.env` is in the `server` directory
- Check file has no extra spaces

## Development Tips

### Hot Reload

- Frontend: Changes automatically reload browser
- Backend: Restart server manually or use `nodemon`:
  ```bash
  npm install -g nodemon
  nodemon index.js
  ```

### Database Reset

To clear all data:

```bash
# Connect to MongoDB shell
mongo

# Switch to database
use petServicesDB

# Drop collections
db.users.drop()
db.courses.drop()
```

### Useful Commands

**View running MongoDB processes:**

```bash
pgrep mongod
```

**View logs:**

```bash
# Backend console logs appear in Terminal 2
# Frontend errors show in browser console
```

## Next Steps

- Read the [README.md](README.md) for detailed documentation
- Check [API endpoints](README.md#api-endpoints) for backend routes
- Review [project structure](README.md#project-structure) to understand codebase
- Explore features in the application

## Need Help?

- Check the [README.md](README.md) for documentation
- Open an issue on GitHub
- Review the code comments in source files

---

**Happy Coding! 🎉**
