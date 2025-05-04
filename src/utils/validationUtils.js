export function validateInputs(category, inputs) {
  const errors = {};

  switch (category) {
    case 'symptom': {
      const allowedGenders = ['male', 'female'];
      if (!allowedGenders.includes(inputs.gender?.toLowerCase())) {
        errors.gender = 'Gender must be "male" or "female"';
      }

      const ageNum = Number(inputs.age);
      if (!inputs.age || isNaN(ageNum) || ageNum <= 0 || ageNum > 100) {
        errors.age = 'Enter a valid age (1–100)';
      }

      if (!inputs.symptom || /^\d+$/.test(inputs.symptom.trim())) {
        errors.symptom = 'Please enter a valid symptom';
      }
      break;
    }

    case 'drugs':
    case 'timing':
    case 'compare': {
      if (!inputs.drug1 || /^\d+$/.test(inputs.drug1.trim())) {
        errors.drug1 = 'Enter a valid drug name';
      }
      if (!inputs.drug2 || /^\d+$/.test(inputs.drug2.trim())) {
        errors.drug2 = 'Enter a valid drug name';
      }
      if (
        category === 'compare' &&
        (!inputs.condition || /^\d+$/.test(inputs.condition.trim()))
      ) {
        errors.condition = 'Please enter a valid condition (not just numbers)';
      }
      break;
    }

    case 'alternatives':
    case 'exercises':
    case 'research': {
      if (
        (category === 'alternatives' && (!inputs.drug1 || /^\d+$/.test(inputs.drug1.trim()))) ||
        ((category === 'exercises' || category === 'research') &&
          (!inputs.condition || /^\d+$/.test(inputs.condition.trim())))
      ) {
        if (category === 'alternatives') {
          errors.drug1 = 'Enter a valid drug name';
        } else {
          errors.condition = 'Enter a valid condition';
        }
      }
      break;
    }
  }

  return errors;
}