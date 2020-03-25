from rest_framework import serializers
from water.models import ReinstallationWaterService, WaterSources, WaterProduction, Inventory, DamageRate

# ReinstallationWaterService Serializer
class ReinstallationWaterServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReinstallationWaterService
        fields = '__all__'
        read_only_fields = ['id']

# WaterSources Serializer
class WaterSourcesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterSources
        fields = '__all__'
        read_only_fields = ['id']

# WaterProduction Serializer
class WaterProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterProduction
        fields = '__all__'
        read_only_fields = ['id']

# Inventory Serializer
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = '__all__'
        read_only_fields = ['id']

# DamageRate Serializer
class DamageRateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DamageRate
        fields = '__all__'
        read_only_fields = ['id']