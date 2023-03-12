import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HighPermeabilityItem = ({ selectCarType, formik }) => {
  const { selectAge, selectFuelType, highPermeability } = formik.values;
  const hasSelectCarTypeStateSelectAgeSelectFuelType =
    selectCarType === 'suv' && selectAge === 'ageFrom_3' && selectFuelType !== 'full_electric';
  const { t } = useTranslation();

  useEffect(() => {
    if (!hasSelectCarTypeStateSelectAgeSelectFuelType) {
      formik.setValues((values) => ({ ...values, highPermeability: false }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasSelectCarTypeStateSelectAgeSelectFuelType]);

  if (hasSelectCarTypeStateSelectAgeSelectFuelType) {
    return (
      <Grid item xs={12}>
        <FormControlLabel
          value={highPermeability}
          onChange={formik.handleChange}
          name='highPermeability'
          control={<Checkbox size='small' />}
          label={t('calculate.calculator.highPermeability')}
          className='highPermeability'
        />
      </Grid>
    );
  }
  return null;
};

export default HighPermeabilityItem;
