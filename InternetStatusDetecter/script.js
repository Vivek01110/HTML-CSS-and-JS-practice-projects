function check_status(){
    const status_text = document.getElementById('status');
    const ip_adress_text = document.getElementById('ipAdress');
    const network_text = document.getElementById('Network');

    status_text.textContent = "Checking...";
    ip_adress_text.textContent = "Checking..";
    network_text.textContent = "Checking...";
    
    if(navigator.onLine){
   
      fetch('https://api.ipify.org?format=json')
     .then((response)=>response.json())
     .then((data) =>{

        ip_adress_text.textContent = data.ip;
        status_text.textContent = "Connected";
        
        const connection = navigator.connection;

        const network_strength = connection ? connection.downlink  + ' Mbps' : 'Unknown';
        network_text.textContent = network_strength;

     })

    .catch(()=>{
        status_text.textContent = "Disconnected";
        ip_adress_text.textContent = "---";
        network_text.textContent = "---";
     });

    }
    else{
        status_text.textContent = "Disconnected";
        ip_adress_text.textContent = "---";
        network_text.textContent = "---";
        
    }

}

document.addEventListener('DOMContentLoaded',check_status);

const refresh_button = document.querySelector('.button_container');

refresh_button.addEventListener('click', check_status);

