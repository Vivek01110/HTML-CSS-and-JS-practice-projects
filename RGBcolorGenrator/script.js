    const red_range = document.getElementById('red_range');
    const green_range = document.getElementById('Green_range');
    const blue_range = document.getElementById('Blue_range');

    const box_color = document.getElementById('box');

    const copy_Button = document.getElementById('copy_Button');
    const rgb_values = document.getElementById('rgb_value');
     
    


    set_color();
      
    
    red_range.addEventListener('input',set_color);
    green_range.addEventListener('input',set_color);
    blue_range.addEventListener('input',set_color);
    copy_Button.addEventListener('click' ,copy_to_clipboard);
    
    function set_color(){

        copy_Button.textContent = "Copy";
        copy_Button.disabled = false;
        

        const red_value = red_range.value;
        const green_value = green_range.value;
        const blue_value = blue_range.value;

       

        const rgb_color = `rgb(${red_value},${green_value},${blue_value})`;

        box_color.style.backgroundColor = rgb_color;
        rgb_values.textContent = rgb_color; // rgb_values is to diplay on the button
    }

    function copy_to_clipboard(){
       
        const red_value = red_range.value;
        const green_value = green_range.value;
        const blue_value = blue_range.value;

        const rgb_color = `rgb(${red_value},${green_value},${blue_value})`;

        navigator.clipboard.writeText(rgb_color)
        .then(() =>{
            copy_Button.textContent = "Copied";
            copy_Button.disabled = true;

            setTimeout(() =>{
                copy_Button.textContent = "Copy";
                copy_Button.disabled = false;
            },3000);
         })
        .catch((err) =>{
            console.log("failed to copy in clipboard");
        });
   
        
       
            copy_Button.textContent = "Copied";
            copy_Button.disabled = true;
    }
   




   
    
    
