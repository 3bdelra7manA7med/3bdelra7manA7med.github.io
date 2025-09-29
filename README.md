# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring multiple pages, an AI chat component, and easy content management.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Multiple Pages**: Home, About, Projects, and Contact pages
- **AI Chat Widget**: Interactive chat assistant for visitor engagement
- **Easy Content Management**: Centralized configuration files for easy updates
- **Responsive**: Works seamlessly on desktop and mobile devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **CSS Modules**: Scoped styling for maintainable code

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── about.module.css
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── contact.module.css
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── projects.module.css
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── page.module.css
│   ├── components/
│   │   ├── ChatWidget/
│   │   │   ├── ChatWidget.tsx
│   │   │   └── ChatWidget.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   └── Header/
│   │       ├── Header.tsx
│   │       └── Header.module.css
│   └── data/
│       └── config.ts
├── public/
│   └── images/
└── package.json
```

## 🛠️ Installation & Setup

1. **Clone or download** the project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## ✏️ Customization

### Personal Information

Edit `src/data/config.ts` to update:

- Personal details (name, title, bio, contact info)
- Skills and experience
- Project information
- Social media links

### Adding Projects

Add new projects to the `projects` array in `src/data/config.ts`:

```typescript
{
  id: 5,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/username/project",
  image: "/images/project5.jpg"
}
```

### Styling

- Global styles: `src/app/globals.css`
- Component styles: Individual `.module.css` files
- Colors and themes can be customized in CSS files

### AI Chat Responses

Customize chat responses in `src/components/ChatWidget/ChatWidget.tsx` in the `generateAIResponse` function.

## 📱 Pages Overview

### Home Page (`/`)

- Hero section with introduction
- Skills preview
- Featured projects
- Call-to-action buttons

### About Page (`/about`)

- Detailed biography
- Technical skills grid
- Work experience timeline
- Interests and hobbies

### Projects Page (`/projects`)

- Complete project showcase
- Live demo and GitHub links
- Technology tags
- Responsive grid layout

### Contact Page (`/contact`)

- Contact information
- Social media links
- Functional contact form
- Interactive contact methods

## 🤖 AI Chat Widget

The AI chat widget provides:

- Contextual responses about your background
- Project information
- Contact guidance
- Interactive conversation

To customize responses, edit the `generateAIResponse` function in `ChatWidget.tsx`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

The `out` folder contains the static files ready for deployment.

## 🎨 Key Features Explained

### Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

### Performance

- Next.js optimization
- Component-based architecture
- Efficient CSS modules
- Lazy loading where applicable

### Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🔧 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📦 Dependencies

### Core

- Next.js 15.x
- React 18.x
- TypeScript

### Styling

- Tailwind CSS (for utilities)
- CSS Modules (for component styling)

## 🚀 Future Enhancements

Consider adding:

- Blog section
- Dark mode toggle
- Animation libraries (Framer Motion)
- CMS integration
- Email functionality for contact form
- Google Analytics
- SEO optimization

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions for improvements, please create an issue or submit a pull request.

---

Built with ❤️ using Next.js and modern web technologies.
