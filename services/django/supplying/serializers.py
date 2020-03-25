from rest_framework import serializers
from supplying.models import Volume, TargetVolumes

# Volume Serializer
class VolumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volume
        fields = '__all__'
        read_only_fields = ['id']

# TargetVolumes Serializer
class TargetVolumesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TargetVolumes
        fields = '__all__'
        read_only_fields = ['id']