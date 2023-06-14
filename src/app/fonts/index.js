import localFont from 'next/font/local';
 
// Font files can be colocated inside of `pages`
const poppinsBlack = localFont({ src: 'Poppins-Black.ttf' });
const poppinsBold = localFont({src: 'Poppins-Bold.ttf'});
const poppinsRegular = localFont({src: 'Poppins-Regular.ttf'});

export {poppinsBlack, poppinsBold, poppinsRegular}