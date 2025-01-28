/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        hind: ['Hind Madurai'], 
      },

      colors: {
        orange: '#FF876C',
        blue: '#0E1B56',
        blueMain: '#01062B',
        btnText: '#4B6BFB',
        textBg: 'rgba(75, 107, 251, 0.05)',
        btnBg: '#F6F6F6',
        catBg: '#DBCDF0',
        arrowBg: '#919EAB',
        tipBg: '#F2EAE5',
        infoBg: '#F1F4E0',
        fHead: '#C4C4C4',
        contents: '#777777',
        content: '#191919',
        border: '#3D5A80',
        drwarBg: '#BDB4B47D',
        loginBg: '#F1F4F5',
      }
    },
  },
  plugins: [],
}