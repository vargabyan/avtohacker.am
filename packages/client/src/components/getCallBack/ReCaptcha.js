import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = () => {
  const onChange = (value) => {
    console.log('Captcha value:', value);
  }

  return <ReCAPTCHA sitekey='Your client site key' onChange={onChange} />;
};

export default ReCaptcha;
