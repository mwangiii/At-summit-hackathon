import './App.css';

function getFullYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
function getFooterCopy(isIndex){
  if (isIndex){
    return 'Brave Girl Tales'
  }
  else{
    return 'Brave Girl Heroines'
  }
}

export {getFooterCopy, getFullYear};
