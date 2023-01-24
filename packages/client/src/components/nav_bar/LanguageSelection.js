import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageStyle } from './indexStyles';

const LanguageSelection = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('am');
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
    navigate(`/${e.target.value}`);
  };

  return (
    <LanguageStyle>
      <FormControl fullWidth>
        <NativeSelect defaultValue={language} onChange={handleChange}>
          <option value='am'>ՀԱ</option>
          <option value='en'>EN</option>
          <option value='ru'>РУ</option>
        </NativeSelect>
      </FormControl>
    </LanguageStyle>
  );
};

export default LanguageSelection;
