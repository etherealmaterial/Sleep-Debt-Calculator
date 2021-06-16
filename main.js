const getSleepHours = day => {
    switch(day) {
      case('monday'):
      return 8;
      break
      case('tuesday'):
      return 6;
      break
      case('wednesday'):
      return 5;
      break
      case('thursday'):
      return 7;
      break
      case('friday'):
      return 9;
      break
      case('saturday'):
      return 9;
      break
      case('sunday'):
      return 8.5;
      break
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  }
  
  console.log(getActualSleepHours())
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours*7;
  }
  
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
      console.log('Congratulations! You got the perfect amount of sleep');
    }
    else if (actualSleepHours > idealSleepHours) {
      console.log('Wow, you slept a bit too much');
    }
    else if (actualSleepHours < idealSleepHours) {
      console.log('Hmmm, you need a bit more sleep');
    }
  }
  
  calculateSleepDebt();