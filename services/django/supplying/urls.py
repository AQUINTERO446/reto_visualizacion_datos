from rest_framework import routers
from .api import VolumeViewset, TargetVolumesViewset

router = routers.DefaultRouter()
router.register('api/volume', VolumeViewset, 'volume')
router.register('api/target_volumes', TargetVolumesViewset, 'target_volumes')

urlpatterns = router.urls