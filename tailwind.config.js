module.exports = {
  content: ["*"],
  theme: {
    colors:{
      'white':'#FFFFFF',
      'primary':'#FFDB0A',
      'blue':'#3D61B0',
      'black':'#141414',
      'grey':'#F6FAFC',
      'light-black':'#333333',
      'red':'#FF6142',
      'navy-blue':'#26458C'
     },
     fontFamily: {
       'pop-bold': ['Poppins-Bold', 'sans-serif'],
       'pop-semi-bold': ['Poppins-SemiBold', 'sans-serif'],
       'pop-regular': ['Poppins-Regular', 'sans-serif'],
       'pop-medium': ['Poppins-Medium', 'sans-serif'],

   
     },
     
     screens: {
       'xs':'400px',
       'ms':'450px',
       'sm': '640px',
       'md': '768px',
       'lg': '1024px',
       'xl': '1280px',
       '2xl': '1536px',
     },
     fontSize: {
      "5xs": [
        "10px",
        {
          lineHeight: "16px",
        },
      ],
      "4xs": [
        "12px",
        {
          lineHeight: "18px",
        },
      ],
      "2xs": [
        "15px",
        {
          lineHeight: "23px",
        },
      ],
      "3xs": [
        "14px",
        {
          lineHeight: "21px",
        },
      ],
      "1xs": [
        "16px",
        {
          lineHeight: "25px",
        },
      ],
      xs: [
        "18px",
        {
          lineHeight: "27px",
        },
      ],
      "1sm": [
        "22px",
        {
          lineHeight: "33px",
        },
      ],
      sm: [
        "24px",
        {
          lineHeight: "35px",
        },
      ],
      md: [
        "34px",
        {
          lineHeight: "62px",
        },
      ],
      "1md": [
        "38px",
        {
          lineHeight: "57px",
        },
      ],
      lg: [
        "44px",
        {
          lineHeight: "62px",
        },
      ],
    },
   
    fontWeight: {
      normal: 400,
      medium: 500,
      "semi-bold": 600,
      bold: 700,
    },
    extend: {
      boderRadius:{
        '3xl':'24px',
        'xl':'12px'

      }
      }, 
  },
  plugins: [],
}
