import React, { useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FullElectricCars from './FullElectricCars';
import OtherCars from './OtherCars';

const CostAccordingToCharacteristics = () => {
  const { t } = useTranslation();
  const [selectFuelTypeState, setSelectFuelTypeState] = useState('diesel');
  const [animation, setSAnimation] = useState(false);
  const [openState, setOpenState] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectFuelTypeState(value);
  };

  const handleOpenClose = (key) => {
    if (key) {
      setOpenState(() => !openState);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display={animation ? 'block' : 'none'}>
        <FormControl fullWidth>
          <InputLabel size='small'>{t('calculateAdminSettings.calculatorParams.fuelType')}</InputLabel>
          <Select
            name='selectFuelType'
            size='small'
            open={openState}
            onClose={handleOpenClose}
            onOpen={handleOpenClose}
            value={selectFuelTypeState}
            label={t('calculateAdminSettings.calculatorParams.fuelType')}
            onChange={handleChange}
          >
            <MenuItem value='diesel'>{t('calculateAdminSettings.calculatorParams.selectFuelType.0')}</MenuItem>
            <MenuItem value='gasoline'>{t('calculateAdminSettings.calculatorParams.selectFuelType.1')}</MenuItem>
            <MenuItem value='full_electric'>{t('calculateAdminSettings.calculatorParams.selectFuelType.2')}</MenuItem>
            <MenuItem value='hybrid'>{t('calculateAdminSettings.calculatorParams.selectFuelType.3')}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} display={animation ? 'block' : 'none'}>
        {selectFuelTypeState === 'full_electric' ? (
          <FullElectricCars selectFuelTypeState={selectFuelTypeState} setSAnimation={setSAnimation} />
        ) : (
          <OtherCars selectFuelTypeState={selectFuelTypeState} setSAnimation={setSAnimation} />
        )}
      </Grid>
      <Grid item xs={12} display={!animation ? 'block' : 'none'}>
        <Skeleton variant='rectangular' animation='pulse' height={375} />
      </Grid>
    </Grid>
  );
};

export default CostAccordingToCharacteristics;
