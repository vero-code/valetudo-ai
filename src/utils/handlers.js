export const handleClear = (setCategory, setInputs, setErrors, setResult, setFollowup, setFollowupResult) => (newCategory) => {
  if (newCategory) setCategory(newCategory);
  setInputs({});
  setErrors({});
  setResult('');
  setFollowup('');
  setFollowupResult('');
};

export const handleGoToBack = (navigate) => () => {
  navigate('/');
};