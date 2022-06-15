"use strict";

// ##############################################
// FUNCTIONS
// ##############################################
function cleanContainer ( container ) {
  while( container.firstElementChild ) {
    container.removeChild( container.firstElementChild );
  }
}

function alerts ( message, type ) {

  const alertsOnScreen = document.querySelector('.alert');

  if ( !alertsOnScreen ) {
    const alert = document.createElement('p');
    alert.classList.add('alert');
    alert.textContent = message;
  
    if ( type === 'danger' ) {
      alert.classList.add('alert--danger')
    } else {
      alert.classList.add('alert--success');
    }
  
    document.body.appendChild( alert );
    
    setTimeout( () => {
  
      alert.classList.add('show-alert');
  
      setTimeout( () => {
  
        alert.classList.remove('show-alert');
  
        setTimeout( () => {
          alert.remove();
        }, 500 );
  
      }, 3000 );
  
  
    }, 10 );
  }
}

// ##############################################
// EXPORT
// ##############################################
export {
  cleanContainer,
  alerts
}