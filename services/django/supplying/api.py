from supplying.models import Volume, TargetVolumes
from rest_framework import viewsets, permissions
from .serializers import VolumeSerializer, TargetVolumesSerializer

# Volume Viewset
class VolumeViewset(viewsets.ModelViewSet):
    queryset = Volume.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VolumeSerializer

# TargetVolumes Viewset
class TargetVolumesViewset(viewsets.ModelViewSet):
    queryset = TargetVolumes.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TargetVolumesSerializer