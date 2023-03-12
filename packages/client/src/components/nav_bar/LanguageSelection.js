import React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useTranslation } from 'react-i18next';
import { LanguageStyle } from './indexStyles';

const LanguageSelection = () => {
  const { i18n } = useTranslation();
  const { language, changeLanguage } = i18n;

  const handleChange = (e) => {
    changeLanguage(e.target.value);
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
