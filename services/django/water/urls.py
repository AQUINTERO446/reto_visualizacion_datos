from rest_framework import routers
from .api import ReinstallationWaterServiceViewset, WaterSourcesViewset, WaterProductionViewset, InventoryViewset, DamageRateViewset, GlobalParametersViewset

router = routers.DefaultRouter()
router.register('api/reinstallation_water', ReinstallationWaterServiceViewset, 'reinstallation_water')
router.register('api/water_source', WaterSourcesViewset, 'water_source')
router.register('api/water_production', WaterProductionViewset, 'water_production')
router.register('api/inventory', InventoryViewset, 'inventory')
router.register('api/damage_rate', DamageRateViewset, 'damage_rate')
router.register('api/global_parameters', GlobalParametersViewset, 'global_parameters')

urlpatterns = router.urls