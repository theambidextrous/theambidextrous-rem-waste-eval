
export default {
  presets: [
    ['@babel/preset-env', { 
      targets: {
        node: 'current' // For Jest
        // browsers: 'defaults' // For Vite (optional)
      }
    }],
    '@babel/preset-react'
  ],
  plugins: [
    // Add plugins needed for both environments
  ]
};