 document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Detener el envío normal

            const statusDiv = document.getElementById('message-status');
            const submitBtn = document.getElementById('submitBtn');

            // 1. Validar que el formulario sea válido
            if (!this.checkValidity()) {
                return;
            }

            // 2. Simular proceso de envío
            submitBtn.disabled = true;
            submitBtn.textContent = 'Procesando...';

            // Limpiar mensaje previo
            statusDiv.style.display = 'none';

            setTimeout(() => {
                // 3. Mostrar el mensaje de éxito
                statusDiv.style.display = 'block';
                statusDiv.innerHTML = '<strong>🚀 ¡Mensaje Enviado con Éxito!</strong> Gracias por tu comentario.';

                // 4. Limpiar el formulario
                this.reset();
                
                // 5. Restablecer el botón
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';

                // 6. Ocultar el mensaje después de 5 segundos
                setTimeout(() => {
                    statusDiv.style.display = 'none';
                }, 5000);
                
            }, 1000); // Simula 1 segundo de carga
        });