from rest_framework import serializers
from traffic.models import Metrolinea, Subpoena, Accidents, Injuries, Deaths

# Metrolinea Serializer
class MetrolineaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metrolinea
        fields = '__all__'
        read_only_fields = ['id']

# Subpoena Serializer
class SubpoenaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subpoena
        fields = '__all__'
        read_only_fields = ['id']

# Accidents Serializer
class AccidentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accidents
        fields = '__all__'
        read_only_fields = ['id']

# Injuries Serializer
class InjuriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Injuries
        fields = '__all__'
        read_only_fields = ['id']

# Deaths Serializer
class DeathsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deaths
        fields = '__all__'
        read_only_fields = ['id']