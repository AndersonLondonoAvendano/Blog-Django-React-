from rest_framework import serializers
from .models import Task



 
#voy a serializar los campos que se van a enviar como un paquete json
#osea que datos voy a obtener de mi base de datos  y voy a convertir en json

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields=('id','title','description','done') # campos que voy  a requerir
        
