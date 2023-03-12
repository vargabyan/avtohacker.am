import React, { useEffect, useState } from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import useHttpRequest from '../../../../hook/useHttpRequest/useHttpRequest';

const validationSchema = yup.object({
  full_electric: yup.object({
    motorcycle: yup.object({
      ageFrom_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_10: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_10_15: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),

    sedan: yup.object({
      ageFrom_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_10: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_10_15: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    pickup: yup.object({
      ageFrom_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_10: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_10_15: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    suv: yup.object({
      ageFrom_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_10: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_10_15: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
  }),
});

const age = { ageFrom_5: [], age_5_10: [], age_10_15: [] };
const initialValues = {
  full_electric: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
};

const FullElectricCars = ({ setSAnimation }) => {
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();
  const [rows, setRows] = useState([
    {
      id: 'add',
      price: '',
      percent: '',
    },
  ]);
  const [selectCar, setSelectCar] = useState('motorcycle');
  const [selectAge, setSelectAge] = useState('ageFrom_5');
  const [open, setOpen] = useState({ selectCarType: false, selectAge: false });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-full-electric-cars-settings', values);
    },
  });

  const handleSelectCarType = (e) => {
    const { value } = e.target;
    setSelectCar(value);
  };

  const handleSelectAge = (e) => {
    const { value } = e.target;
    setSelectAge(value);
  };

  const handleOpenClose = (name) => {
    setOpen((values) => ({ ...values, [name]: !values[name] }));
  };

  const handleRowEdit = (value) => {
    if (value && Object.keys(value).length) {
      const FirstIndex = Object.keys(value)[0];
      const secondIndex = Object.keys(value[FirstIndex])[0];
      const resultValue = value[FirstIndex][secondIndex].value;

      if (!Object.hasOwn(value, 'add')) {
        formik.setValues(() => {
          const { full_electric } = formik.values;
          full_electric[selectCar][selectAge][FirstIndex][secondIndex] = resultValue;

          return { full_electric };
        });
      }
      if (Object.hasOwn(value, 'add')) {
        setRows(() => {
          const newValu = rows;
          newValu[0][secondIndex] = resultValue;

          return newValu;
        });
      }
    }
  };

  const handelActions = (key, props) => {
    const { id, row } = props;
    const hasMatches = rows.filter((value) => value.price === row.price && value.id !== 'add')[0];

    if (key === 'Create') {
      if (row.percent && row.price && !hasMatches) {
        formik.setValues((values) => {
          const { full_electric } = values;
          full_electric[selectCar][selectAge].push({
            percent: row.percent,
            price: row.price,
          });

          return { full_electric };
        });
        setRows((values) => [...values, { percent: row.percent, price: row.price, id: rows.length + 1 }]);
      }
    }
    if (key === 'Delete') {
      const selectRow = rows.filter((value) => value.id === id);

      formik.setValues((values) => {
        const { full_electric } = values;
        full_electric[selectCar][selectAge] = full_electric[selectCar][selectAge].filter(
          (value) => value.percent !== selectRow[0].percent && value.price !== selectRow[0].price
        );

        return { full_electric };
      });
      setRows((values) => values.filter((value) => value.id !== id));
    }
  };

  const columns = [
    { field: 'id', headerName: 'id', width: 70, sortable: false },
    {
      field: 'price',
      headerName: t('calculateAdminSettings.calculatorParams.selectAge.part3.price'),
      minWidth: 70,
      editable: true,
      sortable: false,
    },
    {
      field: 'percent',
      headerName: t('calculateAdminSettings.calculatorParams.selectAge.part3.percent'),
      minWidth: 70,
      editable: true,
      sortable: false,
    },
    {
      headerName: 'actions',
      field: 'actions',
      type: 'actions',
      minWidth: 70,
      getActions: (props) => [
        props.id === 'add' ? (
          <GridActionsCellItem onClick={() => handelActions('Create', props)} icon={<AddIcon />} label='Create' />
        ) : (
          <GridActionsCellItem onClick={() => handelActions('Delete', props)} icon={<DeleteIcon />} label='Delete' />
        ),
      ],
    },
  ];

  useEffect(() => {
    httpRequest('get', '/admin/calculator-full-electric-cars-settings');
    if (responsetData.data) {
      setSAnimation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data) {
      const hasData = responsetData.data.full_electric[selectCar][selectAge].map((value, index) => ({
        ...value,
        id: index,
      }));
      formik.setValues({ full_electric: responsetData.data.full_electric });
      setSAnimation(true);
      setRows((values) => [...values, ...hasData]);
    }
    return () => {
      setRows((values) => [values[0]]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data, selectCar, selectAge]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel size='small'>{t('calculateAdminSettings.calculatorParams.carType')}</InputLabel>
            <Select
              name='selectCarType'
              size='small'
              open={open.selectCarType}
              onClose={() => handleOpenClose('selectCarType')}
              onOpen={() => handleOpenClose('selectCarType')}
              value={selectCar}
              label={t('calculateAdminSettings.calculatorParams.carType')}
              onChange={handleSelectCarType}
            >
              <MenuItem value='motorcycle'>{t('calculateAdminSettings.calculatorParams.selectCarType.0')}</MenuItem>
              <MenuItem value='sedan'>{t('calculateAdminSettings.calculatorParams.selectCarType.1')}</MenuItem>
              <MenuItem value='pickup'>{t('calculateAdminSettings.calculatorParams.selectCarType.2')}</MenuItem>
              <MenuItem value='suv'>{t('calculateAdminSettings.calculatorParams.selectCarType.3')}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel size='small'>{t('calculateAdminSettings.calculatorParams.age')}</InputLabel>
            <Select
              name='selectAge'
              size='small'
              open={open.selectAge}
              onClose={() => handleOpenClose('selectAge')}
              onOpen={() => handleOpenClose('selectAge')}
              value={selectAge}
              label={t('calculateAdminSettings.calculatorParams.age')}
              onChange={handleSelectAge}
            >
              <MenuItem value='ageFrom_5'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part2.ageFrom_5')}
              </MenuItem>
              <MenuItem value='age_5_10'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part2.age_5_10')}
              </MenuItem>
              <MenuItem value='age_10_15'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part2.age_10_15')}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box height={205} width='100%'>
            <DataGrid
              disableColumnMenu
              density='compact'
              rows={rows}
              columns={columns}
              hideFooter
              onEditRowsModelChange={handleRowEdit}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button type='submit' className='buttonSend' variant='outlined' fullWidth>
            {t('calculateAdminSettings.calculatorParams.button.save')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FullElectricCars;
