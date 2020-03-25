from rest_framework import routers
from .api import MetrolineaViewset, SubpoenaViewset, AccidentsViewset, InjuriesViewset, DeathsViewset

router = routers.DefaultRouter()
router.register('api/metrolinea', MetrolineaViewset, 'metrolinea')
router.register('api/subpoena', SubpoenaViewset, 'subpoena')
router.register('api/accident', AccidentsViewset, 'accident')
router.register('api/injurie', InjuriesViewset, 'injurie')
router.register('api/death', DeathsViewset, 'death')

urlpatterns = router.urls