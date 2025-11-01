# 🐾 PetCare Services - Pet Services Booking Platform

A modern, full-stack web application for booking pet care services. Built with the MERN stack (MongoDB, Express, React, Node.js).

![PetCare Services](https://img.shields.io/badge/MERN-Stack-orange)
![License](https://img.shields.io/badge/license-ISC-blue)
![Author](https://img.shields.io/badge/author-Emily%20Lu-brightgreen)

## 📸 Screenshots

*Coming soon...*

## ✨ Features

### For Pet Owners 
- 🔐 **User Authentication**: Secure registration and login
- 🔍 **Search Services**: Find pet care services by name
- 📅 **Book Services**: Easy booking with one click
- 👤 **Profile Management**: View your account details and booking history

### For Service Providers
- ➕ **Create Listings**: Post your pet care services
- 📊 **Manage Services**: View all your offerings and bookings
- 🔒 **Protected Routes**: Secure access to provider-only features
- 💰 **Pricing**: Set custom prices for each service

### General Features
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🔐 **JWT Authentication**: Secure token-based authentication
- ⚡ **Real-time Updates**: Instant feedback on actions
- 🌈 **User-Friendly**: Intuitive navigation and design

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router 6.4.2** - Client-side routing
- **Axios 1.1.3** - HTTP client
- **Bootstrap 5** - CSS framework
- **CSS3** - Advanced styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18.2** - Web framework
- **MongoDB 6.6.6** - NoSQL database
- **Mongoose 6.6.6** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Passport.js** - Authentication middleware
- **Bcrypt** - Password hashing
- **Joi 17.6.3** - Data validation

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/petcare-services.git
   cd petcare-services
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server` directory:
   ```env
   PASSPORT_SECRET=your_super_secret_jwt_key_here
   ```
   
   **Note**: Replace `your_super_secret_jwt_key_here` with a strong, random string.

5. **Start MongoDB**
   
   On macOS (using Homebrew):
   ```bash
   brew services start mongodb-community
   ```
   
   On Linux:
   ```bash
   mongod --dbpath ~/data/db
   ```
   
   On Windows:
   ```bash
   mongod.exe --dbpath C:\data\db
   ```

6. **Run the application**

   You need **3 terminal windows**:

   **Terminal 1 - MongoDB** (if not using service):
   ```bash
   mongod --dbpath ~/data/db
   ```

   **Terminal 2 - Backend Server**:
   ```bash
   cd server
   node index.js
   ```
   
   The backend will run on `http://localhost:8080`

   **Terminal 3 - Frontend Client**:
   ```bash
   cd client
   npm start
   ```
   
   The frontend will run on `http://localhost:3000`

7. **Open your browser**

   Navigate to `http://localhost:3000` to see the application.

## 📁 Project Structure

```
petcare-services/
├── client/                 # Frontend React application
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── home-component.js
│   │   │   ├── login-component.js
│   │   │   ├── register-component.js
│   │   │   ├── profile-component.js
│   │   │   ├── course-component.js
│   │   │   ├── postCourse-component.js
│   │   │   ├── enroll-component.js
│   │   │   ├── nav-component.js
│   │   │   └── Layout.js
│   │   ├── services/      # API services
│   │   │   ├── auth.service.js
│   │   │   └── course.service.js
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
│
├── server/                # Backend Node.js application
│   ├── config/
│   │   └── passport.js    # Passport JWT configuration
│   ├── models/            # Mongoose models
│   │   ├── user-model.js
│   │   ├── course-model.js
│   │   └── index.js
│   ├── routes/            # API routes
│   │   ├── auth.js        # Authentication routes
│   │   ├── course-route.js # Service routes
│   │   └── index.js
│   ├── validation.js      # Joi validation schemas
│   ├── index.js           # Server entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔑 Environment Variables

Create a `server/.env` file with:

```env
PASSPORT_SECRET=your_jwt_secret_key_here
```

**Security Note**: Never commit your `.env` file to version control!

## 📝 Usage

### Creating an Account

1. Click **"Register"** in the navigation bar
2. Fill in:
   - Username (at least 3 characters)
   - Email (valid email format)
   - Password (at least 6 characters)
   - Account Type:
     - **Pet Owner**: Book services for your pets
     - **Service Provider**: Offer pet care services
3. Click **"Register"**

### For Pet Owners

1. **Login** to your account
2. Click **"Book Service"** in the navigation
3. Search for a service by name
4. Click **"Book Service"** on any listing
5. View your bookings in **"My Services"**

### For Service Providers

1. **Login** to your account (as instructor)
2. Click **"Post Service"** in the navigation
3. Fill in:
   - Service Title
   - Description
   - Price (in USD)
4. Click **"Post Service"**
5. View your listings in **"My Services"**

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:
- Tokens are stored in localStorage
- Protected routes require valid JWT
- Passwords are hashed using bcrypt
- Token expiration can be configured

## 🗄️ Database Schema

### User Model
```javascript
{
  username: String (3-50 chars, required),
  email: String (6-50 chars, required, unique),
  password: String (hashed, required),
  role: "student" | "instructor" (required),
  date: Date (default: now)
}
```

### Course/Service Model
```javascript
{
  title: String (required),
  description: String (required),
  price: Number (required),
  instructor: ObjectId (ref: User),
  students: [String] (array of user IDs)
}
```

## 🌐 API Endpoints

### Authentication
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - Login user
- `GET /api/user/testAPI` - Test API connection

### Services (Protected Routes - require JWT)
- `GET /api/courses` - Get all services
- `GET /api/courses/instructor/:id` - Get services by provider
- `GET /api/courses/student/:id` - Get bookings by user
- `GET /api/courses/findByName/:name` - Search services by name
- `POST /api/courses` - Create new service (instructor only)
- `POST /api/courses/enroll/:id` - Book a service (student only)
- `PATCH /api/courses/:id` - Update service (instructor only)
- `DELETE /api/courses/:id` - Delete service (instructor only)

## 🧪 Testing

Currently, the project uses the default React testing setup:

```bash
cd client
npm test
```

## 📦 Building for Production

### Frontend
```bash
cd client
npm run build
```

The optimized build will be in `client/build/`

### Backend
The backend can be run in production using process managers like PM2:
```bash
npm install -g pm2
pm2 start server/index.js --name petcare-backend
```

## 🚢 Deployment

### Frontend Deployment (Recommended: Vercel, Netlify)

1. Build the React app: `cd client && npm run build`
2. Deploy the `build` folder to your hosting service

**Note**: Update `API_URL` in `client/src/services/auth.service.js` to your backend URL.

### Backend Deployment (Recommended: Heroku, Railway, Render)

1. Set environment variables in your hosting platform
2. Ensure MongoDB is accessible (use MongoDB Atlas for cloud DB)
3. Deploy the server folder

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Emily Lu**

## 🙏 Acknowledgments

- Bootstrap for the beautiful UI components
- React team for the amazing framework
- MongoDB for the robust database
- All the open-source libraries used in this project

## 📞 Support

If you have any questions or issues:
- Open an issue on GitHub
- Contact: emilylcy1@outlook.com

## 🎯 Future Enhancements

- [ ] Email notifications
- [ ] Real-time chat between owners and providers
- [ ] Payment integration
- [ ] Rating and review system
- [ ] Calendar scheduling
- [ ] Image uploads for services
- [ ] Mobile app version
- [ ] Advanced search filters
- [ ] Admin dashboard
- [ ] Multi-language support

---

⭐ If you find this project helpful, please give it a star!

