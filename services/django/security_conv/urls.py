from rest_framework import routers
from .api import SecurityViewset, CoexistenceViewset

router = routers.DefaultRouter()
router.register('api/security', SecurityViewset, 'security')
router.register('api/conv', CoexistenceViewset, 'conv')

urlpatterns = router.urls