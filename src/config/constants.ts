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
    number: '+91 87961 11255',
    rawValue: '918796111255',
    getLink: (text: string) => `https://wa.me/918796111255?text=${encodeURIComponent(text)}`
  },
  phones: [
    {
      display: '+91 87961 11255',
      value: '+918796111255',
      telLink: 'tel:+918796111255'
    }
  ],
  emails: [
    {
      display: 'dev@eazmate.com',
      mailtoLink: 'mailto:dev@eazmate.com'
    }
  ]
};
