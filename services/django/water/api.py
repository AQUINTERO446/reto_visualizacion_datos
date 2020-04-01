from water.models import ReinstallationWaterService, WaterSources, WaterProduction, Inventory, DamageRate, GlobalParameters
from rest_framework import viewsets, permissions
from .serializers import ReinstallationWaterServiceSerializer, WaterSourcesSerializer, WaterProductionSerializer, InventorySerializer, DamageRateSerializer, GlobalParametersSerializer

# ReinstallationWaterService Viewset
class ReinstallationWaterServiceViewset(viewsets.ModelViewSet):
    queryset = ReinstallationWaterService.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ReinstallationWaterServiceSerializer

# WaterSources Viewset
class WaterSourcesViewset(viewsets.ModelViewSet):
    queryset = WaterSources.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WaterSourcesSerializer

# WaterProduction Viewset
class WaterProductionViewset(viewsets.ModelViewSet):
    queryset = WaterProduction.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = WaterProductionSerializer

# Inventory Viewset
class InventoryViewset(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InventorySerializer

# GlobalParameters Viewset
class GlobalParametersViewset(viewsets.ModelViewSet):
    queryset = GlobalParameters.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GlobalParametersSerializer

# DamageRate Viewset
class DamageRateViewset(viewsets.ModelViewSet):
    queryset = DamageRate.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DamageRateSerializer