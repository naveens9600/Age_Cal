document.getElementById('calculateButton').addEventListener('click', () => {
    const birthDate = document.getElementById('birthDate').value;
    const resultDiv = document.getElementById('result');
  
    if (!birthDate) {
      resultDiv.textContent = 'Please select your birthdate!';
      return;
    }
  
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    const dayDiff = today.getDate() - birthDateObj.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    resultDiv.textContent = `You are ${age} years old.`;
  });
  