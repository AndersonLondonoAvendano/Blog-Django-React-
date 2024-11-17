from django.db import models

# Create your models here.



# estoy creando una tabla con el nombre task y los siguientes campos
# en mi base de datos

class Task(models.Model):
    title= models.CharField(max_length=200)
    description= models.TextField(blank=True)
    done= models.BooleanField(default=False)
    
    def __str__(self):
        return self.title
 
  
#voy a serializar los campos que se van a enviar como un paquete json
#osea que datos voy a obtener de mi vase de datos  y voy a convertir en json



    

