from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls # modulo que documenta mi backend

router= routers.DefaultRouter()
router.register(r'tasks',views.TaskView,'tasks')

urlpatterns = [
    path('api/v1/',include(router.urls)),
    
    # url para encontrar la documentacion de mi backend
    path('docs/',include_docs_urls(title="Task API")),
]


# todo este codigo lo que esta realizando son las rutas 
# GET
# POST
# PUT
# DELETE