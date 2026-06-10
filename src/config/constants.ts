/**
 * Contact configuration constants for Eazmate
 */

export const OFFICE_ADDRESS = {
  line1: '4007, Galleria Market Road',
  line2: 'DLF Phase IV, Sector 28',
  line3: 'Golf Course Road',
  city: 'Gurugram',
  state: 'Haryana',
  pincode: '122007',
  country: 'India',
  landmark: 'DLF Phase IV, Gurugram',
  full: '4007, Galleria Market Road, DLF Phase IV, Sector 28, Golf Course Road, Gurugram, Haryana 122007, India',
  mapsLink: 'https://maps.google.com/?q=4007+Galleria+Market+Road+DLF+Phase+IV+Sector+28+Gurugram+Haryana+122007',
  visitorHours: 'Mon-Fri 10:00 AM – 5:00 PM',
};

export const CONTACT_INFO = {
  whatsapp: {
    number: '+91 87894 76639',
    rawValue: '918789476639',
    getLink: (text: string) => `https://wa.me/918789476639?text=${encodeURIComponent(text)}`
  },
  phones: [
    {
      display: '+91 99973 27122',
      value: '+919997327122',
      telLink: 'tel:+919997327122'
    },
    {
      display: '+91 87964 41938',
      value: '+918796441938',
      telLink: 'tel:+918796441938'
    }
  ],
  emails: [
    {
      display: 'aniket@eazmate.com',
      mailtoLink: 'mailto:aniket@eazmate.com'
    },
    {
      display: 'prakhar@eazmate.com',
      mailtoLink: 'mailto:prakhar@eazmate.com'
    }
  ]
};
