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
  diesel: yup.object({
    motorcycle: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),

    sedan: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    pickup: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    suv: yup.object({
      highPermeability: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
  }),

  gasoline: yup.object({
    motorcycle: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    sedan: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    pickup: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    suv: yup.object({
      highPermeability: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
  }),

  hybrid: yup.object({
    motorcycle: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    sedan: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    pickup: yup.object({
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
    suv: yup.object({
      highPermeability: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      ageFrom_3: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_3_5: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_5_7: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
      age_7_to: yup[{ price: yup.string().min(1).required(), percent: yup.string().min(1).required() }],
    }),
  }),
});

const age = { highPermeability: [], ageFrom_3: [], age_3_5: [], age_5_7: [], age_7_to: [] };
const initialValues = {
  diesel: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
  gasoline: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
  hybrid: {
    motorcycle: age,
    sedan: age,
    pickup: age,
    suv: age,
  },
};

const OtherCars = ({ selectFuelTypeState, setSAnimation }) => {
  const { responsetData, httpRequest } = useHttpRequest();
  const { t } = useTranslation();
  const [selectCar, setSelectCar] = useState('motorcycle');
  const [selectAge, setSelectAge] = useState('ageFrom_3');
  const [open, setOpen] = useState({ selectCarType: false, selectAge: false });
  const [rows, setRows] = useState([
    {
      id: 'add',
      price: '',
      percent: '',
    },
  ]);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/calculator-other-cars-settings', values);
    },
  });

  const handleSelectChange = (e) => {
    const { value } = e.target;

    if (selectAge === 'highPermeability') {
      setSelectAge('ageFrom_3');
    }
    setSelectCar(value);
  };

  const handleRowEdit = (value) => {
    if (value && Object.keys(value).length) {
      const FirstIndex = Object.keys(value)[0];
      const secondIndex = Object.keys(value[FirstIndex])[0];
      const resultValue = value[FirstIndex][secondIndex].value;

      if (!Object.hasOwn(value, 'add')) {
        formik.setValues(() => {
          const newValues = formik.values;
          newValues[selectFuelTypeState][selectCar][selectAge][FirstIndex][secondIndex] = resultValue;

          return { ...newValues };
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

  const handleOpenClose = (name) => {
    setOpen((values) => ({ ...values, [name]: !values[name] }));
  };

  const handleSelectAge = (e) => {
    const { value } = e.target;
    setSelectAge(value);
  };

  const handelActions = (key, props) => {
    const { id, row } = props;
    const hasMatches = rows.filter((value) => value.price === row.price && value.id !== 'add')[0];

    if (key === 'Create') {
      if (row.percent && row.price && !hasMatches) {
        formik.setValues((values) => {
          const newValues = values;
          newValues[selectFuelTypeState][selectCar][selectAge].push({
            percent: row.percent,
            price: row.price,
          });

          return { ...newValues };
        });
        setRows((values) => [...values, { percent: row.percent, price: row.price, id: rows.length + 1 }]);
      }
    }
    if (key === 'Delete') {
      const selectRow = rows.filter((value) => value.id === id);

      formik.setValues((values) => {
        const newValues = values;
        newValues[selectFuelTypeState][selectCar][selectAge] = newValues[selectFuelTypeState][selectCar][
          selectAge
        ].filter((value) => value.percent !== selectRow[0].percent && value.price !== selectRow[0].price);

        return { ...newValues };
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
      field: 'actions',
      headerName: t('calculateAdminSettings.calculatorParams.selectAge.part3.action'),
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

  const highPermeabilityMenuItem =
    selectCar === 'suv' ? (
      <MenuItem value='highPermeability'>
        {t('calculateAdminSettings.calculatorParams.selectAge.part1.highPermeability')}
      </MenuItem>
    ) : null;

  useEffect(() => {
    httpRequest('get', '/admin/calculator-other-cars-settings');
    if (responsetData.data) {
      setSAnimation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data) {
      const hasData = responsetData.data[selectFuelTypeState][selectCar][selectAge].map((value, index) => ({
        ...value,
        id: index,
      }));
      formik.setValues(responsetData.data);
      setSAnimation(true);
      setRows((values) => [...values, ...hasData]);
    }
    return () => {
      setRows((values) => [values[0]]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data, selectFuelTypeState, selectCar, selectAge]);

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
              onChange={handleSelectChange}
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
              {highPermeabilityMenuItem}
              <MenuItem value='ageFrom_3'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part1.ageFrom_3')}
              </MenuItem>
              <MenuItem value='age_3_5'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part1.age_3_5')}
              </MenuItem>
              <MenuItem value='age_5_7'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part1.age_5_7')}
              </MenuItem>
              <MenuItem value='age_7_to'>
                {t('calculateAdminSettings.calculatorParams.selectAge.part1.age_7_to')}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box height='205px' width='100%'>
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

export default OtherCars;
