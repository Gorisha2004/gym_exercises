import React from 'react'
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
      </Stack>

    </Box>
  )
}

export default SimilarExercises