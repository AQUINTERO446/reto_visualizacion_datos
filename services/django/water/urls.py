from rest_framework import routers
from .api import ReinstallationWaterServiceViewset, WaterSourcesViewset, WaterProductionViewset, InventoryViewset, DamageRateViewset

router = routers.DefaultRouter()
router.register('api/reinstallation_water', ReinstallationWaterServiceViewset, 'reinstallation_water')
router.register('api/water_source', WaterSourcesViewset, 'water_source')
router.register('api/water_production', WaterProductionViewset, 'water_production')
router.register('api/inventory', InventoryViewset, 'inventory')
router.register('api/damage_rate', DamageRateViewset, 'damage_rate')

urlpatterns = router.urls