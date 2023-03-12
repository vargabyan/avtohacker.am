import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const SelectAgeMenu = ({ formik, selectAfeClear }) => {
  const [selectAge, setSelectAge] = useState('');
  const { selectFuelType } = formik.values;

  const { t } = useTranslation();

  const handleChange = (e, children) => {
    const { key } = children;
    const { value } = e.target;

    setSelectAge(value);
    formik.setValues((values) => ({ ...values, selectAge: key.slice(2) }));
  };

  useEffect(() => {
    if (selectAfeClear) {
      setSelectAge('');
    }
  }, [selectAfeClear]);

  let menuItemItems;
  if (selectFuelType === 'full_electric') {
    menuItemItems = [
      <MenuItem key='ageFrom_5' value='-5'>
        {t('calculate.calculator.selectAge.part2.0')}
      </MenuItem>,
      <MenuItem key='age_5_10' value='5-10'>
        {t('calculate.calculator.selectAge.part2.1')}
      </MenuItem>,
      <MenuItem key='age_10_15' value='10-15'>
        {t('calculate.calculator.selectAge.part2.2')}
      </MenuItem>,
    ];
  } else {
    menuItemItems = [
      <MenuItem key='ageFrom_3' value='-3'>
        {t('calculate.calculator.selectAge.part1.0')}
      </MenuItem>,
      <MenuItem key='age_3_5' value='3-5'>
        {t('calculate.calculator.selectAge.part1.1')}
      </MenuItem>,
      <MenuItem key='age_5_7' value='5-7'>
        {t('calculate.calculator.selectAge.part1.2')}
      </MenuItem>,
      <MenuItem key='age_7_to' value='7+'>
        {t('calculate.calculator.selectAge.part1.3')}
      </MenuItem>,
    ];
  }

  return (
    <FormControl fullWidth>
      <InputLabel size='small'>{t('calculate.calculator.age')}</InputLabel>
      <Select
        size='small'
        value={selectAge}
        label={t('calculate.calculator.age')}
        name='selectAge'
        onChange={handleChange}
      >
        {menuItemItems}
      </Select>
    </FormControl>
  );
};

export default SelectAgeMenu;
