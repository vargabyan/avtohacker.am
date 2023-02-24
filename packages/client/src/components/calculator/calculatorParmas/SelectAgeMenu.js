import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

const SelectAgeMenu = ({ formik }) => {
  const [selectAge, setSelectAge] = useState('');
  const { selectFuelType } = formik.values;
  // const hasSelectAge1 = selectAge === '-3' || selectAge === '3-5' || selectAge === '5-7' || selectAge === '7+';
  // const hasSelectAge2 = selectAge === '-5' || selectAge === '5-10' || selectAge === '10-15';
  const { t } = useTranslation();

  const handleChange = (e, children) => {
    const { key } = children;
    const { value } = e.target;

    setSelectAge(value);
    formik.setValues((values) => ({ ...values, selectAge: key.slice(2) }));
  };

  let menuItemItems;
  if (selectFuelType === 'full_electric') {
    // if (hasSelectAge1 && selectFuelType === 'full_electric') {
    //   formik.setValues((values) => ({ ...values, selectAge: '' }));
    // }
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
    // if (hasSelectAge2 && selectFuelType !== 'Full_electric') {
    //   formik.setValues((values) => ({ ...values, selectAge: '' }));
    // }
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

  useEffect(() => {
    // if (hasSelectAge1 && selectFuelType === 'full_electric') {
    //   formik.setValues((values) => ({ ...values, selectAge: '' }));
    // }
    // if (hasSelectAge2 && selectFuelType !== 'full_electric') {
    // formik.setValues((values) => ({ ...values, selectAge: '' }));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik]);

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
