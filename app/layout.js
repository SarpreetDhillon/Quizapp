import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Quiz Game</title>
      </head>
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
