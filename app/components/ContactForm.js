export function ContactForm(){

    const d = document,
    $form = d.createElement('form'),
    $styles = d.getElementById('dynamic-styles');

    $styles.innerHTML = `
        .contact-form{
            margin: 2em auto;
            width: 80%;
            height: 400px;
        }
    
        .contact-form input{
            height: 2em;
            width: 100%;
            margin-top: 1.5em;
        }
    
        .contact-form textarea{
            margin-top: 1.5em;
            width: 100%;
            resize: none;
        }

        
        .validationErr{
            display: block;
            visibility: hidden;
            opacity: 0;
            height: 1rem;
            background-color: red;
            color: white;
            font-size: .8rem;
            transition: opacity 0.3s ease-in; 
        }

        .Active{
            visibility: visible;
            opacity: 1;
        }
        
    `;


    $form.innerHTML = `
    <legend>Envianos tu comentario</legend>
    <input  data-validateNombre  placeholder="Escribe tu nombre" required >
    <label class="validationErr"></label>

    <input data-validateEmail placeholder="Escribe tu email" required>
    <label class="validationErr"></label>

    <input placeholder="Asunto a tratar" >
    <label class="validationErr"></label>

    <textarea id="" cols="90" rows="10" placeholder="Escribe tu comentario" required></textarea>
    <label class="validationErr"></label>
    <input type="submit" value="Enviar">
    
    `


    function ValidationForms(){
        const $inputs = $form.querySelectorAll(`input:not([type="submit"])`),
        regEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
        regNombre = /^([a-zñ]\s?){1,50}$/i,
        maxCaracter = 255;

        
        $form.addEventListener('input', (e) => {

            let lblError = e.target.nextElementSibling;
    
            if( (e.target.hasAttribute("data-validateNombre")) ){
    
                if( !regNombre.test(e.target.value) && e.target.value !== ""  ){
                    lblError.textContent = "Nombre solo acepta letras y espacios en blancos";  
    
                    lblError.classList.add("Active")
    
                }else lblError.classList.remove("Active")
                
            }
    
    
            if( (e.target.hasAttribute("data-validateEmail")) ){
    
                if( !regEmail.test(e.target.value) && e.target.value !== ""){
                    lblError.textContent = "Email Incorrecto";  
                    
                    lblError.classList.add("Active")
    
                }else lblError.classList.remove("Active")
    
            }
    
            if(e.target.matches('textarea')){
    
                if(e.target.textLength > 255){
                    lblError.textContent = "Los comentarios no deben exceder los 255 caracteres";
                    lblError.classList.add("Active")
    
    
                }else lblError.classList.remove("Active")
            }

        })
      
        // Capturando el Submit
        $form.addEventListener('submit', (e) => {
    
            e.preventDefault();
            
            let correct = false;

            $inputs.forEach((element) => {
                
                if (element.value.trim() == "") {
                    element.nextElementSibling.textContent = "Este campo es requerido";   
                    correct = false;
                }
                else {
                    correct = true;
                    element.nextElementSibling.textContent = "";
                }
        
            })
    
        })
    
    }  

    $form.classList.add("contact-form");
    ValidationForms();


    return $form;
}